<template>
    <h1>Expense Tracker</h1>
    <nav>
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/expenses">Expenses</RouterLink>
        <RouterLink to="/categories">Categories</RouterLink>
        <RouterLink to="/reports">Reports</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
    </nav>
    <main>
        <RouterView />
    </main>
</template>

<script setup></script>

<style scoped>
</style>
