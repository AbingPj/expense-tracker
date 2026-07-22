import { createWebHistory, createRouter } from 'vue-router'
//layout
import MainLayout from '../layouts/MainLayout.vue'
//pages
import DashboardPage from '../pages/Dashboard.vue'
import ExpensesPage from '../pages/Expenses.vue'
import CategoriesPage from '../pages/Categories.vue'
import ReportsPage from '../pages/Reports.vue'
import SettingsPage from '../pages/Settings.vue'

const routes = [
    {
        path: '/',
        component: MainLayout,

        children: [
            {
                path: '',
                component: DashboardPage
            },
            {
                path: 'expenses',
                component: ExpensesPage
            },
            {
                path: 'categories',
                component: CategoriesPage
            },
            {
                path: 'reports',
                component: ReportsPage
            },
            {
                path: 'settings',
                component: SettingsPage
            }
        ]
    }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})