<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import CategoryFilter from './components/CategoryFilter.vue';
import ProductCard from './components/ProductCard.vue';
import Footer from './components/Footer.vue';
import MobileBottomNav from './components/MobileBottomNav.vue';
import ProductDetailModal from './components/ProductDetailModal.vue';
import OrderQuery from './components/OrderQuery.vue';
import { PRODUCTS } from './types';
import type { Product } from './types';
import { ChevronUp } from 'lucide-vue-next';

const activeCategory = ref('All Products');
const showScrollTop = ref(false);
const activeTab = ref('home');
const selectedProduct = ref<Product | null>(null);

const filteredProducts = computed(() => {
  return PRODUCTS.filter(
    (p) => activeCategory.value === 'All Products' || p.category === activeCategory.value
  );
});

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 400;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleTabChange = (tab: string) => {
  activeTab.value = tab;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <div class="min-h-screen bg-[#f9f9fb] font-sans selection:bg-blue-100 selection:text-blue-900 pb-20 lg:pb-0">
    <Header />
    
    <main class="max-w-7xl mx-auto">
      <Transition name="fade-slide" mode="out-in">
        <div v-if="activeTab === 'home'" key="home">
          <Hero />
          
          <div class="pb-24">
            <CategoryFilter 
              :activeCategory="activeCategory" 
              @categoryChange="(cat) => activeCategory = cat" 
            />
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              <TransitionGroup name="list">
                <div 
                  v-for="product in filteredProducts" 
                  :key="product.id" 
                  @click="selectedProduct = product" 
                  class="cursor-pointer"
                >
                  <ProductCard :product="product" />
                </div>
              </TransitionGroup>
            </div>
          </div>
        </div>

        <div v-else-if="activeTab === 'orders'" key="orders" class="pt-24 min-h-[60vh]">
          <OrderQuery />
        </div>

        <div v-else-if="activeTab === 'search'" key="search" class="pt-32 px-4 text-center">
          <h2 class="text-4xl font-black text-gray-900 mb-8">Global Search</h2>
          <div class="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for products, categories, or features..."
              class="w-full bg-white border-2 border-gray-100 rounded-3xl py-6 px-8 text-lg font-medium shadow-xl shadow-gray-200/50 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
            />
          </div>
        </div>

        <div v-else-if="activeTab === 'profile'" key="profile" class="pt-32 px-4 max-w-2xl mx-auto text-center">
          <div class="w-32 h-32 rounded-full bg-gray-100 mx-auto mb-8 border-4 border-white shadow-xl overflow-hidden">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="User"
              class="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 class="text-3xl font-black text-gray-900 mb-4">Welcome Back</h2>
          <p class="text-gray-500 font-medium mb-12">Sign in to manage your orders and preferences.</p>
          <div class="grid grid-cols-1 gap-4">
            <button class="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Sign In with Google
            </button>
            <button class="w-full py-4 bg-gray-100 text-gray-900 rounded-2xl font-bold hover:bg-gray-200 transition-all">
              Sign In with Email
            </button>
          </div>
        </div>
      </Transition>
    </main>

    <Footer />

    <MobileBottomNav :activeTab="activeTab" @tabChange="handleTabChange" />

    <ProductDetailModal 
      :product="selectedProduct" 
      @close="selectedProduct = null" 
    />

    <!-- Scroll to Top Button -->
    <Transition name="fade">
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-24 lg:bottom-8 right-8 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:bg-black transition-colors"
      >
        <ChevronUp class="w-6 h-6" />
      </button>
    </Transition>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.3s ease; }
.fade-slide-enter-from { opacity: 0; transform: translateX(-20px); }
.fade-slide-leave-to { opacity: 0; transform: translateX(20px); }

.list-move, .list-enter-active, .list-leave-active { transition: all 0.5s ease; }
.list-enter-from, .list-leave-to { opacity: 0; transform: scale(0.9); }
.list-leave-active { position: absolute; }
</style>
