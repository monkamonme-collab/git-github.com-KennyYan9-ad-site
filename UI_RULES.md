# UI_RULES

Pet Calculator Website 視覺設計與 UI 規範手冊。

---

## 設計原則

### 必須遵守

1. **Clean** — 留白充足，資訊層次分明，無視覺噪音
2. **Modern SaaS** — 專業感、商業感、像一個認真營運的網站
3. **Trustworthy** — 信任信號外顯（數據、引用、機構名稱）
4. **Minimal** — 只保留必要元素，每個元素都有存在的理由
5. **Mobile First** — 從手機視角設計，桌面只是等比例放大

---

## 字體與排版

### 字體策略

- 主標題：32–40px，font-weight: 700–800，tracking-tight
- 副標題：20–24px，font-weight: 600
- 內文：15–16px，font-weight: 400，line-height: 1.6–1.7
- 說明文字：13–14px，font-weight: 400，text-slate-500

### 行規範

- Desktop max-width：1200px（不超過）
- 內容區 max-width：720px（article / prose 用途）
- Padding 基礎單位：4px（py-4, px-6 等）
- Card padding：24–32px（p-6 到 p-8）

---

## 色彩系統

### 主色

```
--color-primary: #0f172a    (slate-900, 標題、重要文字)
--color-accent: #3b82f6    (blue-500, 連結、interactive 元素)
--color-accent-dark: #1d4ed8 (blue-700, hover state)
--color-surface: #ffffff    (白色卡片背景)
--color-bg: #f8fafc        (slate-50, 頁面背景)
```

### 用途定義

| 用途 | 色彩 |
|---|---|
| Hero 標題 | text-slate-900 |
| 內文 | text-slate-700 |
| 輔助說明 | text-slate-500 |
| 連結 / CTA | text-blue-600 / hover:text-blue-700 |
| 邊框 | border-slate-200 或 border-slate-100 |
| 卡片陰影 | shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] |

---

## 元件規範

### Hero Section

**禁止：**
- Giant empty hero（大圖填空那種）
- 過度修飾的 gradients
- 沒有資訊量的 banner 圖

**允許：**
- 清晰標題 + 一句話說明網站用途
- 最好能在 3 秒內讓使用者知道這網站做什麼
- 可以有結構化數據（如「已有 10,000 次計算」）但要有真實性
- 可以有 trust badge（引用機構名稱）

**範例結構：**
```
[標題] 狗狗年齡計算機
[副標題] 採用美國獸醫師協會 (AVMA) 標準，精準換算愛犬的人類年齡
[Trust 信號] AVMA 標準 | 獸醫師推薦
[CTA] 立即計算 →
```

### Calculator Card

**禁止：**
- 只有 icon + title 的空洞卡片
- 看起來像 template 填充內容

**允許：**
- Icon + 標題 + 具體描述（用數字或機構名稱增加信任）
- Hover 時有 shadow 變化（shadow-lg）
- 點擊區域覆蓋整張卡（block link）

**範例：**
```
[Icon: 🐶]
狗狗年齡計算機
採用 AVMA 獸醫標準，科學換算年齡
[AVMA Logo 小標]
```

### Trust Section

**禁止：**
- 空泛的「可信賴」標語
- 假的計數器

**允許：**
- 真實數據引用（AVMA、AHA 等機構）
- 具體數字（「每月服務 5,000+ 寵物主人」）
- 專家引用（附上獸醫師姓名與機構）
- 媒體露出（如果有的話）

**範例結構：**
```
[引用block]
"狗狗年齡的計算方式並非線性，本工具採用的計算方式是根據大型研究數據..."
— 美國獸醫師協會 (AVMA)

[數據block]
服務範例 | 計算次數 | 準確度
```

### FAQ Section

**禁止：**
- 通用 FAQ（適用所有網站那種）
- AI 生成的平淡回答

**允許：**
- 針對特定 calculator 的常見問題
- 引用數據或研究回答
- 結構：問題（加粗）+ 具體回答

**範例：**
```
為什麼小型犬和大型犬的計算方式不同？
大型犬的成長速度比小型犬快，且壽命普遍較短...
（引用研究數據）

「7 歲狗」等於人類幾歲？
根據 AVMA 標準...
```

### Footer

**禁止：**
- 只有版權宣告

**允許：**
- 實用連結（工具、部落格、關於）
- 信任元素（隱私政策、使用條款、免責聲明）
- AdSense slot（如果頁面還有位置）
- 社群連結（可選）

**範例結構：**
```
[Logo + 一句話描述]
[工具連結] [部落格連結] [關於我們]
[隱私權政策] [使用條款] [免責聲明]
[© 2024 ...]
```

---

## 禁止使用的 pattern

| 禁止 | 原因 |
|---|---|
| Giant empty hero section | 看起來像 startup template |
| Flashy gradients / 過度動畫 | 不專業，降低信任感 |
| AI generated wording（「探索無限可能」） | thin content，降低 EEAT |
| Generic CTA（「立即開始免費試用」） | 不像商業網站 |
| Unsplash random 圖片當 hero | 沒有針對性，不傳達專業感 |
| 「我們的使命是…」類型的 startup 宣言 | thin content + startup feel |
| 空白的 Trust section（只有 icon） | 假的，不誠信 |

---

## AdSense 安全規範

1. **每個 AdSense slot 都要有意義的周圍內容** — 不能是空白區
2. **廣告周圍要有實質內容** — 不要讓 ad slot 看起來像填充物
3. **Ad slot 需要足夠的 viewport space** — 不要讓廣告被切到
4. **禁止誤導點擊** — 不能像按鈕的廣告單元
5. **回應式廣告格式** — 優先使用 auto ads 或 responsive ad unit

---

## Mobile First 原則

- 從 375px 寬度開始設計
- 所有 spacing / typography 以 mobile 為準，desktop 等比例放大
- 點擊範圍最小 44x44px（iOS HIG）
- 測量順序：iPhone → iPad → Desktop

---

## 測量清單

每次 UI 變更後，檢查：

- [ ] Mobile（375px）看起來正常
- [ ] Desktop（1200px）看起來正常
- [ ] 沒有 Unsplash random 圖充當 hero
- [ ] 沒有 startup feel
- [ ] Trust 信號有具體數據或引用
- [ ] FAQ 有針對性內容
- [ ] AdSense slot 周圍有實質內容
- [ ] 3 秒內能知道網站用途