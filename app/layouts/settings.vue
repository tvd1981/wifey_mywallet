<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header with back button -->
    <div class="bg-white px-4 py-3 flex items-center border-b border-gray-200">
      <button class="p-2 -ml-2" @click="router.back()">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </button>
      <h1 class="text-lg font-medium ml-2">Cài đặt</h1>
    </div>

    <!-- Page content -->
    <div class="p-4">
      <slot />
    </div>

    <!-- Keep bottom navigation -->
    <BottomBar />
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>
