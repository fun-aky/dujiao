<script setup lang="ts">
import { CATEGORIES } from '../types';

defineProps<{
  activeCategory: string;
}>();

defineEmits<{
  (e: 'categoryChange', category: string): void;
}>();
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-3 mb-12 px-4">
    <button
      v-for="category in CATEGORIES"
      :key="category"
      @click="$emit('categoryChange', category)"
      :class="`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
        activeCategory === category
          ? 'bg-gray-900 text-white shadow-md'
          : 'bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-100'
      }`"
    >
      {{ category }}
    </button>
  </div>
</template>
