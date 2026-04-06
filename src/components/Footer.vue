<script setup lang="ts">
import { CreditCard, LifeBuoy, FileText } from 'lucide-vue-next';
</script>

<template>
  <footer class="bg-white border-t border-gray-100 pt-16 pb-8 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div class="text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start gap-2 mb-2">
            <h2 class="text-lg font-bold text-gray-900">發卡小店</h2>
            <span class="text-gray-400 font-medium">Digital Concierge</span>
          </div>
          <p class="text-sm text-gray-400">© 2024 發卡小店. Curated Excellence.</p>
        </div>

        <div class="flex items-center gap-6">
          <div class="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
            <CreditCard class="w-5 h-5 text-gray-400" />
          </div>
          <div class="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
            <LifeBuoy class="w-5 h-5 text-gray-400" />
          </div>
          <div class="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
            <FileText class="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div class="flex items-center gap-8">
          <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Payments</a>
          <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Support</a>
          <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>
