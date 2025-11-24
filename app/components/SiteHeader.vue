<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-200"
    :class="{
      'backdrop-blur-md': progress > 0.08,
      'shadow-md': progress > 0.2,
    }"
    :style="{
      backgroundColor: `rgba(255, 255, 255, ${bgAlpha})`,
    }"
  >
    <nav
      class="container mx-auto flex justify-between items-center py-4 px-10 text-black"
      @click.stop
    >
      <!-- Logo -->
      <div class="text-2xl font-bold">
        <a href="#">
          <!-- Use explicit width/height attributes to avoid layout shift and
               Tailwind classes to control size. object-contain keeps aspect ratio. -->
          <img
            src="/img/SS-Logo2.png"
            alt="SS Logo 2"
            width="160"
            height="96"
            class="w-40 h-24 object-contain"
          />
        </a>
      </div>

      <!-- Desktop -->
      <ul
        class="hidden md:flex items-center space-x-8"
        style="font-weight: 600"
      >
        <!-- Link 1 dropdown (open on first hover or click; stays open until click outside or toggle) -->
        <li class="relative">
          <button
            type="button"
            class="hover:text-[#ea212a] transition"
            @mouseenter="openMenuIfNone('web')"
            @click="toggleMenu('web')"
          >
            Web servisi ▾
          </button>
          <ul
            v-show="openDropdown === 'web'"
            class="absolute left-0 bg-white text-black shadow-md mt-2 rounded-md w-40 py-2"
          >
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                >Izrada web sajtova</a
              >
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                >Razvoj online prodavnica</a
              >
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                >Izrada landing i one-page sajtova</a
              >
            </li>
          </ul>
        </li>
        <!-- Link 2 dropdown -->
        <li class="relative">
          <button
            type="button"
            class="hover:text-[#ea212a] transition"
            @mouseenter="openMenuIfNone('it')"
            @click="toggleMenu('it')"
          >
            IT Infrastruktura ▾
          </button>
          <ul
            v-show="openDropdown === 'it'"
            class="absolute left-0 bg-white text-black shadow-md mt-2 rounded-md w-40 py-2"
          >
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                >Registracija domena i hosting usluge</a
              >
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                >Profesionalne e-mail usluge</a
              >
            </li>
          </ul>
        </li>
        <!-- Link 3 dropdown -->
        <li class="relative">
          <button
            type="button"
            class="hover:text-[#ea212a] transition"
            @mouseenter="openMenuIfNone('studio')"
            @click="toggleMenu('studio')"
          >
            Kreativni studio ▾
          </button>
          <ul
            v-show="openDropdown === 'studio'"
            class="absolute left-0 bg-white text-black shadow-md mt-2 rounded-md w-40 py-2"
          >
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                >Kreiranje vizuelnog identiteta</a
              >
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                >Dizajn web sajtova</a
              >
            </li>
          </ul>
        </li>
        <!-- Link 4 dropdown -->
        <li class="relative">
          <button
            type="button"
            class="hover:text-[#ea212a] transition"
            @mouseenter="openMenuIfNone('pc')"
            @click="toggleMenu('pc')"
          >
            Personalizacija računara ▾
          </button>
          <ul
            v-show="openDropdown === 'pc'"
            class="absolute left-0 bg-white text-black shadow-md mt-2 rounded-md w-40 py-2"
          >
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                >Instalacija operativnog sistema</a
              >
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                >Podešavanje i personalizacija računara</a
              >
            </li>
          </ul>
        </li>
      </ul>

      <!-- Hamburger -->
      <button
        class="md:hidden focus:outline-none"
        @click="isOpen = !isOpen"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div
      v-if="isOpen"
      class="md:hidden border-t transition-all"
      :style="{
        backgroundColor: `rgba(255,255,255, ${Math.max(bgAlpha, 0.95)})`,
      }"
    >
      <ul class="flex flex-col space-y-1 p-4 text-black">
        <li><a href="#" @click="isOpen = false">Link 1</a></li>

        <li>
          <button class="w-full text-left" @click="toggleSub('link2')">
            Link 2 ▾
          </button>
          <ul v-if="openSub === 'link2'" class="pl-4 space-y-1">
            <li><a href="#" @click="isOpen = false">Sub Link 2.1</a></li>
            <li><a href="#" @click="isOpen = false">Sub Link 2.2</a></li>
            <li><a href="#" @click="isOpen = false">Sub Link 2.3</a></li>
          </ul>
        </li>

        <li>
          <button class="w-full text-left" @click="toggleSub('link3')">
            Link 3 ▾
          </button>
          <ul v-if="openSub === 'link3'" class="pl-4 space-y-1">
            <li><a href="#" @click="isOpen = false">Sub Link 3.1</a></li>
            <li><a href="#" @click="isOpen = false">Sub Link 3.2</a></li>
          </ul>
        </li>

        <li><a href="#" @click="isOpen = false">Link 4</a></li>
        <li><a href="#" @click="isOpen = false">Link 5</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isOpen = ref(false);
const openSub = ref(null);
// Desktop dropdown state: null or 'web' | 'it' | 'studio' | 'pc'
const openDropdown = ref(null);
const progress = ref(0); // 0 → 1
const bgAlpha = ref(0); // 0 → 0.9
let onDocClick; // will hold outside-click handler so we can remove it on unmount

function toggleSub(menu) {
  openSub.value = openSub.value === menu ? null : menu;
}

function toggleMenu(menu) {
  openDropdown.value = openDropdown.value === menu ? null : menu;
}

function openMenuIfNone(menu) {
  if (!openDropdown.value) openDropdown.value = menu;
}

function onScroll() {
  const max = 120; // px do pune pozadine
  const p = Math.min(window.scrollY / max, 1);
  progress.value = p;
  bgAlpha.value = +(0.9 * p).toFixed(3); // do 0.9 opaciteta
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  // close dropdown on outside click
  onDocClick = () => (openDropdown.value = null);
  window.addEventListener("click", onDocClick);
  onScroll(); // inicijalno stanje
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  if (onDocClick) window.removeEventListener("click", onDocClick);
});
</script>
