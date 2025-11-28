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

    <!-- Stations slider -->
    <section class="container mx-auto px-6 py-12">
      <h2 class="text-3xl font-bold mb-8 text-center"></h2>
      <div class="relative w-[500px] mx-auto">
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-500"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="(s, i) in slides"
              :key="i"
              class="w-full flex-shrink-0 px-3"
            >
              <div class="p-6 rounded-lg station-card text-center shadow-tech">
                <div class="text-5xl font-extrabold text-[#ea212a] mb-2">
                  {{ s.number }}
                </div>

                <!-- Dynamic station icon -->
                <div class="flex justify-center mb-3">
                  <!-- Star icon -->
                  <svg
                    v-if="s.icon === 'star'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-[#ea212a]"
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

                  <!-- Shield icon -->
                  <svg
                    v-else-if="s.icon === 'shield'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-[#ea212a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 2v6l6 2v6a8 8 0 01-12 0v-6l6-2V2z"
                    />
                  </svg>

                  <!-- Grid icon -->
                  <svg
                    v-else-if="s.icon === 'grid'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-[#ea212a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"
                    />
                  </svg>

                  <!-- Support / chat icon -->
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-[#ea212a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                    />
                  </svg>
                </div>

                <h3 class="text-xl font-semibold mb-1">{{ s.title }}</h3>
                <p class="text-sm text-gray-600">{{ s.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>

        <button
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow ml-2"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow mr-2"
          aria-label="Next"
        >
          ›
        </button>

        <div class="flex gap-2 justify-center mt-4">
          <button
            v-for="(_, i) in slides"
            :key="i"
            @click="goToSlide(i)"
            :class="[
              'w-3 h-3 rounded-full',
              currentSlide === i ? 'bg-[#ea212a]' : 'bg-gray-300',
            ]"
            aria-label="Go to slide"
          ></button>
        </div>
      </div>
    </section>

    <!-- Contact form for consult/info -->
    <section
      id="contact-form"
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
          Popunite obrazac i naš tim će vas kontaktirati.
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
              <p v-if="errors.firstName" class="text-red-600 text-sm mt-1">
                {{ errors.firstName }}
              </p>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Prezime</label>
              <input
                v-model="lastName"
                type="text"
                required
                class="w-full border rounded px-3 py-2"
              />
              <p v-if="errors.lastName" class="text-red-600 text-sm mt-1">
                {{ errors.lastName }}
              </p>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Email</label>
              <input
                v-model="email"
                type="email"
                required
                class="w-full border rounded px-3 py-2"
              />
              <p v-if="errors.email" class="text-red-600 text-sm mt-1">
                {{ errors.email }}
              </p>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Telefon</label>
              <input
                v-model="phone"
                type="tel"
                class="w-full border rounded px-3 py-2"
              />
              <p v-if="errors.phone" class="text-red-600 text-sm mt-1">
                {{ errors.phone }}
              </p>
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
            <div class="flex flex-col items-end gap-2">
              <p v-if="submitted" class="text-sm text-green-600">
                Hvala — prijava je poslana. Kontaktiraćemo vas uskoro.
              </p>
              <p v-if="formError" class="text-sm text-red-600">
                {{ formError }}
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>

    <!-- Footer Section -->
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
          All Rights Reserved &copy; 2024 Skippy Technology
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
import { ref, reactive, onMounted, onUnmounted } from "vue";

// Contact form state
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
const submitted = ref(false);
const formError = ref("");

// Validation errors
const errors = reactive({ firstName: "", lastName: "", email: "", phone: "" });

function validateForm() {
  // Reset errors
  errors.firstName = "";
  errors.lastName = "";
  errors.email = "";
  errors.phone = "";

  // Name: must start with a capital letter and contain only letters
  // Use Unicode letter classes to support non-ASCII names
  const nameRe = new RegExp("^[\\p{Lu}][\\p{L}]+$", "u");
  if (!firstName.value || !nameRe.test(firstName.value)) {
    errors.firstName = "Ime mora početi velikim slovom i sadržati samo slova.";
  }

  // Last name: same validation as first name (start with capital, only letters)
  if (!lastName.value || !nameRe.test(lastName.value)) {
    errors.lastName =
      "Prezime mora početi velikim slovom i sadržati samo slova.";
  }

  // Email basic format
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value || !emailRe.test(email.value)) {
    errors.email = "Unesite validan email.";
  }

  // Phone: only numbers and optional leading +
  const phoneRe = /^\+?\d+$/;
  if (phone.value && !phoneRe.test(phone.value)) {
    errors.phone =
      "Telefon može sadržati samo cifre i opcionalno + na početku.";
  }

  // Return true if no errors
  return (
    !errors.firstName && !errors.lastName && !errors.email && !errors.phone
  );
}

async function submitForm() {
  if (!validateForm()) return;

  formError.value = "";
  try {
    const payload = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(
        data?.message || data?.statusMessage || "Greška pri slanju obrasca."
      );
    }

    submitted.value = true;
    // clear fields and errors
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
    errors.firstName = errors.lastName = errors.email = errors.phone = "";
  } catch (err) {
    formError.value = (err && err.message) || "Greška pri slanju obrasca.";
  }
}

// Stations slider state
const slides = ref([
  {
    number: "1.",
    title: "ZAKAŽITE SASTANAK",
    subtitle: "Putem naše kontakt forme, možete zakazati konsultacije.",
    icon: "star",
  },
  {
    number: "2.",
    title: "BRZ I EFIKASAN ODGOVOR",
    subtitle: "Nakon obavljenog sastanka, preuzimamo vaše ideje i zahteve.",
    icon: "shield",
  },
  {
    number: "3.",
    title: "REALIZACIJA VAŠIH ZAHTEVA",
    subtitle:
      "Jasan i definisan rok za implementaciju projekta i realizaciju dogovorenog posla.",
    icon: "grid",
  },
  {
    number: "4.",
    title: "ISPORUKA PROIZVODA",
    subtitle:
      "Obaveštavamo vas sve vreme o napretku projekta, kao i o finalnom roku isporuke.",
    icon: "support",
  },
  {
    number: "5.",
    title: "OBOSTRANO ZADOVOLJSTVO",
    subtitle: "Zadovoljan klijent je uspešan klijent.",
    icon: "support",
  },
]);

const currentSlide = ref(0);
let _autoplay = null;

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
}

function prevSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
}

function goToSlide(i) {
  currentSlide.value = i;
}

onMounted(() => {
  _autoplay = setInterval(nextSlide, 8000);
});

onUnmounted(() => {
  if (_autoplay) clearInterval(_autoplay);
});
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
.station-card {
  background: transparent;
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.station-card:hover {
  transform: translateY(-4px);
}

.logo-large {
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22),
    0 6px 18px rgba(234, 33, 42, 0.06);
  border-radius: 8px;
}
</style>
