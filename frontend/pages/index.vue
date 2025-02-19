<template>
  <main>
    <!-- Hero -->
    <section
      class="h-lvh flex flex-col-reverse sm:flex-row items-start sm:items-center justify-center sm:justify-between gap-8 sm:gap-4 lg:gap-12 container mx-auto px-12">
      <div class="max-w-xl flex gap-8 flex-col">
        <h1 class="font-normal">
          <span class="font-bold italic">Senior front-end developer</span> met een passie voor
          <span class="text-shadow hover:text-shadow-xl transition-all duration-100">design</span>.
        </h1>
        <p>
          Ik bouw met liefde solide en gebruiksvriendelijke webapplicaties met behulp van mijn
          ervaring in design, TypeScript en Nuxt.
        </p>
        <div class="flex gap-6">
          <Button icon="ph:file-pdf">Download CV</Button>
          <Button to="https://wa.me/31615652039" icon="ph:whatsapp-logo" variant="link"
            >Contact opnemen</Button
          >
        </div>
      </div>
      <div
        class="translate-y-0 sm:-translate-y-[45%] md:-translate-y-[42%] lg:translate-y-0 shrink-0 overflow-hidden rounded-full border-5 sm:border-5 md:border-10 lg:border-15 xl:border-20 border-dark bg-primary-200 design-shadow">
        <NuxtImg
          src="/portret/andy.png"
          class="drop-shadow-2xl scale-150 lg:scale-120 select-none"
          sizes="80px sm:160px md:210px lg:320px xl:480px" />
      </div>
    </section>
    <!-- Information -->
    <section class="h-lvh flex items-center justify-center bg-dark">
      <div class="container mx-auto px-12">
        <!-- TODO: add info here -->
        <h1 class="text-white">Section 2</h1>
      </div>
    </section>
  </main>
</template>
