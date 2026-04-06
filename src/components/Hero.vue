<script setup lang="ts">
import { ArrowRight, ShieldCheck } from 'lucide-vue-next';
</script>

<template>
  <section class="pt-32 pb-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-8">
        <ShieldCheck class="w-3 h-3" />
        Verified Digital Goods
      </div>

      <h2 class="text-7xl md:text-8xl font-black text-gray-900 tracking-tighter mb-8">
        NIKE
      </h2>

      <p class="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
        Your Digital Concierge. Curated virtual accounts and premium services delivered with laboratory precision and boutique elegance.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button class="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 group">
          Start Browsing
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <button class="w-full sm:w-auto px-8 py-4 bg-gray-100 text-gray-900 rounded-2xl font-semibold hover:bg-gray-200 transition-all">
          Support Center
        </button>
      </div>
    </div>
  </section>
</template>
