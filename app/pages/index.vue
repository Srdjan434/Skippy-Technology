<template>
  <div>
    <video autoplay muted loop playsinline class="w-full h-auto py-6">
      <source src="/img/videoWelcome.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <!-- Services section -->
    <section class="container mx-auto px-6 py-12">
      <h2 class="text-4xl font-bold mb-10 text-center">Naše usluge</h2>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <article
          class="p-4 rounded-[5px] border border-[#ea212a]"
          style="
            opacity: 0;
            animation: succession 400ms ease-out forwards;
            animation-delay: 200ms;
          "
        >
          <h3 class="text-lg font-bold mb-2">Web servisi</h3>
          <p class="text-sm text-gray-700">
            Kreiramo moderna, brza i profesionalna veb rešenja prilagođena vašim
            poslovnim ciljevima. Bilo da vam je potreban kompletan veb sajt,
            funkcionalna online prodavnica ili efektan landing/one-page sajt.
          </p>
          <div class="mt-4 flex justify-center">
            <a
              href="/services#web"
              aria-label="Read more about Web servisi"
              class="inline-flex items-center text-[#ea212a] hover:text-red-600 transition-transform duration-200 ease-out transform hover:scale-125 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </article>

        <article
          class="p-4 rounded-[5px] border border-[#ea212a]"
          style="
            opacity: 0;
            animation: succession 400ms ease-out forwards;
            animation-delay: 400ms;
          "
        >
          <h3 class="text-lg font-bold mb-2">IT Infrastruktura</h3>
          <p class="text-sm text-gray-700">
            Obezbeđujemo pouzdanu IT infrastrukturu koja omogućava nesmetan rad
            vašeg poslovanja. Nudimo registraciju domena, stabilne hosting
            usluge i profesionalna e-mail rešenja koja garantuju sigurnu i
            efikasnu komunikaciju.
          </p>
          <div class="mt-4 flex justify-center">
            <a
              href="/services#it"
              aria-label="Read more about IT Infrastruktura"
              class="inline-flex items-center text-[#ea212a] hover:text-red-600 transition-transform duration-200 ease-out transform hover:scale-125 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </article>

        <article
          class="p-4 rounded-[5px] border border-[#ea212a]"
          style="
            opacity: 0;
            animation: succession 400ms ease-out forwards;
            animation-delay: 600ms;
          "
        >
          <h3 class="text-lg font-bold mb-2">Kreativni studio</h3>
          <p class="text-sm text-gray-700">
            Kreiramo moderan i prepoznatljiv vizuelni identitet koji jača
            prisustvo vašeg brenda. Od logotipa do kompletne UI/UX izrade veb
            sajtova, fokusirani smo na estetiku, jasnoću i vrhunsko korisničko
            iskustvo.
          </p>
          <div class="mt-4 flex justify-center">
            <a
              href="/services#studio"
              aria-label="Read more about Kreativni studio"
              class="inline-flex items-center text-[#ea212a] hover:text-red-600 transition-transform duration-200 ease-out transform hover:scale-125 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </article>

        <article
          class="p-4 rounded-[5px] border border-[#ea212a]"
          style="
            opacity: 0;
            animation: succession 400ms ease-out forwards;
            animation-delay: 800ms;
          "
        >
          <h3 class="text-lg font-bold mb-2">Personalizacija računara</h3>
          <p class="text-sm text-gray-700">
            Pružamo stručno podešavanje i optimizaciju računara prema vašim
            potrebama. Instaliramo operativne sisteme, konfigurišemo okruženja i
            obezbeđujemo personalizovan radni setup za maksimalnu produktivnost.
          </p>
          <div class="mt-4 flex justify-center">
            <a
              href="/services#pc"
              aria-label="Read more about Personalizacija računara"
              class="inline-flex items-center text-[#ea212a] hover:text-red-600 transition-transform duration-200 ease-out transform hover:scale-125 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </section>

    <!-- Why Skippy section -->
    <section class="mx-auto px-6 py-12 max-w-[980px] why-skippy">
      <h2 class="text-4xl font-bold mb-10 text-center">
        Zašto je Skippy pravi izbor za vaše poslovanje
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-3 justify-items-center"
      >
        <article
          class="w-[300px] h-[300px] rounded-[5px] flex flex-col items-center justify-center text-center p-4 shadow-tech"
          style="box-sizing: border-box"
        >
          <!-- Icon (inline SVG) -->
          <div class="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-[#ea212a]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 2l3 6 6 .5-4.5 4 1 6L12 16l-5.5 3.5 1-6L3 8.5 9 8 12 2z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-bold mb-2">Pouzdanost</h3>
          <p class="text-sm text-gray-700">
            Zadovoljni klijenti i stabilna infrastruktura garantuju pouzdan rad.
          </p>
        </article>

        <article
          class="w-[300px] h-[300px] rounded-[5px] flex flex-col items-center justify-center text-center p-4 shadow-tech"
          style="box-sizing: border-box"
        >
          <div class="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-[#ea212a]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 9v6m0 0l3-3m-3 3l-3-3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-bold mb-2">Stručnost</h3>
          <p class="text-sm text-gray-700">
            Iskusan tim koji razume vaše potrebe i brzo implementira rešenja.
          </p>
        </article>

        <article
          class="w-[300px] h-[300px] rounded-[5px] flex flex-col items-center justify-center text-center p-4 shadow-tech"
          style="box-sizing: border-box"
        >
          <div class="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-[#ea212a]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 2a10 10 0 100 20 10 10 0 000-20zM8 12l2 2 4-4"
              />
            </svg>
          </div>
          <h3 class="text-lg font-bold mb-2">Bezbednost</h3>
          <p class="text-sm text-gray-700">
            Sigurnost podataka i bezbedne prakse su ugrađene u svako rešenje.
          </p>
        </article>

        <article
          class="w-[300px] h-[300px] rounded-[5px] flex flex-col items-center justify-center text-center p-4 shadow-tech"
          style="box-sizing: border-box"
        >
          <div class="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-[#ea212a]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M5 12h14M12 5v14"
              />
            </svg>
          </div>
          <h3 class="text-lg font-bold mb-2">Skalabilnost</h3>
          <p class="text-sm text-gray-700">
            Rešenja koja rastu sa vašim poslovanjem i prilagođavaju se
            potrebama.
          </p>
        </article>

        <article
          class="w-[300px] h-[300px] rounded-[5px] flex flex-col items-center justify-center text-center p-4 shadow-tech"
          style="box-sizing: border-box"
        >
          <div class="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-[#ea212a]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 8h18M3 12h18M3 16h18"
              />
            </svg>
          </div>
          <h3 class="text-lg font-bold mb-2">Podrška</h3>
          <p class="text-sm text-gray-700">
            Brza i dostupna korisnička podrška kada vam zatreba.
          </p>
        </article>
        <article
          class="w-[300px] h-[300px] rounded-[5px] flex flex-col items-center justify-center text-center p-4 shadow-tech"
          style="box-sizing: border-box"
        >
          <!-- Icon (inline SVG) -->
          <div class="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-[#ea212a]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 2l3 6 6 .5-4.5 4 1 6L12 16l-5.5 3.5 1-6L3 8.5 9 8 12 2z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-bold mb-2">Pouzdanost</h3>
          <p class="text-sm text-gray-700">
            Zadovoljni klijenti i stabilna infrastruktura garantuju pouzdan rad.
          </p>
        </article>
      </div>
    </section>
    <!-- Contact form for consult/info -->
    <section
      class="container mx-auto px-6 py-8 bg-cover bg-center bg-no-repeat relative"
      :style="{
        backgroundImage: `url('/img/contactBanner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <div class="absolute inset-0 bg-black/5 pointer-events-none"></div>
      <div
        class="relative z-10 max-w-2xl mx-auto bg-white/95 p-6 rounded-md shadow-sm"
      >
        <h3 class="text-4xl font-bold mb-4 text-center">
          Zakažite konsultacije
        </h3>
        <p class="text-sm text-gray-600 mb-10 text-center">
          Popunite obrazac i naš tim će vas kontaktirati radi besplatnih
          konsultacija i informacija.
        </p>

        <form @submit.prevent="submitForm" novalidate>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium mb-1">Ime</label>
              <input
                v-model="firstName"
                type="text"
                required
                class="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Prezime</label>
              <input
                v-model="lastName"
                type="text"
                required
                class="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Email</label>
              <input
                v-model="email"
                type="email"
                required
                class="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Telefon</label>
              <input
                v-model="phone"
                type="tel"
                class="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div class="mt-3">
            <label class="block text-sm font-medium mb-1">Poruka</label>
            <textarea
              v-model="message"
              rows="4"
              class="w-full border rounded px-3 py-2"
            ></textarea>
          </div>

          <div class="mt-4 flex items-center justify-between">
            <button
              type="submit"
              class="bg-[#ea212a] text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Pošalji
            </button>
            <p v-if="submitted" class="text-sm text-green-600">
              Hvala — prijava je poslana. Kontaktiraćemo vas uskoro.
            </p>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
const submitted = ref(false);

function submitForm() {
  submitted.value = true;
  setTimeout(() => {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
  }, 800);
}
</script>

<style>
@keyframes succession {
  0% {
    opacity: 0;
    transform: translateY(12px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Colored box-shadow for 'Technology' accent from the logo. */
.shadow-tech {
  box-shadow: 0 12px 30px rgba(234, 33, 42, 0.12),
    0 4px 10px rgba(0, 0, 0, 0.04);
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.shadow-tech:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(234, 33, 42, 0.14),
    0 6px 16px rgba(0, 0, 0, 0.06);
}

/* Even cards: dark background and white content */
.why-skippy article:nth-child(even) {
  background: #7f0000;
  border-color: #ffffff;
}
.why-skippy article:nth-child(even) h3,
.why-skippy article:nth-child(even) p,
.why-skippy article:nth-child(even) a {
  color: #ffffff;
}
.why-skippy article:nth-child(even) svg {
  color: #ffffff; /* svg uses stroke=currentColor */
}
</style>
