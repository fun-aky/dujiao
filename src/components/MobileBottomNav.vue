<script setup lang="ts">
import { Home, Search, ShoppingBag, User } from 'lucide-vue-next';

defineProps<{
  activeTab: string;
}>();

defineEmits<{
  (e: 'tabChange', tab: string): void;
}>();

const tabs = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'search', icon: Search, label: 'Search' },
  { id: 'orders', icon: ShoppingBag, label: 'Orders' },
  { id: 'profile', icon: User, label: 'Profile' },
];
</script>

<template>
  <div class="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-100 px-6 py-3 z-50">
    <div class="flex items-center justify-between">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="$emit('tabChange', tab.id)"
        :class="`flex flex-col items-center gap-1 transition-colors ${
          activeTab === tab.id ? 'text-blue-600' : 'text-gray-400'
        }`"
      >
        <component :is="tab.icon" class="w-6 h-6" />
        <span class="text-[10px] font-medium uppercase tracking-wider">{{ tab.label }}</span>
      </button>
    </div>
  </div>
</template>
