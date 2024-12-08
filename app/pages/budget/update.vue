<template>
  <div>
    <!-- Description -->
    <div class="px-4 py-2">
      <p class="text-gray-600">Chỉnh sửa ngân sách cho danh mục Chi phí của</p>
    </div>

    <!-- Toggle Buttons -->
    <div class="flex gap-2 p-4">
      <button class="px-6 py-2 rounded-full bg-teal-500 text-white">Expense</button>
      <button class="px-6 py-2 rounded-full bg-gray-200">Income</button>
    </div>

    <!-- Budget Form -->
    <div class="p-4 space-y-6">
      <!-- Budget Title -->
      <div class="space-y-2">
        <label class="text-gray-600 text-sm">Tiêu đề Ngân sách/Mục tiêu</label>
        <div class="relative">
          <input 
            type="text" 
            v-model="title"
            class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-teal-500"
            placeholder="Cho thú cưng"
          />
          <div class="absolute right-4 top-1/2 -translate-y-1/2">
            <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Budget Amount -->
      <div class="space-y-2">
        <label class="text-gray-600 text-sm">Ngân sách/Số tiền mục tiêu</label>
        <input 
          type="number" 
          v-model="amount"
          class="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-teal-500"
          placeholder="500000.0"
        />
      </div>

      <!-- Budget Category -->
      <div class="space-y-2">
        <label class="text-gray-600 text-sm">Ngân sách/Mục tiêu Thể loại</label>
        <div class="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl">
          <div class="w-12 h-12 bg-[#E6FBFA] rounded-full flex items-center justify-center">
            <span class="text-2xl">🐱</span>
          </div>
          <span class="text-gray-700">Pet</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="space-y-3">
        <button class="w-full p-4 bg-teal-500 text-white rounded-full font-medium">
          Lưu
        </button>
        <button class="w-full p-4 bg-red-500 text-white rounded-full font-medium">
          Xóa Ngân sách
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'settings'
})

const title = ref('Cho thú cưng')
const amount = ref(500000.0)
</script>
