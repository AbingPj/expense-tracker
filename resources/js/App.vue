<template>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <nav>
        <RouterLink to="/">Go to Dashboard</RouterLink>
        <RouterLink to="/expenses">Go to expenses</RouterLink>
    </nav>
    <div class="container">
        <h1>Expense Tracker</h1>
        <p>Laravel 13 + Vue 3</p>
        <p>By PJ</p>
    </div>
    <main>
        <RouterView />
    </main>
</template>

<script setup></script>

<style scoped>
.container {
    padding: 40px;
    font-family: Arial, Helvetica, sans-serif;
}
</style>
