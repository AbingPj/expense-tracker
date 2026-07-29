import api from './api'

export const getExpenses = async () => {
    const response = await api.get('/expenses')
    return response.data
}

export const createExpense = async (payload) => {
    const response = await api.post('/expenses', payload)
    return response.data
}

export const updateExpense = async (id, payload) => {
    const response = await api.put(`/expenses/${id}`, payload)
    return response.data
}

export const deleteExpense = async (id) => {
    await api.delete(`/expenses/${id}`)
}