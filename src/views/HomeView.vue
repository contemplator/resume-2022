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
      <!-- <section id="personal-profile" class="mt-12">
        <div class="flex bg-gray-700 section-content">
          <div class="flex-1 personality-image p-8"></div>
          <div class="flex-1 personality-content flex justify-center flex-col p-8">
            <div class="name uppercase text-center text-6xl font-bold mb-8">About</div>
            <div class="slogon text-center mb-8 text-xl">Personal Profile</div>
            <div class="description text-center whitespace-normal">
              Throughout my life, I’ve approached every challenge with enthusiasm, creativity, and ceaseless desire to achieve success. This passion and drive
              have paved the way to countless opportunities, unique experiences and exceptional relationships both personally and professionally. If you’re
              interested in learning more about me, keep reading or get in touch.
            </div>
          </div>
        </div>
      </section> -->
      <section id="experience">
        <div class="text-4xl mt-12 mb-4 uppercase text-center">Experience</div>
        <div class="text-xl mb-12 text-center">Work History</div>
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
      <section id="experience">
        <div class="text-4xl mt-12 mb-4 uppercase text-center">Projects</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="experience-card">
            <div class="experience-time">2021-12-01 ~ 2021-12-31</div>
            <div class="experience-title">ASSOCIATE, VENALEE</div>
            <div class="experience-content">
              This is a concise description of your previous work experience and the responsibilities you had. The most effective CVs give a clear snapshot of
              where you’re coming from and where you’re going in a way that’s easy for readers to scan and absorb quickly.
            </div>
          </div>
          <div class="experience-card">
            <div class="experience-time">2021-12-01 ~ 2021-12-31</div>
            <div class="experience-title">ASSOCIATE, VENALEE</div>
            <div class="experience-content">
              This is a concise description of your previous work experience and the responsibilities you had. The most effective CVs give a clear snapshot of
              where you’re coming from and where you’re going in a way that’s easy for readers to scan and absorb quickly.
            </div>
          </div>
          <div class="experience-card">
            <div class="experience-time">2021-12-01 ~ 2021-12-31</div>
            <div class="experience-title">ASSOCIATE, VENALEE</div>
            <div class="experience-content">
              This is a concise description of your previous work experience and the responsibilities you had. The most effective CVs give a clear snapshot of
              where you’re coming from and where you’re going in a way that’s easy for readers to scan and absorb quickly.
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
    // > p {
    //   @apply
    // }
  }
}
</style>
