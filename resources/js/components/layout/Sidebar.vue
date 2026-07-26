<template>
    <div class="flex h-screen flex-col justify-between border-e border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div class="p-4">
            <div class="flex items-center justify-center h-12 rounded-lg bg-teal-600 text-white font-bold text-lg">💰 Expense Tracker</div>
            <ul class="mt-4 space-y-1">
                <li>
                    <RouterLink :to="{ name: 'dashboard' }" class="block rounded-lg px-4 py-2 text-sm font-medium"> 📊 Dashboard </RouterLink>
                </li>

                <li>
                    <RouterLink :to="{ name: 'expenses' }" class="block rounded-lg px-4 py-2 text-sm font-medium"> 💸 Expenses </RouterLink>
                </li>

                <li>
                    <RouterLink :to="{ name: 'categories' }" class="block rounded-lg px-4 py-2 text-sm font-medium"> 📂 Categories </RouterLink>
                </li>

                <li>
                    <RouterLink :to="{ name: 'reports' }" class="block rounded-lg px-4 py-2 text-sm font-medium"> 📈 Reports </RouterLink>
                </li>

                <li>
                    <RouterLink :to="{ name: 'settings' }" class="block rounded-lg px-4 py-2 text-sm font-medium"> ⚙️ Settings </RouterLink>
                </li>
            </ul>
        </div>

        <!-- <div class="sticky inset-x-0 bottom-0 border-t border-gray-100 dark:border-gray-800">
            <a href="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50 hover:transition-colors dark:bg-gray-900 dark:hover:bg-gray-800">
                <img alt="" src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=1160" class="size-10 rounded-full object-cover" />

                <p class="text-xs text-gray-900 dark:text-white">
                    <strong class="block font-medium">Eric Frusciante</strong>

                    <span> eric@frusciante.com </span>
                </p>
            </a>
        </div> -->

        <div class="flex items-center gap-3">
            <img src="https://ui-avatars.com/api/?name=Guest" class="h-10 w-10 rounded-full" />

            <div>
                <p class="font-medium">Guest User</p>
                <p class="text-xs text-gray-500">guest@example.com</p>
            </div>
        </div>
    </div>
</template>
