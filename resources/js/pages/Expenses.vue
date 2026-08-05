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
                    <input v-model="form.amount" class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white" id="amount" type="number" step="0.01" min="0" placeholder="" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-900 dark:text-white" for="name"> Date </label>
                    <input v-model="form.expense_date" class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white" id="date" type="date" placeholder="" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-900 dark:text-white" for="message"> Note </label>
                    <textarea v-model="form.notes" class="mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white" id="note" rows="4" placeholder="Your note"></textarea>
                </div>

                <button :disabled="loading" @click="saveExpense()" class="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600 dark:hover:bg-indigo-700 dark:hover:text-white" type="button">
                    {{ loading ? "Saving..." : "Save" }}
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
                            <th class="px-3 py-2 whitespace-nowrap">Action</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                        <tr v-for="expense in expenses" :key="expense.id" class="*:text-gray-900 *:first:font-medium">
                            <td class="px-3 py-2 whitespace-nowrap">{{ expense.title }}</td>
                            <td class="px-3 py-2 whitespace-nowrap">₱ {{ formatAmount(expense.amount) }}</td>
                            <td class="px-3 py-2 whitespace-nowrap">{{ expense.expense_date }}</td>
                            <td class="px-3 py-2 whitespace-nowrap">
                                <div class="inline-flex">
                                    <button
                                        class="-ms-px border border-gray-200 px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white dark:focus:ring-offset-gray-900"
                                        aria-label="Edit"
                                    >
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                        </svg>
                                    </button>

                                    <button
                                        @click="removeExpense(expense.id)"
                                        class="-ms-px rounded-e-sm border border-gray-200 px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:pointer-events-auto disabled:opacity-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white dark:focus:ring-offset-gray-900"
                                        aria-label="Delete"
                                    >
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { getExpenses, createExpense, deleteExpense } from "@/services/expenseService";

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

const saveExpense = async () => {
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

const removeExpense = async (id) => {
    try {
        if (!confirm("Delete this expense?")) {
            return;
        }
        loading.value = true;
        await deleteExpense(id);
        await loadExpenses();
    } catch (error) {
        console.error("Failed to delete expense:", error);
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

const formatAmount = (num) => {
    if (num) {
        num = Number(num);
        return num.toLocaleString();
    }
};
</script>
