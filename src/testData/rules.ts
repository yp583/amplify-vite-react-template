export interface Rule {
  id: string;
  label: string;
  condition: string;
  jumpNextRow: string;
  doneWithGroup: boolean;
}

// Import the rules from the JSON file
import rulesData from './rules.json';

export const rules: Rule[] = rulesData as Rule[];

// Create a map for fast lookup
export const ruleMap = new Map(rules.map(rule => [rule.id, rule])); 