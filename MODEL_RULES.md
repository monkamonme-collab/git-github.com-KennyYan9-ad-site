# MODEL_RULES

模型使用分工規則。嚴格遵守用途分工，避免跨用途濫用模型。

---

## qwen3-235b-a22b

**用途：PM / 策略 / 架構**
- SEO 關鍵字策略與內容規劃
- 使用者流程與資訊架構 (IA) 設計
- Phase planning（階段性重構藍圖）
- EEAT 信號規劃（who we are, expertise, trustworthiness）
- UX 方向與原則定義
- 商業目標轉換成技術需求
- 對外溝通規格（給 developer 的明確指令）

**嚴禁：**
- 直接寫 UI component code
- 寫 Tailwind class
- 做重複性高的 CRUD 實作

---

## deepseek-v3.1

**用途：Coding / Component Generation**
- Astro component 實作
- Tailwind CSS 樣式開發
- 重複性高的 UI 模板（card grid、form、table）
- API route 實作
- utility function 實作
- 根據 PM 規格生成完整可用的 code

**嚴禁：**
- 定義網站方向
- 寫 SEO strategy
- 設計架構層級的東西

---

## qwen3-next-80b-a3b-thinking

**用途：Refactor / Cleanup / Consistency**
- 現有程式碼重構
- 移除重複程式碼（DRY）
- 統一命名規範與程式碼風格
- 技術債清理
- 效能優化
- 確保元件一致性（spacing、color、typography）

**嚴禁：**
- 從零開始新專案
- 定義商業邏輯
- 撰寫內容文案

---

## qwen2.5-coder-7b

**用途：Small Fixes / Utility Snippets**
- Bug fix（小範圍修改）
- 單一檔案内的 patch
- 小工具脚本
- Config 調整
- 文案微調
- hotfix

**嚴禁：**
- 大範圍重構
- 新功能開發
- 跨多檔案架構變更

---

## 協作流程

```
PM model (qwen3-235b) → 產出 SPEC/規劃
    ↓
Coding model (deepseek-v3.1) → 實作 component
    ↓
Refactor model (qwen3-next) → clean up + consistency
    ↓
Fix model (qwen2.5-coder) → 微調 + patch
```

每個階段產出都要能被下一階段使用，SPEC 就是要能被 coding 的規格，不是抽象概念。