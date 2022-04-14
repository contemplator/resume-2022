<script setup lang="ts">
import ContactView from "./ContactView.vue";
import Experience from "./ExperienceView.vue";
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n({
  inheritLocale: true,
});
</script>

<template>
  <main>
    <div class="max-w-6xl mx-auto">
      <section id="personality">
        <div class="md:flex bg-gray-700 section-content">
          <div class="flex-1 personality-content flex justify-center flex-col p-8">
            <div class="name uppercase text-center text-4xl md:text-6xl font-bold mb-8">Leo Lin</div>
            <div class="slogon text-center mb-8 text-xl">Explore and Enjoy</div>
            <div class="description text-left whitespace-normal md:px-12">
              {{ t("selfIntroduction") }}
            </div>
          </div>
          <div class="flex-1 personality-image p-8"></div>
        </div>
      </section>
      <Experience></Experience>
      <ContactView></ContactView>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.section-content,
.personality-image {
  min-height: 300px;
}
.personality-image {
  background-image: url("@/assets/user.jpg");
  background-size: cover;
  background-position: center;
}
.experience-card {
  @apply bg-gray-700 py-12 px-8;
  .experience-time {
    @apply mb-4 text-lg;
  }
  .experience-title {
    @apply mb-4 text-2xl;
  }
  .experience-content {
    @apply leading-7 grid gap-y-2;
  }
}
.connect-item {
  @apply flex items-center my-2;
  Icon {
    @apply text-lg md:text-2xl;
  }
  > .connect-item-value {
    @apply ml-4 text-xl;
    max-width: 100%;
    word-break: break-all;
    :hover {
      color: var(--color-hint);
    }
  }
}
img.circle {
  max-width: 240px;
  border-radius: 50%;
  border: 0;
  margin: 0 auto;
}
@media screen and (min-width: 768px) {
  .section-content,
  .personality-image {
    min-height: 400px;
  }
  .experience-content {
    @apply text-base;
  }
}
</style>
