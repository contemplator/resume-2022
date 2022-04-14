<script setup>
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n({
  inheritLocale: true,
});
</script>
<template>
  <div class="max-w-6xl mx-auto">
    <div class="text-4xl mt-12 mb-4 uppercase text-center">Projects</div>
    <div class="text-xl mb-8 text-center">Portfolio</div>
    <section id="yun-his">
      <div class="section-title">{{ t("yunhisTitle") }}</div>
      <div class="section-container">
        <div class="section-description">
          <div class="subtitle">{{ t("projectSkill") }}</div>
          <ul>
            <li>{{ t("yunhisSkill1") }}</li>
            <li>{{ t("yunhisSkill2") }}</li>
            <li>{{ t("yunhisSkill3") }}</li>
            <li>{{ t("yunhisSkill4") }}</li>
          </ul>
          <div class="subtitle">{{ t("projectHint") }}</div>
          <ul>
            <li>{{ t("yunhisHint1") }}</li>
            <li>{{ t("yunhisHint2") }}</li>
            <li>{{ t("yunhisHint3") }}</li>
          </ul>
          <div class="subtitle">{{ t("projectTrail") }}</div>
          <ul>
            <li>{{ t("yunhisTrail1") }}</li>
            <li>{{ t("yunhisTrail2") }}</li>
          </ul>
        </div>
        <div class="section-image">
          <figure>
            <img alt="login-preview" src="@/assets/yunhis-01.png" />
            <figcaption>{{ t("yunhisImage1") }}</figcaption>
          </figure>
          <figure>
            <img alt="prescription-preview" src="@/assets/yunhis-02.png" />
            <figcaption>{{ t("yunhisImage2") }}</figcaption>
          </figure>
        </div>
      </div>
    </section>
    <section id="sound-manage">
      <div class="section-title">{{ t("soundManageTitle") }}</div>
      <div class="section-container">
        <div class="section-description">
          <div class="subtitle">{{ t("projectBackground") }}</div>
          <div>{{ t("soundManageBackground") }}</div>
          <div class="subtitle">{{ t("projectSkill") }}</div>
          <ul>
            <li>{{ t("soundManageSkill1") }}</li>
            <li>{{ t("soundManageSkill2") }}</li>
            <li>{{ t("soundManageSkill3") }}</li>
            <li>{{ t("soundManageSkill4") }}</li>
          </ul>
          <div class="subtitle">{{ t("projectTrail") }}</div>
          <ul>
            <li>{{ t("soundManageTrail1") }}</li>
            <li>{{ t("soundManageTrail2") }}</li>
          </ul>
        </div>
        <div class="section-image">
          <figure>
            <img alt="sound-list" src="@/assets/sound-manage-02.png" />
            <figcaption>{{ t("soundManageImage1") }}</figcaption>
          </figure>
          <figure>
            <img alt="sound-upload" src="@/assets/sound-manage-01.png" />
            <figcaption>{{ t("soundManageImage2") }}</figcaption>
          </figure>
        </div>
      </div>
    </section>
    <section id="yun-his">
      <div class="section-title">{{ t("proposalManageTitle") }}</div>
      <div class="section-container">
        <div class="section-description">
          <div class="subtitle">{{ t("projectBackground") }}</div>
          <div>{{ t("proposalManageBackground") }}</div>
          <div class="subtitle">{{ t("projectSkill") }}</div>
          <ul>
            <li>{{ t("proposalSkill1") }}</li>
            <li>{{ t("proposalSkill2") }}</li>
            <li>{{ t("proposalSkill3") }}</li>
            <li>{{ t("proposalSkill4") }}</li>
          </ul>
          <div class="subtitle">{{ t("projectTrail") }}</div>
          <div>
            <div>{{ t("proposalManageTrail1") }}</div>
            <ul>
              <li>{{ t("proposalManageTrail2") }}</li>
              <li>{{ t("proposalManageTrail3") }}</li>
            </ul>
          </div>
        </div>
        <div class="section-image">
          <figure>
            <img alt="trello-setting" src="@/assets/proposal-manage-01.png" />
            <figcaption>{{ t("proposalManageImage1") }}</figcaption>
          </figure>
          <figure>
            <img alt="proposal-list" src="@/assets/proposal-manage-02.png" />
            <figcaption>{{ t("proposalManageImage2") }}</figcaption>
          </figure>
        </div>
      </div>
    </section>
    <section id="yun-his">
      <div class="section-title">{{ t("groupbuyTitle") }}</div>
      <div class="section-container">
        <div class="section-description">
          <div class="subtitle">{{ t("projectBackground") }}</div>
          <div>{{ t("grougbuyBackground") }}</div>
          <div class="subtitle">{{ t("projectSkill") }}</div>
          <ul>
            <li>{{ t("groupbuySkill1") }}</li>
            <li>{{ t("groupbuySkill2") }}</li>
            <li class="font-bold">{{ t("groupbuySkill3") }}</li>
          </ul>
          <div class="subtitle">{{ t("projectTrail") }}</div>
          <div>
            <ul>
              <li>{{ t("groupbuyTrail1") }}
              </li>
              <li>{{ t("groupbuyTrail2") }}
              </li>
              <li>{{ t("groupbuyTrail3") }}</li>
            </ul>
          </div>
        </div>
        <div class="section-image">
          <figure>
            <img alt="open-group-preview" src="@/assets/groupbuy-01.png" />
            <figcaption>{{ t("groupbuyImage1") }}</figcaption>
          </figure>
          <figure>
            <img alt="pickup-preview" src="@/assets/groupbuy-02.png" />
            <figcaption>{{ t("groupbuyImage2") }}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
section {
  @apply mt-12 mb-6;
}
.section-title {
  @apply text-2xl md:text-4xl mt-12 mb-4 uppercase text-center font-bold leading-7;
}
.section-container {
  @apply md:flex bg-gray-700;
  > .section-description,
  > .section-image {
    @apply flex-1 p-8;
  }
}
.section-description {
  @apply leading-7;
  .subtitle {
    @apply text-xl md:text-2xl font-medium mb-2;
    &:not(:first-child) {
      @apply mt-4;
    }
  }
  ul {
    @apply pl-4 list-disc;
  }
}
.section-image {
  img {
    @apply shadow-sm shadow-gray-200 border-0;
  }
  figcaption {
    @apply mt-2 md:text-right text-center;
    color: var(--color-hint);
  }
  figure:not(:first-child) {
    @apply mt-4;
  }
}
</style>
