
import axios from 'axios'

export const getExpenses = async () => {
    const response = await axios.get('/api/expenses')
    return response.data
}