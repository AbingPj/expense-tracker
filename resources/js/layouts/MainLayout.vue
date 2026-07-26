<template>
    <div class="flex min-h-screen bg-gray-100">

        <Sidebar />

        <main class="flex-1 overflow-auto">

            <div class="p-8">

                <RouterView />

            </div>

        </main>

    </div>
</template>

<script setup>
import Sidebar from '@/components/layout/Sidebar.vue'
</script>