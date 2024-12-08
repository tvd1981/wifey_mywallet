<template>
  <div>
    <!-- Header -->
    <div class="p-4">
      <h1 class="text-3xl font-bold">Ngân sách</h1>
    </div>

    <!-- Budget Cards -->
    <div class="p-4 space-y-4">
      <!-- Budget Card -->
      <div class="bg-white rounded-3xl p-6 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-[#E6FBFA] rounded-full flex items-center justify-center">
              <span class="text-2xl">🐱</span>
            </div>
            <div>
              <div class="text-lg font-medium">Cho thú cưng</div>
              <div class="text-gray-600">Pet</div>
            </div>
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between text-teal-500">
            <span>đ220,000</span>
            <span>remaining from budget of đ500,000</span>
          </div>

          <!-- Progress Bar -->
          <div class="relative pt-1">
            <div class="flex mb-2 items-center justify-between">
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-teal-500 h-2.5 rounded-full" style="width: 56%"></div>
              </div>
              <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 ml-3">
                56%
              </span>
            </div>
          </div>

          <!-- Date Range -->
          <div class="flex items-center justify-between text-gray-500 text-sm">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
              </svg>
              1 thg 12, 2024
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
              </svg>
              31 thg 12, 2024
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Budget Button -->
    <div class="fixed bottom-24 left-1/2 transform -translate-x-1/2">
      <button class="bg-[#2D4356] text-white px-6 py-3 rounded-full flex items-center space-x-2 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>Thêm Ngân sách</span>
      </button>
    </div>

    <!-- Add padding bottom for bottom navigation -->
    <div class="h-24">
      <FloatingButton />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
