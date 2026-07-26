import { defineStore } from 'pinia'

export const useExpenseStore = defineStore('expense', {
  state: () => ({
    expenses: []
  }),

  actions: {
    async fetchExpenses() {
      this.expenses = []
    }
  }
})
