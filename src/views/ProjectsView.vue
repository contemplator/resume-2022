<template>
  <div class="max-w-6xl mx-auto">
    <div class="text-4xl mt-12 mb-4 uppercase text-center">Projects</div>
    <div class="text-xl mb-8 text-center">Portfolio</div>
    <section id="yun-his">
      <div class="section-title">Yun HIS - 中國診所系統</div>
      <div class="section-container">
        <div class="section-description">
          <div class="subtitle">使用技術</div>
          <ul>
            <li>前端使用 Angular 框架，搭配 Primeng UI 套件開發</li>
            <li>後端使用 Java Spring 架構</li>
            <li>資料庫使用 MariaDB</li>
            <li>使用 C# 開發 Socket 與 Windows 作業系統與第三方開發商溝通工具</li>
          </ul>
          <div class="subtitle">實作要點</div>
          <ul>
            <li>使用 Angular 延遲載入、redis cache 機制、RabbitMQ 交易排隊機制達到優化使用者網站體驗效果</li>
            <li>善用 Angular lint 以及 Bitbucket Pipeline 減少前端開發部署及偵錯的成本</li>
            <li>整合中國各地區醫療保險規則及網路交易共通點，實作出共用元件，將醫保保險開發時程從原先 3 個月縮減至 4 週</li>
          </ul>
          <div class="subtitle">開發困境</div>
          <ul>
            <li>習慣差異：由於不同文化導致系統操作習慣的差異，開發初期為了瞭解當地操作，出差至當地過程中遇到語言及心理排斥等問題。</li>
            <li>地理位置限制：開發醫療保險系統因為網路環境的物理隔離限制，需要透過當地網路商協助才能進行遠端開發及除錯。</li>
          </ul>
        </div>
        <div class="section-image">
          <figure>
            <img alt="login-preview" src="@/assets/yunhis-01.png" />
            <figcaption>系統登入畫面</figcaption>
          </figure>
          <figure>
            <img alt="prescription-preview" src="@/assets/yunhis-02.png" />
            <figcaption>醫師開方畫面</figcaption>
          </figure>
        </div>
      </div>
    </section>
    <section id="sound-manage">
      <div class="section-title">Woolito 動畫工作室素材管理系統</div>
      <div class="section-container">
        <div class="section-description">
          <div class="subtitle">專案背景介紹</div>
          <div>
            此系統是為動畫工作室開發的音效素材管理的網站，原先該工作室都是於 Dropbox
            上進行檔案的存取和查找，但儘管在名稱上盡可能的區分，但相同性質的仍有數十個檔案，所以希望可以透過對內容下標籤、直接播放、查看音軌圖直接快速有效的找到動畫需要的音效。
          </div>
          <div class="subtitle">使用技術</div>
          <ul>
            <li>前端使用 Angular 框架，使用 wavesurfer.js 製作音效預覽圖及播放功能</li>
            <li>後端使用 Nodejs 搭配 Express 框架</li>
            <li>資料庫使用 MySql</li>
            <li>另外搭配 Dropbox API 用來管理音效檔案的檔案儲存功能</li>
          </ul>
          <div class="subtitle">開發困境</div>
          <ul>
            <li>ID 非唯一值：Dropbox API 回傳的資料內容，不同檔案的 ID 有可能重複，後來改使用 Dropbox 檔案儲存的路徑為 Unique 直，並且修改 Database 的邏輯</li>
            <li>
              Dropbox API 交易超時：實作同步功能時，或者查詢 Dropbox
              內儲存的資料時，因為筆數過多導致交易超時，重新審視查詢條件以及在不同位置執行程式，來確保不會超時。
            </li>
          </ul>
        </div>
        <div class="section-image">
          <figure>
            <img alt="sound-list" src="@/assets/sound-manage-02.png" />
            <figcaption>音效列表及檢視、播放音效功能</figcaption>
          </figure>
          <figure>
            <img alt="sound-upload" src="@/assets/sound-manage-01.png" />
            <figcaption>音效上傳功能</figcaption>
          </figure>
        </div>
      </div>
    </section>
    <section id="yun-his">
      <div class="section-title">Woolito 動畫工作室提案內容自動化</div>
      <div class="section-container">
        <div class="section-description">
          <div class="subtitle">專案背景介紹</div>
          <div>
            此功能需求是產生於動畫工作室近期商業提案企劃爆大量，未加入提案的速度，並且讓業主有別出心裁的感受，所以在尋求一種設計內容快速，並且設計玩內容後即產生提案企劃的方式。
          </div>
          <div class="subtitle">使用技術</div>
          <ul>
            <li>前端使用 Angular 框架</li>
            <li>後端使用 Nodejs 搭配 Express 框架</li>
            <li>資料庫使用 MySql</li>
            <li>使用 Trello API 取得 Trello 看板資料，用於開發靜態網頁</li>
          </ul>
          <div class="subtitle">開發困境</div>
          <div>
            <div>為了避免修改程式架構，導致已經提案的企劃被重新排版讓業主感到困惑，所以需要將提案內容用非即時網頁的方式保存。最後提出兩個方案：</div>
            <ul>
              <li>版本控制功能：每次發布，就產生新的一包網頁程式保存在 Server，並且將舊版另設置版本號，將新發布內容預設為業主目前瀏覽的版本。</li>
              <li>輸出為 PDF 靜態內容</li>
            </ul>
          </div>
        </div>
        <div class="section-image">
          <figure>
            <img alt="trello-setting" src="@/assets/proposal-manage-01.png" />
            <figcaption>Trello 設定畫面</figcaption>
          </figure>
          <figure>
            <img alt="proposal-list" src="@/assets/proposal-manage-02.png" />
            <figcaption>提案上傳及歷史版本檢視畫面</figcaption>
          </figure>
        </div>
      </div>
    </section>
    <section id="yun-his">
      <div class="section-title">團購後台系統</div>
      <div class="section-container">
        <div class="section-description">
          <div class="subtitle">專案背景介紹</div>
          <div>
            台灣消費者現大多使用 Line 當作通訊軟體，業主表示各大電商都尚未提供 Line 到貨通知功能，對於團購業主來說相當麻煩，而且電商月費收費相當高，許多功能又不會用到，所以希望有配合的工程師開發通知系統。
          </div>
          <div class="subtitle">使用技術</div>
          <ul>
            <li>前端使用 Angular 框架搭配 Primeng UI 套件開發</li>
            <li>後端及資料庫使用 Firebase</li>
            <li class="font-bold">使用 Line Message API 完成客戶到貨及支付通知</li>
          </ul>
          <div class="subtitle">開發困境</div>
          <div>
            <ul>
              <li>需求不明確：由於現在許多團購都是半路出家，各家團購主做中學，所以進銷存系統及其他子系統的操作流程的初始需求當相當模糊且不符商業管理流程，需花較多時間指導及討論實際功能的結果貌。</li>
              <li>Firebase 資料維護方式的不同：由於非傳統使用的關聯式資料庫，所以語法及查詢邏輯需要多注意，如 array in 限制其條件最多為 10 個。</li>
              <li>Line API：Line Message API 計價方式為訊息量，為控管訊息發出的數量需重新設計訊息發出時機點，將發出訊息從根據訂單而設計的出發點，改為從根據消費者而設計的出發點</li>
            </ul>
          </div>
        </div>
        <div class="section-image">
          <figure>
            <img alt="open-group-preview" src="@/assets/groupbuy-01.png" />
            <figcaption>開團到貨列表介面 (非真實資料)</figcaption>
          </figure>
          <figure>
            <img alt="pickup-preview" src="@/assets/groupbuy-02.png" />
            <figcaption>客戶取貨介面 (非真實資料)</figcaption>
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
  @apply text-4xl mt-12 mb-4 uppercase text-center font-bold;
}
.section-container {
  @apply flex bg-gray-700;
  > .section-description,
  > .section-image {
    @apply flex-1 p-8;
  }
}
.section-description {
  @apply leading-7;
  .subtitle {
    @apply text-2xl font-medium mb-2;
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
    @apply mt-2 text-right;
    color: var(--color-hint);
  }
  figure:not(:first-child) {
    @apply mt-4;
  }
}
</style>
