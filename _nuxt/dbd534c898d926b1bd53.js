(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{350:function(n,t,e){"use strict";var o={data:function(){return{}},computed:{url:function(){return window.location.origin+"/"+this.$route.fullPath}}},r=e(16),component=Object(r.a)(o,(function(){var n=this.$createElement;return(this._self._c||n)("vue-disqus",{staticClass:"w-100 mt5",attrs:{shortname:"tw-rental-house-data",identifier:this.$route.fullPath,url:this.url}})}),[],!1,null,null,null);t.a=component.exports},352:function(n,t,e){"use strict";var o=e(16),component=Object(o.a)({},(function(){var n=this.$createElement;return(this._self._c||n)("vue-markdown",{staticClass:"brief",attrs:{breaks:!1,anchorAttributes:{target:"_blank",rel:"noopener"}}},[this._v("「開放民間租屋資料」希望提供對租屋議題有興趣的單位，一份長期、開放，而且詳細的租屋資料集，\n去除有著作權與隱私疑慮的資料後，以 \n[CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.zh_TW) \n釋出，為台灣的租賃市場與居住議題建立研究的基礎資料。\n\n本資料集的來源目前為[591 租屋網](https://rent.591.com.tw/)，\n後續也會持續擴充資料來源至各大租屋網與其他代管業者的公開資訊，\n預計每月、每季、每年都會發佈一份該期間內曾經出現過的所有出租物件，\n除了資料標準化外，不做額外的資料處理與刪減，希望盡量保持資料的原始狀態。\n\n本資料集是以現狀提供，並在相關法律容許的最大範圍內，主張免除提供者所有的擔保責任，\n包括但不限於合用性、正確性、權利瑕疵等，使用者並須為其後個案的使用情境自負其責，不得歸咎於提供者。")])}),[],!1,null,null,null);t.a=component.exports},366:function(n,t,e){var content=e(391);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(18).default)("16f0d96e",content,!0,{sourceMap:!1})},390:function(n,t,e){"use strict";var o=e(366);e.n(o).a},391:function(n,t,e){(t=e(17)(!1)).push([n.i,".about__toc[data-v-d79c310c]{display:none}.about[data-v-d79c310c] table{width:calc(100% + 3rem);position:relative;margin:0 -1.5rem;border-collapse:collapse;border-spacing:0;border:1px solid rgba(0,0,0,.2)}.about[data-v-d79c310c] thead tr{background:#eee;font-size:.875em}.about[data-v-d79c310c] tbody tr:nth-child(2n){background:#eee}.about[data-v-d79c310c] td,.about[data-v-d79c310c] th{padding:.25rem .5rem}.about[data-v-d79c310c] code{position:relative;border:1px solid rgba(0,0,0,.15);border-radius:3px;background:rgba(0,0,0,.1);font-size:.875em;padding:.1rem .25rem;margin:-.1rem 0}@media screen and (min-width:80rem){.about__toc[data-v-d79c310c]{display:block;width:15em;padding:.5em;left:2em;background:hsla(0,0%,100%,.8)}.about__toc h2[data-v-d79c310c]{font-size:1.2em}.about__toc[data-v-d79c310c] ul{line-height:1.5;padding-left:1rem}.about__toc[data-v-d79c310c] ul a{text-decoration:none}.about__toc[data-v-d79c310c] ul.table-of-contents>li{margin-bottom:.5rem}.about__toc.fixed[data-v-d79c310c]{top:1.34rem}}",""]),n.exports=t},445:function(n,t,e){"use strict";e.r(t);var o=e(352),r=e(350),c={components:{AboutDataBrief:o.a,Disqus:r.a},head:function(){return{title:"關於資料集"}},data:function(){return{isHeaderVisible:!0}},methods:{visibilityChanged:function(n){this.isHeaderVisible=n}}},d=(e(390),e(16)),component=Object(d.a)(c,(function(){var n=this.$createElement,t=this._self._c||n;return t("main",{staticClass:"about w-100 mw7 center pa4 lh-copy"},[t("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:this.visibilityChanged,expression:"visibilityChanged"}],staticClass:"dummy"}),t("div",{staticClass:"about__toc db-l dn f6",class:{fixed:!this.isHeaderVisible,absolute:this.isHeaderVisible}},[t("h2",[this._v("目次")]),t("div",{attrs:{id:"data-set-toc"}})]),t("article",[t("h1",[this._v("關於資料集")]),t("AboutDataBrief"),t("vue-markdown",{attrs:{breaks:!1,html:!0,toc:!0,tocId:"data-set-toc"}},[this._v("## 版本資訊\n1. 版本： 0.2\n2. 發行日期： 2018/08/31\n3. 預計失效日期： 最新版本沒有失效日期～\n4. 資料集更動：\n   1. 新增「約略地點」、「約略地點範圍」\n\n## 資料內容與整理方式\n除了單純擷取各網站，累積長時間的租屋資料外，本資料集也希望能夠滿足三項資料分析的需求：\n\n1. 方便分析跨資料來源的物件\n2. 能夠追蹤時間變化的基礎資料\n3. 易於散佈，無隱私與著作權疑慮\n\n為了方便分析跨資料來源的物件，從各網站收集的資料，經統整後，會被放入共同的表格中儲存，所有資料都使用相同的欄位儲存。\n雖然這會讓網站獨有的資訊消失，也無法解決網站資訊過少，導致欄位空白的問題，但至少分析時，可以一次統整所有來源的資料進行分析。\n關於各網站原始資料與共同欄位的對照表，請參見[各資料來源原始資料與資料集欄位對照表](#各資料來源原始資料與資料集欄位對照表)。\n\n在追蹤時間變化方面，目前資料集將以每月、每季、每年的頻率定期發佈，每筆資料並附上資料編號，方便追蹤與交叉比對。\n如果想要時間刻度更小的資料，或是關於相關格式有任何建議，歡迎來信或在 [Github](https://github.com/g0v/tw-rental-house-data) 討論。\n\n最後，為了減少後續使用與散佈資料的成本，本資料集僅包含無隱私與著作權疑慮的資料，例如房屋個事實資訊，包含樓層、租金、坪數、身份限制等，\n刪除地址、說明、照片內容等資訊，並以 CC0 釋出，希望任何對租屋有興趣的人，都可以拿這份資料分析研究，促進居住議題的公共討論與決策。\n\n## 住宅與重複物件過濾條件\n\n為了後續分析方便，本資料集亦提供較保守的物件過濾條件，提供對住宅研究有興趣的人使用。在這裡，保守的意思是只刪除非常極端，或是非常確定有問題的物件，\n以免誤刪應該被拿來分析的資料，所以有可能還是會在資料集裡看到一些不合理的值（第二型錯誤）。目前所有過濾條件皆為列舉，並未使用任何統計與機器學習的技術，\n如果對過濾方式有任何想法或興趣，歡迎直接至 [hackpack](https://g0v.hackpad.tw/Ih7Jp4pUD5y#:h=%E7%B0%A1%E5%96%AE%E7%9A%84%E7%95%B0%E5%B8%B8%E5%80%BC%E6%A2%9D%E4%BB%B6) 討論，\n為開源專案貢獻力氣。目前的過濾條件說明如下（程式部份[請見此](https://github.com/g0v/tw-rental-house-data/blob/af583ef91aab6927698d381b3bc0b36965cdfad2/backend/rental/libs/filters.py)）：\n\n### 住宅的過濾條件：\n\n1. 建物為公寓、透天、電梯大樓\n2. 物件類型為整層住家、獨立套房、分租套房、雅房\n3. 建物樓高 <= 90\n4. 所在樓層 <= 90\n5. 所在樓層 <= 建物樓高 + 2 （因為有可能有頂加）\n6. 坪數 < 500\n6. 每坪租金 <= 15000\n\n### 重複物件的過濾條件：\n\n如果以下所有欄位的值都相同，視為同一物件，詳細欄位列表，請見[共同資料欄位](#共同資料欄位)\n\n1. 共同資料欄位（ 6 項）\n2. 物件硬體資訊（所有項目）\n3. 價位資訊（所有項目）\n4. 環境、設備與限制（所有項目）\n\n## 共同資料欄位\n\n目前所有的共同欄位，共通的欄位數值如下：\n\n1. 若無特別說明，所有欄位名稱以「？」結尾的，皆為二選一的欄位\n   - CSV 檔案中，`F` 為否/無， `T` 為是/有\n   - JSON 檔案中，則以 `false/true` 表示\n   - [0.0 版](/about-data-set/0.0)中標為 `0/1` 的版本仍會提供下載至支援期限為止\n2. 若物件缺少某一項欄位的資料\n   - CSV 檔案中，會標示為 `-`\n   - JSON 檔案中，則以 null 表示\n\n### 交易與物件基本資訊\n\n| 欄位名稱        | 說明  | 用於重複物件過濾 |\n| ------------- | ----- | ---- |\n| 物件編號 | 物件於原始網站的編號，但取決於刊登者，不保證物件是否重複，或是同一編號在不同時間點，是否代表同一物件 |  |\n| 租屋平台 | - | ● |\n| 物件網址 | 發現物件時，該物件的網址，但後續有可能顧期，或是遭關閉而無法瀏覽 |  |\n| 物件首次發現時間 | 本資料集首次發現物件的時間，實做因物件網站而異，但通常不會比刊登時間晚超過一天 |  |\n| 物件最後更新時間 | 本資料集最後一次更新此物件資訊的時間 |  |\n| 縣市 | 為[編碼過](#編碼表)的縣市 | ● |\n| 鄉鎮市區 | 為[編碼過](#編碼表)的鄉鎮市區 | ● |\n| 約略地點_x 約略地點_y | 為該物件的約略座標，不一定是物件所在地，依各刊登平台設定而定，與 GPS 一樣使用 [WGS84 座標系統](https://zh.wikipedia.org/zh-tw/%E4%B8%96%E7%95%8C%E5%A4%A7%E5%9C%B0%E6%B5%8B%E9%87%8F%E7%B3%BB%E7%BB%9F) |  |\n| 約略地點範圍 | 同「約略地點」，但使用在「消除重複住宅」中，內容為包含所有重複物件的[二維邊界盒（bounding box）](https://en.wikipedia.org/wiki/Minimum_bounding_box) |  |\n| 房屋出租狀態 | 為[編碼過](#編碼表)的出租狀態，包含待出租、已消失（頁面遭關閉，不確定是否出租）、已出租 |  |\n| 出租大約時間 | 本資料集發現物件已出租的時間，實做因物件網站而異，但通常不會比刊登時間晚超過一天 |  |\n| 出租所費天數 | 「出租大約時間」與「物件首次發現時間」的差距，無條件進位 |  |\n| 刊登者類型 | 為[編碼過](#編碼表)的刊登者類型，包含屋主、代理人、房仲 | ● |\n| **刊登者編碼** (0.1 版新增) | 每名刊登者的獨特編碼，可能來自於任何刊登者可辨識的資訊，因為每則物件透漏的刊登者資訊可能不同，原則上不同刊登者的編碼一定不同，但反之不一定成立 |  |\n| 仲介資訊 | 於物件網頁上顯示的租屋公司資訊 | ● |\n| 有產權登記？ | 物件網頁上所顯示的資訊，但與現實落差與否，依各網站查核狀況而異 | ● |\n\n### 物件硬體資訊\n\n| 欄位名稱        | 說明  | 用於重複物件過濾 |\n| ------------- | ----- | ---- |\n| 建築類型 | 為[編碼過](#編碼表)的建物類型，包含公寓、電梯大樓、透天等，詳見編碼表 | ● |\n| 物件類型 | 為[編碼過](#編碼表)的物件類型，包含整層住宅、分租套房、雅房等，詳見編碼表 | ● |\n| 所在樓層 | 網頁上標示之樓層，若為 0 ，則有可能為整棟出租，若超過建物樓高，則為自報頂加，若為地下室，則為負數 | ● |\n| 建物樓高 | 網頁上標示之樓高，有些標示會比實際樓高多出一樓，以隱藏頂加物件 | ● |\n| 距頂樓層數 | 根據「建物樓高」與「所在樓層」相減之數字，若為 -1 ，表示物件自己標示為頂加 | ● |\n| 坪數 | - | ● |\n| 陽台數 | 目前只有整層住家提供此欄位 | ● |\n| 衛浴數 | 目前只有整層住家提供此欄位 | ● |\n| 房數 | 目前只有整層住家提供此欄位 | ● |\n| 客廳數 | 目前只有整層住家提供此欄位 | ● |\n| 格局編碼  | 綜合上述四項，依照陽台/衛浴/房/廳的順序編碼，例如二陽台一衛浴四房三廳會被標為 `_02010403` | ● |\n| 自報頂加？ | 物件是否自己標示為頂加 | ● |\n| 提供車位？ | - | ● |\n\n### 價位資訊\n\n| 欄位名稱        | 說明  | 用於重複物件過濾 |\n| ------------- | ----- | ---- |\n| 月租金 | - | ● |\n| 押金類型 | 為[編碼過](#編碼表)的物件類型，包含以月為單位、定額、面議，或是其他 | ● |\n| 押金月數 | 若押金為定額，則會除以月租金後，換算為押金月數 | ● |\n| 押金金額 | 若押金以月為單位，則會乘上租金後，換算為押金金額 | ● |\n| 需要管理費？ | - | ● |\n| 月管理費 | - | ● |\n| 需要停車費？ | - | ● |\n| 月停車費 | - | ● |\n| 每坪租金 | 月租金、月管理費、月停車費的總和，除上物件坪數 | ● |\n| 額外費用_電費？ | 若頁面無特別註明租金包含此費用，則計為「是」 | ● |\n| 額外費用_水費？ | 若頁面無特別註明租金包含此費用，則計為「是」 | ● |\n| 額外費用_瓦斯？ | 若頁面無特別註明租金包含此費用，則計為「是」 | ● |\n| 額外費用_網路？ | 若頁面無特別註明租金包含此費用，則計為「是」 | ● |\n| 額外費用_第四台？ | 若頁面無特別註明租金包含此費用，則計為「是」 | ● |\n\n### 環境、設備與限制\n\n| 欄位名稱        | 說明  | 用於重複物件過濾 |\n| ------------- | ----- | ---- |\n| 附近有_學校？ | - |  ● |\n| 附近有_公園？ | - |  ● |\n| 附近有_百貨公司？ | - |  ● |\n| 附近有_超商？ | - |  ● |\n| 附近有_傳統市場？ | - |  ● |\n| 附近有_夜市？ | - |  ● |\n| 附近有_醫療機構？ | - |  ● |\n| 附近的捷運站數 | - |  ● |\n| 附近的公車站數 | - |  ● |\n| 附近的火車站數 | - |  ● |\n| 附近的高鐵站數 | - |  ● |\n| 附近的公共自行車數 | - |  ● |\n| 有身份限制？ | 物件是否限制特定身份的人才可入住，導致其他類的人不可入住。 |  ● |\n| 有性別限制？ | - |  ● |\n| 性別限制 | - |  ● |\n| 可炊？ | - |  ● |\n| 可寵？ | - |  ● |\n| 提供家具_床？ | - |  ● |\n| 提供家具_桌子？ | - |  ● |\n| 提供家具_椅子？ | - |  ● |\n| 提供家具_電視？ | - |  ● |\n| 提供家具_熱水器？ | - |  ● |\n| 提供家具_冷氣？ | - |  ● |\n| 提供家具_沙發？ | - |  ● |\n| 提供家具_洗衣機？ | - |  ● |\n| 提供家具_衣櫃？ | - |  ● |\n| 提供家具_冰箱？ | - |  ● |\n| 提供家具_網路？ | - |  ● |\n| 提供家具_第四台？ | - |  ● |\n| 提供家具_天然瓦斯？ | - |  ● |\n\n## 資料集的限制\n\n由於法律、技術與各種條件上的限制，本資料集並未散佈原始物件網頁的完整紀錄。\n另外，本資料集目前絕大部分欄位都直接抓取自網站資料，沒有太多跨欄位或資料探勘的處理。\n如果你發現有助於資料分析，但需要額外處理的資料，例如搜尋整理標題或說明欄位裡的資訊等，歡迎來信討論。\n\n目前資料集的詳細限制如下：\n\n### 網頁上存在，但不會匯出的資料\n\n為避免著作權與隱私疑慮，本資料集會刪除所有相關欄位。若有需要者，請在法律允許的範圍內，自行抓取。\n\n1. 標題\n2. 地址\n3. 物件說明\n\n### 目前缺少，但計畫加入的資料\n\n1. 約略經緯度\n2. 同一物件在不同時間點，各欄位的變化狀況\n\n### 可能無法抓到的資料\n\n1. 如果物件在短時間內太過頻繁更新，則本資料集只會收錄其最後的狀態\n\n## 已知的問題\n\n1. 本資料集以 utf8 編碼釋出，使用微軟 Excel 需另外匯入或轉檔才可開啟（話說 Excel 打得開 10+ 萬行的表格嘛..）。詳細步驟請參考[行政院農委會資料開放平台](http://data.coa.gov.tw/FAQ/View.aspx?id=17)\n2. 目前發現有些 591 的物件在已出租後，依然還是可以被搜尋到，所以雖然出租狀態可以確定是否出租，但出租天數有可能是錯的 XD \n\n## 編碼表\n\n為減少檔案大小與後續分析難度，本資料集使用編碼來表示許多欄位，包含：\n\n1. 縣市\n2. 鄉鎮市區\n3. 交易狀態\n4. 建物類型\n5. 物件類型\n6. 刊登者資訊\n7. 押金類型\n8. 性別限制\n\n詳細的編碼對照表，請參見此[試算表](https://docs.google.com/spreadsheets/d/1W-7WrbBhqHwYU9iNbJ_kMc6UGDtLUXt0eltk4vVYmu0/edit?usp=sharing)\n\n## 各資料來源原始資料與資料集欄位對照表\n\n### 591 租屋網\n\n591 租屋網目前提供所有資料集所需資料，以下僅列出兩者之間的差異：\n\n| 資料集欄位        | 591 租屋網的收集方式、差異  |\n| ------------- | ----- |\n| 需要管理費？ | 除了「是否需要管理費」的欄位外， 591 頁面還可填「租金是否包含管理費」，因此會綜合這兩項資料來決定此欄位數值。若兩項資料都沒有，則不填 |\n| 建物類型    | 591 的別墅，被併入「透天」建物中，「住宅大樓」改作「電梯大樓」 |\n| 附近的公共自行車數（實驗中） | 目前會[搜尋說明欄裡提到 XXX bike （不分大小寫）的數量](https://github.com/g0v/tw-rental-house-data/blob/master/backend/crawler/spiders/detail591_spider.py#L478)，因此若要使用，建議僅以 `0` 與 `大於 0` 作為指標 |\n| 刊登者編碼  | 如果第一次發現該物件時，該物件已經消失、成交，而且說明裡沒有透漏手機（？！），就找不到囉～另外，編碼相同幾乎保證是同一名刊登者，但反之就不一定了。 |\n| 仲介資訊    | 使用網頁上的公司名，若無則找經濟業，都沒有就列印全部資訊 |\n| 性別要求    | 若填「男女生皆可」或沒填，都算「皆可」 |\n| 身份要求    | 591 可供刊登者填的身份要求為「上班族、學生、家庭」，在此脈落下為排除單身、無固定職業者的意思，所以只要有填，不管填幾個，都算有身份要求 |\n| 可炊       | 開伙必須是「可以」 |\n| 可寵       | 養寵物必須是「可以」 |\n| 產權登記    | 產權登記必須是「已辦」 |")])],1),t("Disqus")],1)}),[],!1,null,"d79c310c",null);t.default=component.exports}}]);