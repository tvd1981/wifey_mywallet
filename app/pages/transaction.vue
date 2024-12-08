<template>
  <div>
    <!-- Header -->
    <div class="p-4">
      <h1 class="text-3xl font-bold">Giao dịch</h1>
      <button class="mt-2 flex items-center text-gray-600">
        <span>tháng 12 năm 2024</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    <!-- Summary -->
    <div class="mx-4 p-4 bg-gray-100 rounded-xl">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 rotate-180" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          <span class="ml-1 text-red-500">đ3,042,300</span>
        </div>
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          <span class="ml-1 text-teal-500">đ0</span>
        </div>
        <div class="flex items-center">
          <span class="text-gray-600">= đ-3,042,300</span>
        </div>
      </div>
    </div>

    <!-- Transaction List -->
    <div class="mt-4">
      <!-- Date Group -->
      <div class="px-4 py-2 bg-gray-50">
        <span class="text-gray-600">Th 4, 4 thg 12</span>
      </div>
      
      <!-- Transaction Item -->
      <div class="px-4 py-3 flex items-center justify-between border-b">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-[#E6FBFA] rounded-full flex items-center justify-center">
            <span class="text-2xl">❓</span>
          </div>
          <div class="ml-3">
            <div class="text-gray-600">Uncategorised</div>
            <div class="text-sm text-gray-500">mua api</div>
          </div>
        </div>
        <div class="text-red-500">đ250,000</div>
      </div>

      <!-- Date Group -->
      <div class="px-4 py-2 bg-gray-50">
        <span class="text-gray-600">Th 3, 3 thg 12</span>
      </div>

      <!-- Transaction Items -->
      <div class="px-4 py-3 flex items-center justify-between border-b">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-[#E6FBFA] rounded-full flex items-center justify-center">
            <span class="text-2xl">🏠</span>
          </div>
          <div class="ml-3">
            <div class="text-gray-600">Home</div>
            <div class="text-sm text-gray-500">grab</div>
          </div>
        </div>
        <div class="text-red-500">đ40,000</div>
      </div>

      <div class="px-4 py-3 flex items-center justify-between border-b">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-[#E6FBFA] rounded-full flex items-center justify-center">
            <span class="text-2xl">🏠</span>
          </div>
          <div class="ml-3">
            <div class="text-gray-600">Home</div>
            <div class="text-sm text-gray-500">cước internet</div>
          </div>
        </div>
        <div class="text-red-500">đ1,434,000</div>
      </div>

      <div class="px-4 py-3 flex items-center justify-between border-b">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-[#E6FBFA] rounded-full flex items-center justify-center">
            <span class="text-2xl">🏠</span>
          </div>
          <div class="ml-3">
            <div class="text-gray-600">Home</div>
            <div class="text-sm text-gray-500">kẹo cao su</div>
          </div>
        </div>
        <div class="text-red-500">đ29,300</div>
      </div>

      <div class="px-4 py-3 flex items-center justify-between border-b">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-[#E6FBFA] rounded-full flex items-center justify-center">
            <span class="text-2xl">🏠</span>
          </div>
          <div class="ml-3">
            <div class="text-gray-600">Home</div>
            <div class="text-sm text-gray-500">quần áo</div>
          </div>
        </div>
        <div class="text-red-500">đ770,000</div>
      </div>

      <div class="px-4 py-3 flex items-center justify-between border-b">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-[#E6FBFA] rounded-full flex items-center justify-center">
            <span class="text-2xl">🏠</span>
          </div>
          <div class="ml-3">
            <div class="text-gray-600">Home</div>
            <div class="text-sm text-gray-500">đi grab</div>
          </div>
        </div>
        <div class="text-red-500">đ39,000</div>
      </div>

      <div class="px-4 py-3 flex items-center justify-between border-b">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-[#E6FBFA] rounded-full flex items-center justify-center">
            <span class="text-2xl">🏠</span>
          </div>
          <div class="ml-3">
            <div class="text-gray-600">Home</div>
            <div class="text-sm text-gray-500">nạp thẻ điện thoại</div>
          </div>
        </div>
        <div class="text-red-500">đ20,000</div>
      </div>
    </div>

    <!-- Add padding bottom for floating button -->
    <div class="h-24">
      <FloatingButton/>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
