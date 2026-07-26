<script setup>
import { ref, onMounted } from "vue";
import { getExpenses } from "@/services/expenseService";

const expenses = ref([]);

onMounted(async () => {
    console.log("onMounted");
    expenses.value = await getExpenses();
});
</script>

<template>
    <h1 class="text-2xl font-bold mb-4">Expenses</h1>

    <ul>
        <li v-for="expense in expenses" :key="expense.id">{{ expense.title }} - ₱{{ expense.amount }}</li>
    </ul>
</template>
