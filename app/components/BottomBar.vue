<template>
  <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
    <div class="flex justify-around items-center h-16">
      <NuxtLink to="/" class="flex flex-col items-center justify-center w-full" :class="$route.path === '/' ? 'text-teal-500' : 'text-gray-400'">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span class="text-xs mt-1">Home</span>
      </NuxtLink>
      <NuxtLink to="/transaction" class="flex flex-col items-center justify-center w-full" :class="$route.path === '/transaction' ? 'text-teal-500' : 'text-gray-400'">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18M3 12h18M3 18h18" />
        </svg>
        <span class="text-xs mt-1">Transaction</span>
      </NuxtLink>
      <NuxtLink to="/budget" class="flex flex-col items-center justify-center w-full" :class="$route.path === '/budget' ? 'text-teal-500' : 'text-gray-400'">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
        <span class="text-xs mt-1">Budget</span>
      </NuxtLink>
      <NuxtLink to="/settings" class="flex flex-col items-center justify-center w-full" :class="$route.path === '/settings' ? 'text-teal-500' : 'text-gray-400'">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span class="text-xs mt-1">Settings</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic will be added here if needed
</script>
