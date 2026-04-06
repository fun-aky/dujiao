<script setup lang="ts">
import { Search, ShoppingCart } from 'lucide-vue-next';
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center gap-8">
          <h1 class="text-xl font-bold text-gray-900 tracking-tight">發卡小店</h1>
          
          <!-- Navigation -->
          <nav class="hidden md:flex items-center gap-6">
            <a href="#" class="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-1">All</a>
            <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Popular</a>
            <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">New</a>
          </nav>
        </div>

        <!-- Search and Icons -->
        <div class="flex items-center gap-4 flex-1 max-w-md justify-end">
          <div class="relative w-full hidden sm:block">
            <input
              type="text"
              placeholder="Search accounts..."
              class="w-full bg-gray-100 border-none rounded-full py-2 pl-4 pr-10 text-sm focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <Search class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          
          <button class="p-2 text-gray-500 hover:text-gray-900 transition-colors relative">
            <ShoppingCart class="w-5 h-5" />
            <span class="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full"></span>
          </button>
          
          <button class="p-1 rounded-full border border-gray-200 hover:border-gray-300 transition-colors">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="User"
              class="w-7 h-7 rounded-full"
              referrerPolicy="no-referrer"
            />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
