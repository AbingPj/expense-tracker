import { computed } from 'vue'
import { useExpenseStore } from '../stores/expenseStore'

export function useExpense() {
  const store = useExpenseStore()

  return {
    expenses: computed(() => store.expenses),
    fetchExpenses: store.fetchExpenses
  }
}
