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
        <div class="experience-time">2022/05 ~ </div>
        <div class="experience-title">TECHDesign - 程式設計師</div>
        <div class="experience-content">
          <p>公司開發團隊分工嚴謹，主要負責網站功能設計與開發，除了電商網站所需的功能開發外，要對其舊有的架構進行優化：</p>
          <ol class="list-decimal ml-4">
            <li>與 DepOps 配合改善專案 CI/CD 效能，透過 Central Build 設計，減少 66% 的部署時間。</li>
            <li>將 Angularjs 更新為 Angular 框架開發，相同功能的需求調整開發時間成本降低 60%。</li>
            <li>優化 Angular SSR 模式及效能，完善前後端驗證機制，減少不必要的 API 請求，降低前後端 Error Rate 50%。</li>
            <li>導入 並建立 SSR Cache 機制，改善 User 瀏覽體驗，將 TTFB 從 560ms 改善為 320ms。</li>
          </ol>
        </div>
      </div>
      <div class="experience-card" style="page-break-after: always;">
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
