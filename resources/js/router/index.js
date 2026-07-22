import { createWebHistory, createRouter } from 'vue-router'

import DashboardPage from '../pages/Dashboard.vue'
import ExpensesPage from '../pages/Expenses.vue'

const routes = [
  { path: '/', component: DashboardPage },
  { path: '/expenses', component: ExpensesPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})