<template>
  <div class="w-full h-auto">
    <img src="/img/13.png" alt="webBanner" class="w-full object-cover" />
  </div>

  <div class="container mx-auto flex justify-center mt-6">
    <div class="flex flex-wrap gap-4 justify-center">
      <button
        :class="buttonClass('installOS')"
        @click="select('installOS')"
        id="btn-installOS"
      >
        Instalacija Operativnog Sistema
      </button>
      <button
        :class="buttonClass('personalization')"
        @click="select('personalization')"
        id="btn-personalization"
      >
        Personalizacija računara
      </button>
    </div>
  </div>

  <section id="services-section" class="container mx-auto mt-10">
    <div class="flex flex-col items-center">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
        <div
          v-for="(card, idx) in currentCards"
          :key="idx"
          class="w-full max-w-sm mx-auto bg-white rounded shadow overflow-hidden text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:scale-105 cursor-pointer"
        >
          <img
            :src="card.img"
            :alt="card.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2">{{ card.title }}</h2>
            <div
              class="text-sm text-gray-700 list-disc list-inside mt-5 mb-5 space-y-5"
            >
              <p v-for="(it, i) in card.items" :key="i">{{ it }}</p>
            </div>
            <div
              class="mx-auto mt-6 inline-block bg-red-600 text-white px-4 py-2 rounded-md"
            >
              <h1 class="text-2xl font-bold">{{ card.price }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer Section -->
  <div class="mt-20">
    <footer class="bg-black text-white py-12">
      <div class="container mx-auto px-6">
        <!-- 4 Columns: Logo + 3 Quick Link Groups -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 mb-0 justify-items-center"
        >
          <!-- Column 1: Logo and description -->
          <div>
            <img
              src="/img/beliLogo2.png"
              alt="Skippy Logo"
              width="160"
              height="96"
              class="w-40 h-24 object-contain mb-2"
            />
            <h2 class="text-lg font-bold mb-4">
              DIGITALNA REŠENJA ZA MODERAN BIZNIS
            </h2>
          </div>

          <!-- Column 2: Brzi linkovi 1 -->
          <div>
            <h4 class="text-lg font-bold mb-4">BRZI LINKOVI</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" class="hover:text-[#ea212a] transition"
                  >Web servisi</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-[#ea212a] transition"
                  >IT Infrastruktura</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-[#ea212a] transition"
                  >Kreativni studio</a
                >
              </li>
              <li>
                <a href="#contact-form" class="hover:text-[#ea212a] transition"
                  >Kontakt</a
                >
              </li>
            </ul>
          </div>

          <!-- Column 3: Brzi linkovi 2 -->
          <div>
            <h4 class="text-lg font-bold mb-4">USLUGE</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" class="hover:text-[#ea212a] transition"
                  >Izrada web sajtova</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-[#ea212a] transition"
                  >Online prodavnice</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-[#ea212a] transition"
                  >Hosting i domen</a
                >
              </li>
              <li>
                <a href="#" class="hover:text-[#ea212a] transition"
                  >Vizuelni identitet</a
                >
              </li>
            </ul>
          </div>

          <!-- Column 4: Kontakt info -->
          <div>
            <h4 class="text-lg font-bold mb-4">KONTAKT</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="mailto:info@skippy.rs"
                  class="hover:text-[#ea212a] transition"
                  >info@skippy.rs</a
                >
              </li>
              <li>
                <a
                  href="tel:+381641234567"
                  class="hover:text-[#ea212a] transition"
                  >+381 64 123 4567</a
                >
              </li>
              <li>Beograd, Srbija</li>
              <li class="mt-2">
                <a
                  href="#contact-form"
                  class="hover:text-[#ea212a] transition font-bold"
                  >Zakažite konsultaciju</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <!-- Copyright Bar -->
    <div class="w-full bg-gray-800 border-t border-gray-700">
      <div
        class="container mx-auto px-6 py-4 flex items-center justify-between"
      >
        <p class="text-sm text-gray-300">
          All Rights Reserved &copy; 2026 Skippy Technology
        </p>
        <!-- Social Icons -->
        <div class="flex gap-4">
          <!-- Facebook -->
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            class="text-white hover:text-[#ea212a] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </a>
          <!-- LinkedIn -->
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            class="text-white hover:text-[#ea212a] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
              />
            </svg>
          </a>
          <!-- Instagram -->
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="text-white hover:text-[#ea212a] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm4.25 12c0 2.347-1.904 4.25-4.25 4.25S7.75 16.347 7.75 14s1.904-4.25 4.25-4.25 4.25 1.904 4.25 4.25zm3.25-6.5c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const selected = ref("installOS");

function select(tab) {
  selected.value = tab;
}

function buttonClass(tab) {
  const base = "px-6 py-2 rounded border transition focus:outline-none";
  const defaultStyles = "bg-white text-black border border-gray-300";
  const activeStyles = "bg-red-600 text-white border-0";
  return [base, selected.value === tab ? activeStyles : defaultStyles].join(
    " "
  );
}

const contentMap = {
  installOS: [
    {
      img: "/img/13.png",
      title: "BASIC",
      items: [
        "Tekst OS 1",
        "Tekst OS 2",
        "Tekst OS 3",
        "Tekst OS 4",
        "Tekst OS 5",
      ],
      price: "30€",
    },
    {
      img: "/img/13.png",
      title: "STANDARD",
      items: [
        "Tekst OS 1",
        "Tekst OS 2",
        "Tekst OS 3",
        "Tekst OS 4",
        "Tekst OS 5",
      ],
      price: "30€",
    },
    {
      img: "/img/13.png",
      title: "PRO",
      items: [
        "Tekst OS 1",
        "Tekst OS 2",
        "Tekst OS 3",
        "Tekst OS 4",
        "Tekst OS 5",
      ],
      price: "30€",
    },
  ],
  personalization: [
    {
      img: "/img/13.png",
      title: "BASIC",
      items: [
        "Tekst personalization 1",
        "Tekst personalization 2",
        "Tekst personalization 3",
        "Tekst personalization 4",
        "Tekst personalization 5",
      ],
      price: "200€",
    },
    {
      img: "/img/13.png",
      title: "STANDARD",
      items: [
        "Tekst personalization 1",
        "Tekst personalization 2",
        "Tekst personalization 3",
        "Tekst personalization 4",
        "Tekst personalization 5",
      ],
      price: "200€",
    },
    {
      img: "/img/13.png",
      title: "PRO",
      items: [
        "Tekst personalization 1",
        "Tekst personalization 2",
        "Tekst personalization 3",
        "Tekst personalization 4",
        "Tekst personalization 5",
      ],
      price: "200€",
    },
  ],
};

const currentCards = computed(() => contentMap[selected.value] || []);
</script>
