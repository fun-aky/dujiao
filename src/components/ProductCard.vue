<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
import type { Product } from '../types';

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="bg-white rounded-3xl p-6 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all group relative">
    <!-- Stock Badge -->
    <div class="absolute top-6 right-6 px-2 py-1 bg-gray-50 rounded-lg border border-gray-100">
      <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
        Stock: {{ product.stock }}
      </span>
    </div>

    <!-- Icon -->
    <div class="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 overflow-hidden border border-gray-100">
      <img
        :src="product.icon"
        :alt="product.title"
        class="w-8 h-8 object-contain"
        referrerPolicy="no-referrer"
      />
    </div>

    <!-- Content -->
    <h3 class="text-xl font-bold text-gray-900 mb-2">{{ product.title }}</h3>
    <p class="text-sm text-gray-500 font-medium mb-8 line-clamp-2">
      {{ product.description }}
    </p>

    <!-- Footer -->
    <div class="flex items-center justify-between mt-auto">
      <div>
        <span class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
          Price
        </span>
        <span class="text-2xl font-black text-gray-900">
          ¥{{ product.price.toFixed(2) }}
        </span>
      </div>
      
      <button class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
        <ArrowRight class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>
