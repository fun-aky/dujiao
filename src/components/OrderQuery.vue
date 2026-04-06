<script setup lang="ts">
import { Search, ShoppingBag, Mail, ArrowRight, Clock, CheckCircle2, ShieldCheck } from 'lucide-vue-next';
import { ref } from 'vue';

const query = ref('');
const isSearching = ref(false);
const hasResult = ref(false);

const handleSearch = () => {
  if (!query.value) return;
  isSearching.value = true;
  // Simulate search
  setTimeout(() => {
    isSearching.value = false;
    hasResult.value = true;
  }, 1500);
};
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-6">
        <ShoppingBag class="w-3 h-3" />
        Order Retrieval
      </div>
      <h2 class="text-5xl font-black text-gray-900 tracking-tighter mb-6">Find Your Goods</h2>
      <p class="text-lg text-gray-500 font-medium leading-relaxed max-w-xl mx-auto">
        Enter your email or order number to retrieve your digital products and account details.
      </p>
    </div>

    <div class="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-gray-100 shadow-xl shadow-gray-200/50 mb-12">
      <form @submit.prevent="handleSearch" class="relative mb-8">
        <div class="relative">
          <input
            type="text"
            v-model="query"
            placeholder="Email address or Order ID"
            class="w-full bg-gray-50 border-2 border-gray-100 rounded-3xl py-6 pl-14 pr-32 text-lg font-medium focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
          />
          <Mail class="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          <button
            type="submit"
            :disabled="isSearching"
            class="absolute right-3 top-1/2 -translate-y-1/2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <div v-if="isSearching" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <template v-else>
              Search
              <ArrowRight class="w-4 h-4" />
            </template>
          </button>
        </div>
      </form>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
            <Clock class="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-gray-900 mb-1">Instant Delivery</h4>
            <p class="text-xs text-gray-500 font-medium leading-relaxed">Most orders are delivered within seconds of payment.</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 class="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-gray-900 mb-1">Lifetime Support</h4>
            <p class="text-xs text-gray-500 font-medium leading-relaxed">Our team is here to help if you encounter any issues.</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
            <ShieldCheck class="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-gray-900 mb-1">Secure Retrieval</h4>
            <p class="text-xs text-gray-500 font-medium leading-relaxed">Your data is encrypted and only accessible via your email.</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="hasResult" class="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg text-center">
      <div class="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-6">
        <Search class="w-8 h-8 text-gray-400" />
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-2">No orders found</h3>
      <p class="text-gray-500 font-medium mb-6">We couldn't find any orders matching that email or ID.</p>
      <button
        @click="hasResult = false"
        class="px-6 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
      >
        Try another search
      </button>
    </div>
  </div>
</template>
