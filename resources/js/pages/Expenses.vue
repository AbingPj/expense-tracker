<template>
    <h1 class="text-2xl font-bold mb-4">Expenses</h1>

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div class="h-auto rounded bg-gray-300">
            <div class="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-4 dark:border-gray-600 dark:bg-gray-800">
                <div>
                    <label class="block text-sm font-medium text-gray-900 dark:text-white" for="name"> Title </label>
                    <input v-model="form.title" class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white" id="title" type="text" placeholder="" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-900 dark:text-white" for="name"> Amount </label>
                    <input v-model="form.amount" class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white" id="amount" type="text" placeholder="" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-900 dark:text-white" for="name"> Date </label>
                    <input v-model="form.expense_date" class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white" id="date" type="date" placeholder="" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-900 dark:text-white" for="message"> Note </label>
                    <textarea v-model="form.notes" class="mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white" id="note" rows="4" placeholder="Your note"></textarea>
                </div>

                <button :disabled="loading" @click="saveNewExpense()" class="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600 dark:hover:bg-indigo-700 dark:hover:text-white" type="button">
                        {{ loading ? 'Saving...' : 'Save' }}
                </button>
            </div>
        </div>
        <div class="h-auto rounded bg-gray-300 lg:col-span-2">
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y-2 divide-gray-200">
                    <thead class="ltr:text-left rtl:text-right">
                        <tr class="*:font-medium *:text-gray-900">
                            <th class="px-3 py-2 whitespace-nowrap">Title</th>
                            <th class="px-3 py-2 whitespace-nowrap">Amount</th>
                            <th class="px-3 py-2 whitespace-nowrap">Date</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                        <tr v-for="expense in expenses" :key="expense.id" class="*:text-gray-900 *:first:font-medium">
                            <td class="px-3 py-2 whitespace-nowrap">{{ expense.title }}</td>
                            <td class="px-3 py-2 whitespace-nowrap">₱{{ expense.amount }}</td>
                            <td class="px-3 py-2 whitespace-nowrap">{{ expense.expense_date }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { getExpenses, createExpense } from "@/services/expenseService";

const expenses = ref([]);
const loading = ref(false);
const form = reactive({
    title: "",
    amount: "",
    expense_date: "",
    notes: "",
});

const loadExpenses = async () => {
    try {
        loading.value = true;
        expenses.value = await getExpenses();
    } catch (error) {
        console.error("Failed to load expenses:", error);
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    loadExpenses();
});

const saveNewExpense = async () => {
    try {
        loading.value = true;
        // console.log(...form);
        await createExpense(form);
        resetForm();
        await loadExpenses();
        return;
    } catch (error) {
        console.error("Failed to save expenses:", error);
    } finally {
        loading.value = false;
    }
};

const resetForm = () => {
    form.title = "";
    form.amount = "";
    form.expense_date = "";
    form.notes = "";
};
</script>
