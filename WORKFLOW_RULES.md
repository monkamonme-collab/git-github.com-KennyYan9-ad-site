# WORKFLOW_RULES

開發流程規範。每一個任務都必須依序執行，嚴禁跳步。

---

## 標準流程（7 步）

### Step 1: 分析問題

**目標：了解現狀與目標的差距**

- 讀取相關檔案（不要猜測，要事實）
- 列出 currently 與 expected 的差異
- 確認是否有現有 skill 可以參考
- 用 bullet point 列出問題點，不要抽象形容

**產出：**
```
[分析]
- currently: ...
- expected: ...
- gap: ...
```

---

### Step 2: 提出方案

**目標：產出具體可執行的規格**

- 針對每個 gap 提出解法
- 明確列出要修改的檔案
- 明確列出受影響的 routes
- 列出會用到的新／修改的 components
- SEO / EEAT / AdSense 安全問題要在此階段確認

**產出：**
```
[方案]
- 修改檔案: ...
- 受影響 routes: ...
- 新的 components: ...
- 需確認的風險: ...
```

---

### Step 3: 修改 code

**目標：按照方案實作**

- 先確認分工（用 MODEL_RULES 選對 model）
- 大改：用 deepseek-v3.1
- 重構：用 qwen3-next-80b
- 小修：用 qwen2.5-coder-7b
- PM/架構類：用 qwen3-235b

**產出：**
```
[執行]
- 修改檔案: (list)
- 新增檔案: (list)
```

---

### Step 4: 修改後盤點

**目標：讓使用者確認影響範圍**

在完成修改後，必須列出：

- 修改了哪些 UI（視覺變化）
- 修改了哪些 components
- 哪些變化使用者最容易看到
- 哪些 section 已經重構
- 是否已經真正 import 到 production route

---

### Step 5: Git commit

**目標：留下可追蹤的版本記錄**

```bash
git add .
git commit -m "feat(scope): description

- 具体改了什么
- 解决了什么问题"
```

- scope 格式：homepage / calculator / seo / component / layout
- 不要 commit 不相關的變更
- commit message 要能讓未來的你看懂

---

### Step 6: Git push

**目標：觸發 CI/CD 部署**

```bash
git push origin main
```

- 如果是 non-main branch：
```bash
git push origin feature/xxx
```

---

### Step 7: Verify deploy

**目標：確認上線成功**

1. 確認 Vercel build 是否通過
2. 確認頁面是否正常 render
3. 確認 console 無錯誤
4. 確認 AdSense slot 是否正常運作

**產出：**
```
[驗證]
- Build: PASS/FAIL
- URL: https://...
- Console errors: 有/無
- AdSense: 正常/異常
```

---

## 任務分流規則

| 任務類型 | 使用模型 |
|---|---|
| SEO 策略、內容規劃、架構設計 | qwen3-235b |
| 從零實作 component、頁面、Coding | deepseek-v3.1 |
| 重構、cleanup、consistency | qwen3-next-80b |
| 小 fix、patch、hotfix | qwen2.5-coder-7b |

---

## 例外情況

- 如果任務跨多種类型，先確認主要目標，再選對應 model
- 如果不確定用哪個，選更保守的（小 fix > 大重構）
- 如果涉及商業決策（網站方向、營收策略），一律用 qwen3-235b 先討論