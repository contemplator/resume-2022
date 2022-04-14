<script setup>
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n({
  inheritLocale: true,
});
</script>
<template>
  <div class="max-w-6xl mx-auto">
    <div class="text-4xl mt-12 mb-4 uppercase text-center">Experience</div>
    <div class="text-xl mb-8 text-center">Roles & Responsibilities</div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="experience-card">
        <div class="experience-time">2017/11 ~ 2022/02</div>
        <div class="experience-title">{{ t('tudiTitle') }}</div>
        <div class="experience-content">
          <p>{{ t('tueiExperience1') }}</p>
          <p>{{ t('tudiExperience2') }}</p>
          <p>{{ t('tudiExperience3') }}</p>
        </div>
      </div>
      <div class="experience-card">
        <div class="experience-time">2017/2 ~ 2017/10</div>
        <div class="experience-title">{{ t('cmuhTitle') }}</div>
        <div class="experience-content">
          <p>{{ t('cmuhExperience1') }}</p>
          <p>{{ t('cmuhExperience2') }}</p>
          <p>{{ t('cmuhExperience3') }}</p>
        </div>
      </div>
      <div class="experience-card">
        <div class="experience-time">2012/7 ~ 2015/7</div>
        <div class="experience-title">{{ t('hyxenTitle') }}</div>
        <div class="experience-content">
          <p>{{ t('hyxenExperience1') }}</p>
          <p>{{ t('hyxenExperience2') }}</p>
          <p>{{ t('hyxenExperience3') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
</style>
