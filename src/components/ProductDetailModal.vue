<script setup lang="ts">
import { X, ShoppingCart, ShieldCheck, Zap, ArrowRight } from 'lucide-vue-next';
import type { Product } from '../types';

defineProps<{
  product: Product | null;
}>();

defineEmits<{
  (e: 'close'): void;
}>();
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="product" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <div class="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" @click="$emit('close')"></div>
        
        <Transition name="scale">
          <div class="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden">
            <button
              @click="$emit('close')"
              class="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors z-10"
            >
              <X class="w-5 h-5" />
            </button>

            <div class="flex flex-col md:flex-row h-full">
              <!-- Left: Image/Icon -->
              <div class="md:w-1/2 bg-gray-50 p-12 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                <div class="w-32 h-32 rounded-3xl bg-white shadow-xl flex items-center justify-center mb-8 border border-gray-100">
                  <img
                    :src="product.icon"
                    :alt="product.title"
                    class="w-20 h-20 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div class="space-y-4 w-full">
                  <div class="flex items-center gap-3 text-sm text-gray-500 font-medium">
                    <ShieldCheck class="w-4 h-4 text-blue-600" />
                    Verified Account
                  </div>
                  <div class="flex items-center gap-3 text-sm text-gray-500 font-medium">
                    <Zap class="w-4 h-4 text-amber-500" />
                    Instant Delivery
                  </div>
                </div>
              </div>

              <!-- Right: Info -->
              <div class="md:w-1/2 p-8 sm:p-10 flex flex-col">
                <div class="mb-8">
                  <span class="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-4">
                    {{ product.category }}
                  </span>
                  <h2 class="text-3xl font-black text-gray-900 mb-4">{{ product.title }}</h2>
                  <p class="text-gray-500 leading-relaxed font-medium">
                    {{ product.longDescription || product.description }}
                  </p>
                </div>

                <div v-if="product.features" class="mb-8">
                  <h4 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Features</h4>
                  <ul class="grid grid-cols-1 gap-3">
                    <li v-for="(feature, i) in product.features" :key="i" class="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <div class="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {{ feature }}
                    </li>
                  </ul>
                </div>

                <div class="mt-auto pt-8 border-t border-gray-100">
                  <div class="flex items-center justify-between mb-6">
                    <div>
                      <span class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Price</span>
                      <span class="text-3xl font-black text-gray-900">¥{{ product.price.toFixed(2) }}</span>
                    </div>
                    <div class="text-right">
                      <span class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Stock</span>
                      <span class="text-sm font-bold text-gray-900">{{ product.stock }} units</span>
                    </div>
                  </div>

                  <div class="flex gap-3">
                    <button class="flex-1 px-6 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                      Buy Now
                      <ArrowRight class="w-4 h-4" />
                    </button>
                    <button class="p-4 bg-gray-100 text-gray-900 rounded-2xl hover:bg-gray-200 transition-all">
                      <ShoppingCart class="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.scale-enter-active, .scale-leave-active { transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
.scale-enter-from, .scale-leave-to { opacity: 0; transform: scale(0.9) translateY(20px); }
</style>
