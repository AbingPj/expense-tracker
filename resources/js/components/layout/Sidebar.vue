<template>
    <div class="flex h-screen flex-col justify-between border-e border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div class="p-4">
            <!-- <span class="grid h-12 w-32 place-content-center rounded-lg bg-gray-100 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400"> Logo </span> -->
            <div class="flex items-center justify-center h-12 rounded-lg bg-teal-600 text-white font-bold text-md">💰 Expense Tracker</div>

            <ul class="mt-4 space-y-1">
                <li>
                    <RouterLink :to="{ name: 'dashboard' }" class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-white"> 📊 Dashboard </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'expenses' }" class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-white"> 💸 Expenses </RouterLink>
                </li>

                <li>
                    <RouterLink :to="{ name: 'categories' }" class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-white"> 📂 Categories </RouterLink>
                </li>

                <li>
                    <RouterLink :to="{ name: 'reports' }" class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-white"> 📈 Reports </RouterLink>
                </li>

                <li>
                    <RouterLink :to="{ name: 'settings' }" class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-white"> ⚙️ Settings </RouterLink>
                </li>
            </ul>
        </div>

        <div class="sticky inset-x-0 bottom-0 border-t border-gray-100 dark:border-gray-800">
            <a href="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50 hover:transition-colors dark:bg-gray-900 dark:hover:bg-gray-800">
                <img alt="" src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=1160" class="size-10 rounded-full object-cover" />

                <p class="text-xs text-gray-900 dark:text-white">
                    <strong class="block font-medium">Pj Abing</strong>

                    <span> pj.abing@gmail.com </span>
                </p>
            </a>
        </div>
    </div>
</template>
