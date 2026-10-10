// Structured Math State Model for Casio Natural-V.P.A.M. Display

export interface TextItem {
  type: 'text';
  id: string;
  value: string;
}

export interface FractionItem {
  type: 'frac';
  id: string;
  num: string;
  den: string;
}

export type MathItem = TextItem | FractionItem;

export interface CursorPosition {
  fracId?: string; // if defined, cursor is inside this fraction
  field?: 'num' | 'den'; // 'num' for numerator, 'den' for denominator
  offset: number; // index within the text string
}

export interface MathExpressionState {
  items: MathItem[];
  cursor: CursorPosition;
}

let nextId = 1;
export function genId(): string {
  return `m_${nextId++}_${Date.now().toString(36)}`;
}

/**
 * Creates initial demonstration model matching user's photo:
 * (√2/2) + (√2/3)
 */
export function createInitialModel(): MathExpressionState {
  const f1: FractionItem = {
    type: 'frac',
    id: genId(),
    num: '√2',
    den: '2',
  };

  const op: TextItem = {
    type: 'text',
    id: genId(),
    value: '+',
  };

  const f2: FractionItem = {
    type: 'frac',
    id: genId(),
    num: '√2',
    den: '3',
  };

  return {
    items: [f1, op, f2],
    // Place cursor in the lower denominator of the second fraction at end
    cursor: {
      fracId: f2.id,
      field: 'den',
      offset: 1,
    },
  };
}

/**
 * Converts structured math items into an evaluatable math string for mathEngine
 */
export function mathModelToEvaluatableString(items: MathItem[]): string {
  if (items.length === 0) return '0';

  return items
    .map((item) => {
      if (item.type === 'text') {
        return item.value;
      }
      if (item.type === 'frac') {
        const numStr = item.num.trim() || '0';
        const denStr = item.den.trim() || '1';
        return `((${numStr})/(${denStr}))`;
      }
      return '';
    })
    .join('');
}

/**
 * Inserts a token into the expression model at current cursor location
 */
export function insertTokenIntoModel(
  state: MathExpressionState,
  token: string
): MathExpressionState {
  const { items, cursor } = state;
  const newItems = JSON.parse(JSON.stringify(items)) as MathItem[];

  // 1. If user pressed FRACTION button [■/□]
  if (token === 'FRAC' || token === '/') {
    // If cursor is at root level
    if (!cursor.fracId) {
      // Check if previous item is a text number that should become numerator
      let numText = '';
      let insertIdx = cursor.offset;

      if (insertIdx > 0 && insertIdx <= newItems.length) {
        const prevItem = newItems[insertIdx - 1];
        if (prevItem && prevItem.type === 'text') {
          // Take the trailing number/identifier if any
          const m = prevItem.value.match(/([0-9a-zA-Zπe√]+)$/);
          if (m) {
            numText = m[1];
            prevItem.value = prevItem.value.slice(0, -numText.length);
            if (prevItem.value.length === 0) {
              newItems.splice(insertIdx - 1, 1);
              insertIdx--;
            }
          }
        }
      }

      const newFrac: FractionItem = {
        type: 'frac',
        id: genId(),
        num: numText,
        den: '',
      };

      newItems.splice(insertIdx, 0, newFrac);

      // If numerator was populated, cursor goes to denominator!
      // If numerator was empty, cursor goes to numerator!
      if (numText.length > 0) {
        return {
          items: newItems,
          cursor: {
            fracId: newFrac.id,
            field: 'den',
            offset: 0,
          },
        };
      } else {
        return {
          items: newItems,
          cursor: {
            fracId: newFrac.id,
            field: 'num',
            offset: 0,
          },
        };
      }
    } else {
      // If already inside a fraction:
      // Pressing fraction inside numerator or denominator moves cursor or nests
      if (cursor.field === 'num') {
        return {
          items: newItems,
          cursor: {
            fracId: cursor.fracId,
            field: 'den',
            offset: 0,
          },
        };
      } else {
        // In denominator: exit fraction to root and insert text '/'
        const fracIdx = newItems.findIndex((it) => it.id === cursor.fracId);
        return {
          items: newItems,
          cursor: {
            offset: fracIdx !== -1 ? fracIdx + 1 : newItems.length,
          },
        };
      }
    }
  }

  // 2. If cursor is INSIDE A FRACTION (Numerator or Denominator)
  if (cursor.fracId) {
    const frac = newItems.find((it) => it.id === cursor.fracId) as FractionItem | undefined;
    if (frac && frac.type === 'frac') {
      const field = cursor.field === 'den' ? 'den' : 'num';
      const curText = frac[field];
      const safeOff = Math.max(0, Math.min(cursor.offset, curText.length));

      // If user types an operator like '+' or '-' while at the end of denominator:
      // On Casio, typing an operator usually exits the fraction unless intended inside
      frac[field] = curText.slice(0, safeOff) + token + curText.slice(safeOff);

      return {
        items: newItems,
        cursor: {
          fracId: cursor.fracId,
          field,
          offset: safeOff + token.length,
        },
      };
    }
  }

  // 3. If cursor is AT ROOT LEVEL
  let rootIdx = Math.max(0, Math.min(cursor.offset, newItems.length));

  // If item at rootIdx - 1 is a TextItem, append/insert into it
  if (rootIdx > 0 && newItems[rootIdx - 1]?.type === 'text') {
    const prevText = newItems[rootIdx - 1] as TextItem;
    prevText.value += token;
    return {
      items: newItems,
      cursor: {
        offset: rootIdx,
      },
    };
  } else {
    // Insert new TextItem
    const newText: TextItem = {
      type: 'text',
      id: genId(),
      value: token,
    };
    newItems.splice(rootIdx, 0, newText);
    return {
      items: newItems,
      cursor: {
        offset: rootIdx + 1,
      },
    };
  }
}

/**
 * Handles backspace / DEL
 */
export function deleteFromModel(state: MathExpressionState): MathExpressionState {
  const { items, cursor } = state;
  const newItems = JSON.parse(JSON.stringify(items)) as MathItem[];

  // 1. Inside a fraction
  if (cursor.fracId) {
    const fracIdx = newItems.findIndex((it) => it.id === cursor.fracId);
    if (fracIdx !== -1) {
      const frac = newItems[fracIdx] as FractionItem;
      const field = cursor.field === 'den' ? 'den' : 'num';
      const curText = frac[field];

      if (cursor.offset > 0) {
        // Delete character before cursor
        frac[field] = curText.slice(0, cursor.offset - 1) + curText.slice(cursor.offset);
        return {
          items: newItems,
          cursor: {
            fracId: cursor.fracId,
            field,
            offset: cursor.offset - 1,
          },
        };
      } else {
        // If offset is 0:
        if (field === 'den') {
          // If at start of denominator, jump cursor up to end of numerator!
          return {
            items: newItems,
            cursor: {
              fracId: cursor.fracId,
              field: 'num',
              offset: frac.num.length,
            },
          };
        } else {
          // At start of numerator: if numerator is empty, remove fraction
          if (frac.num.length === 0 && frac.den.length === 0) {
            newItems.splice(fracIdx, 1);
            return {
              items: newItems,
              cursor: {
                offset: fracIdx,
              },
            };
          } else {
            // Step out to root before fraction
            return {
              items: newItems,
              cursor: {
                offset: fracIdx,
              },
            };
          }
        }
      }
    }
  }

  // 2. At root level
  let rootIdx = Math.max(0, Math.min(cursor.offset, newItems.length));
  if (rootIdx > 0) {
    const targetItem = newItems[rootIdx - 1];
    if (targetItem.type === 'text') {
      if (targetItem.value.length > 1) {
        targetItem.value = targetItem.value.slice(0, -1);
        return {
          items: newItems,
          cursor: { offset: rootIdx },
        };
      } else {
        newItems.splice(rootIdx - 1, 1);
        return {
          items: newItems,
          cursor: { offset: rootIdx - 1 },
        };
      }
    } else if (targetItem.type === 'frac') {
      // Step into denominator of the fraction rather than immediately deleting
      return {
        items: newItems,
        cursor: {
          fracId: targetItem.id,
          field: 'den',
          offset: targetItem.den.length,
        },
      };
    }
  }

  return state;
}

/**
 * Handles Arrow Navigation (UP, DOWN, LEFT, RIGHT)
 */
export function moveCursorInModel(
  state: MathExpressionState,
  direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'
): MathExpressionState {
  const { items, cursor } = state;

  // ---------------- DIRECTION: DOWN ----------------
  if (direction === 'DOWN') {
    // If currently in Numerator, jump directly to Denominator!
    if (cursor.fracId && cursor.field === 'num') {
      const frac = items.find((it) => it.id === cursor.fracId) as FractionItem | undefined;
      const denLen = frac ? frac.den.length : 0;
      return {
        items,
        cursor: {
          fracId: cursor.fracId,
          field: 'den',
          offset: Math.min(cursor.offset, denLen),
        },
      };
    }

    // If at root level, look for any fraction ahead to enter
    if (!cursor.fracId) {
      const nextFrac = items.find((it, idx) => idx >= cursor.offset && it.type === 'frac') as FractionItem | undefined;
      if (nextFrac) {
        return {
          items,
          cursor: {
            fracId: nextFrac.id,
            field: 'den',
            offset: 0,
          },
        };
      }
    }
    return state;
  }

  // ---------------- DIRECTION: UP ----------------
  if (direction === 'UP') {
    // If currently in Denominator, jump directly up to Numerator!
    if (cursor.fracId && cursor.field === 'den') {
      const frac = items.find((it) => it.id === cursor.fracId) as FractionItem | undefined;
      const numLen = frac ? frac.num.length : 0;
      return {
        items,
        cursor: {
          fracId: cursor.fracId,
          field: 'num',
          offset: Math.min(cursor.offset, numLen),
        },
      };
    }

    // If at root level, look for any fraction behind to enter numerator
    if (!cursor.fracId) {
      const prevFrac = items.slice(0, cursor.offset).reverse().find((it) => it.type === 'frac') as FractionItem | undefined;
      if (prevFrac) {
        return {
          items,
          cursor: {
            fracId: prevFrac.id,
            field: 'num',
            offset: prevFrac.num.length,
          },
        };
      }
    }
    return state;
  }

  // ---------------- DIRECTION: RIGHT ----------------
  if (direction === 'RIGHT') {
    // If inside a fraction:
    if (cursor.fracId) {
      const fracIdx = items.findIndex((it) => it.id === cursor.fracId);
      const frac = items[fracIdx] as FractionItem | undefined;

      if (frac) {
        const field = cursor.field === 'den' ? 'den' : 'num';
        const curLen = frac[field].length;

        if (cursor.offset < curLen) {
          return {
            items,
            cursor: {
              ...cursor,
              offset: cursor.offset + 1,
            },
          };
        } else {
          // At end of field:
          if (field === 'num') {
            // In numerator: move down to denominator
            return {
              items,
              cursor: {
                fracId: cursor.fracId,
                field: 'den',
                offset: 0,
              },
            };
          } else {
            // In denominator: EXIT fraction to baseline after fraction!
            return {
              items,
              cursor: {
                offset: fracIdx + 1,
              },
            };
          }
        }
      }
    } else {
      // At root level
      if (cursor.offset < items.length) {
        const nextItem = items[cursor.offset];
        if (nextItem.type === 'frac') {
          // Step into the fraction's numerator!
          return {
            items,
            cursor: {
              fracId: nextItem.id,
              field: 'num',
              offset: 0,
            },
          };
        }
        return {
          items,
          cursor: {
            offset: cursor.offset + 1,
          },
        };
      }
    }
    return state;
  }

  // ---------------- DIRECTION: LEFT ----------------
  if (direction === 'LEFT') {
    if (cursor.fracId) {
      const fracIdx = items.findIndex((it) => it.id === cursor.fracId);
      const frac = items[fracIdx] as FractionItem | undefined;

      if (frac) {
        if (cursor.offset > 0) {
          return {
            items,
            cursor: {
              ...cursor,
              offset: cursor.offset - 1,
            },
          };
        } else {
          // At start of field:
          if (cursor.field === 'den') {
            // Jump up to end of numerator!
            return {
              items,
              cursor: {
                fracId: cursor.fracId,
                field: 'num',
                offset: frac.num.length,
              },
            };
          } else {
            // At start of numerator: EXIT fraction to root before fraction!
            return {
              items,
              cursor: {
                offset: fracIdx,
              },
            };
          }
        }
      }
    } else {
      // At root level
      if (cursor.offset > 0) {
        const prevItem = items[cursor.offset - 1];
        if (prevItem.type === 'frac') {
          // Step into fraction denominator at end!
          return {
            items,
            cursor: {
              fracId: prevItem.id,
              field: 'den',
              offset: prevItem.den.length,
            },
          };
        }
        return {
          items,
          cursor: {
            offset: cursor.offset - 1,
          },
        };
      }
    }
    return state;
  }

  return state;
}
