<script setup lang="ts">
// import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main>
    <div class="max-w-6xl mx-auto">
      <section id="personality">
        <div class="flex bg-gray-700 section-content">
          <div class="flex-1 personality-content flex justify-center flex-col p-8">
            <div class="name uppercase text-center text-6xl font-bold mb-8">Leo Lin</div>
            <div class="slogon text-center mb-8 text-xl">Explore and Enjoy</div>
            <div class="description text-center whitespace-normal">
              I’m thrilled you’re here. Please take a moment to explore my site, where you’ll find details on my background, experience, skills and more. To
              learn more or connect on an opportunity, don’t hesitate to reach out.
            </div>
          </div>
          <div class="flex-1 personality-image p-8"></div>
        </div>
      </section>
      <section id="personal-profile" class="mt-12">
        <div class="flex bg-gray-700 section-content">
          <div class="flex-1 personality-image p-8"></div>
          <div class="flex-1 personality-content flex justify-center flex-col p-8">
            <div class="name uppercase text-center text-6xl font-bold mb-8">About</div>
            <div class="slogon text-center mb-8 text-xl">Personal Profile</div>
            <div class="description text-center whitespace-normal">
              Throughout my life, I’ve approached every challenge with enthusiasm, creativity, and ceaseless desire to achieve success. This passion and drive have paved the way to countless opportunities, unique experiences and exceptional relationships both personally and professionally. If you’re interested in learning more about me, keep reading or get in touch.
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
.section-content {
  min-height: 400px;
}
.personality-image {
  background-image: url("@/assets/user.jpg");
  background-size: cover;
  background-position: center;
}
</style>
