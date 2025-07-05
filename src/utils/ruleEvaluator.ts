import { Rule } from "../testData/rules";

export type StateMap = Record<string, string[]>;

/**
 * Safely evaluates a boolean expression against the current state
 * Handles expressions like "(ROW_1001 = Yes OR ROW_1002 = Yes) AND ROW_1003 > 5"
 */
export function evaluateCondition(condition: string, state: StateMap): boolean {
  if (!condition || condition.trim() === '') {
    return true; // No condition means always show
  }

  try {
    const normalizedCondition = condition.trim().toUpperCase();
    
    // Handle AND logic - show only if at least one other row has a value
    if (normalizedCondition === 'AND') {
      const otherRowsHaveValues = Object.keys(state).some(rowId => 
        state[rowId] && state[rowId].length > 0
      );
      return otherRowsHaveValues;
    }
    
    // Handle OR logic - show only if at least one other row has a value
    if (normalizedCondition === 'OR') {
      const otherRowsHaveValues = Object.keys(state).some(rowId => 
        state[rowId] && state[rowId].length > 0
      );
      return otherRowsHaveValues;
    }

    // Handle actual boolean expressions
    // Convert Epic-style expressions to JavaScript
    let jsExpression = condition
      // Replace row references with state lookups
      .replace(/([A-Z0-9_\s]+)\s*=\s*['"]([^'"]+)['"]/g, (_match, rowId, value) => {
        const cleanRowId = rowId.trim();
        const stateValue = state[cleanRowId] ? state[cleanRowId][0] : '';
        return `"${stateValue}" === "${value}"`;
      })
      // Replace <> with !==
      .replace(/<>/g, '!==')
      // Replace = with === (for non-string comparisons)
      .replace(/([A-Z0-9_\s]+)\s*=\s*([^'"\s]+)/g, (_match, rowId, value) => {
        const cleanRowId = rowId.trim();
        const stateValue = state[cleanRowId] ? state[cleanRowId][0] : '';
        return `"${stateValue}" === "${value}"`;
      })
      // Replace empty string checks
      .replace(/([A-Z0-9_\s]+)\s*<>\s*['"]\s*['"]/g, (_match, rowId) => {
        const cleanRowId = rowId.trim();
        const stateValue = state[cleanRowId] ? state[cleanRowId][0] : '';
        return `"${stateValue}" !== ""`;
      })
      // Replace OR with ||
      .replace(/\bOR\b/g, '||')
      // Replace AND with &&
      .replace(/\bAND\b/g, '&&');

    // Safely evaluate the JavaScript expression
    const result = new Function('state', `return ${jsExpression}`)(state);
    return Boolean(result);

  } catch (error) {
    console.warn('Error evaluating condition:', condition, error);
    return true; // Default to showing if there's an error
  }
}

/**
 * Checks if a rule should be visible based on its condition and current state
 */
export function isRuleVisible(rule: Rule, state: StateMap): boolean {
  return evaluateCondition(rule.condition, state);
}

/**
 * Handles jump logic when a rule is selected
 */
export function handleRuleSelection(
  rule: Rule,
  state: StateMap,
  _setState: (state: StateMap) => void,
  setHiddenRows: (hiddenRows: Set<string>) => void,
  hiddenRows: Set<string>
): void {
  if (rule.doneWithGroup) {
    // Hide all rows in the group (you may need to implement group logic)
    // For now, just hide the current row
    setHiddenRows(new Set([...hiddenRows, rule.id]));
  } else if (rule.jumpNextRow) {
    // Show only the next row
    const allRuleIds = Object.keys(state);
    const nextRowIndex = allRuleIds.indexOf(rule.jumpNextRow);
    if (nextRowIndex !== -1) {
      // Hide all rows except the next one
      const rowsToHide = allRuleIds.filter(id => id !== rule.jumpNextRow);
      setHiddenRows(new Set(rowsToHide));
    }
  }
  // Otherwise, keep current visibility
} 