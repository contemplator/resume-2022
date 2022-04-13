<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <main>
    <div class="max-w-6xl mx-auto">
      <section id="personality">
        <div class="flex bg-gray-700 section-content">
          <div class="flex-1 personality-content flex justify-center flex-col p-8">
            <div class="name uppercase text-center text-6xl font-bold mb-8">Leo Lin</div>
            <div class="slogon text-center mb-8 text-xl">Explore and Enjoy</div>
            <div class="description text-left whitespace-normal px-12">
              求學時主修資訊管理及數位內容，對於
              IT、使用者習慣充滿興趣，勇於接受和了解當下流行和剛崛起的事物，偏好任務驅動的方式學習新的事物，訂下預期目標即全力完成。
            </div>
          </div>
          <div class="flex-1 personality-image p-8"></div>
        </div>
      </section>
      <section id="experience">
        <div class="text-4xl mt-12 mb-4 uppercase text-center">Experience</div>
        <div class="text-xl mb-8 text-center">Roles & Responsibilities</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="experience-card">
            <div class="experience-time">2017/11 ~ 2022/02</div>
            <div class="experience-title">台灣徒弟素問科技 - 前端工程師</div>
            <div class="experience-content">
              <p>主要負責網站所有介面及流程操作的功能開發，並參與網站功能設計及使用者訪談。必要時支援資料庫及伺服器的維運及問題排除。</p>
              <p>特殊經歷為參與中國醫療保險的功能設計與開發，必要時出差至當地進行系統開發及了解相關政策。</p>
              <p>
                從這個創業經驗中體驗到小團體的工作流程，了解到公司初期經營的困境，到後續成長到 15
                人團隊，學習到開發時程的評估及工作分配，並且需要經常性的關心團隊成員狀況，了解多人團隊應該更加重視內部溝通。
              </p>
            </div>
          </div>
          <div class="experience-card">
            <div class="experience-time">2017/2 ~ 2017/10</div>
            <div class="experience-title">中國醫藥大學附設醫院資訊部 - 全端工程師</div>
            <div class="experience-content">
              <p>負責開發醫院行政系統以及藥品管理部門系統，獨立完成前後端開發邏輯以及使用者需求訪談。</p>
              <p>為資訊部門制定 angular 前端開發框架的開發流程以及規範，並撰寫工具及文件。</p>
              <p>開發共用元件，供團隊內部 angular 專案開發使用。</p>
            </div>
          </div>
          <div class="experience-card">
            <div class="experience-time">2012/7 ~ 2015/7</div>
            <div class="experience-title">勝義科技股份有限公司 - 研發助理</div>
            <div class="experience-content">
              <p>完成主管交辦事項，如：統計產品使用率及使用者評論，製作週會簡報分析產品成長趨勢。</p>
              <p>獨立開發產品統計資料後台，提供行銷團隊快速分析成效。</p>
              <p>協助開發 Android APP (UBike 站點查詢)</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="text-4xl mt-12 mb-4 uppercase text-center">Let's connect</div>
        <div class="flex bg-gray-700 section-content mt-8">
          <div class="flex-1 flex justify-center flex-col p-8">
            <div class="connect-item text-3xl">
              <Icon icon="eva:email-outline" />
              <div class="connect-item-value"><a href="mailto:contemplation8213@gmail.com" target="_blank">contemplation8213@gmail.com</a></div>
            </div>
            <div class="connect-item text-3xl">
              <Icon icon="eva:github-fill" />
              <div class="connect-item-value"><a href="https://github.com/contemplator" target="_blank">github.com/contemplator</a></div>
            </div>
            <div class="connect-item text-3xl">
              <Icon icon="eva:linkedin-fill" />
              <div class="connect-item-value">
                <a href="https://www.linkedin.com/in/leolin-48240bb0/" target="_blank">linkedin.com/in/leolin-48240bb0</a>
              </div>
            </div>
          </div>
          <div class="flex-1 flex justify-center flex-col p-12">
            <img alt="avatar" src="@/assets/avatar.png" class="circle" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.section-content {
  min-height: 400px;
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
    @apply text-2xl;
  }
  > .connect-item-value {
    @apply ml-4 text-xl;
    :hover {
      color: var(--color-hint);
    }
  }
}
.connect-item {
  @apply flex items-center my-2;
  Icon {
    @apply text-2xl;
  }
  > .connect-item-value {
    @apply ml-4 text-xl;
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
</style>
