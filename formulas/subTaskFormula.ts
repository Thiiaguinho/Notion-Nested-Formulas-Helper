const subTaskFormula = {
  isNotSubtask: ["prop('Sub Tasks?') == false", 'NO SUB TASKS'],
  isCheckBoxTrue: ["prop('Task Checkbox') == true", 'COMPLETED'],
  isSubTaskAggregatorTrue: ["prop('Sub Task Aggregator') == true", 'COMPLETED'],
  isSubTaskAnyFalse: ["prop('Sub Task Any') == false", 'NOT STARTED'],
  orElse: 'IN PROGRESS',
};

export default subTaskFormula;
