<template>
  <div>
    <!-- Time filter -->
    <div class="p-4">
      <div class="flex rounded-full overflow-hidden bg-gray-200 p-1">
        <button class="flex-1 py-2 px-4 rounded-full bg-teal-500 text-white">Mọi thời gian</button>
        <button class="flex-1 py-2 px-4 text-gray-700">Hàng năm</button>
        <button class="flex-1 py-2 px-4 text-gray-700">Hàng tháng</button>
      </div>
    </div>

    <!-- Balance Card -->
    <div class="mx-4">
      <div class="bg-[#E6FBFA] rounded-3xl p-6 shadow-sm">
        <div class="mb-4">
          <h2 class="text-xl font-medium">Tổng số dư</h2>
          <div class="flex items-center">
            <span class="text-2xl font-bold">đ37,918,300</span>
            <span class="ml-2">🤗</span>
          </div>
        </div>
        
        <div class="flex justify-between gap-4">
          <div class="bg-white rounded-xl p-4 flex-1">
            <div class="text-red-500">Chi phí</div>
            <div class="text-red-500 font-medium">đ3,042,300</div>
          </div>
          <div class="bg-white rounded-xl p-4 flex-1">
            <div class="text-teal-500">Thu nhập</div>
            <div class="text-teal-500 font-medium">đ0</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toggle Buttons -->
    <div class="flex gap-2 p-4">
      <button class="px-6 py-2 rounded-full bg-teal-500 text-white">Expense</button>
      <button class="px-6 py-2 rounded-full bg-gray-200">Income</button>
    </div>

    <!-- Chart -->
    <div class="p-4">
      <div class="aspect-square relative">
        <!-- Placeholder for chart - you'll need to implement actual chart using a library like Chart.js -->
        <div class="rounded-full border-8 border-blue-400 w-full h-full"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Add any page-specific logic here
</script>
