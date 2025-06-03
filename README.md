# Highland - Digital Vision

🌐 **TRON風のデジタル空間の雰囲気を持つヴィンテージTシャツとデジタル体験のポートフォリオサイト**

![Highland Preview](https://img.shields.io/badge/Status-Active-00ffff?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech-HTML%20|%20CSS%20|%20JavaScript-ff0080?style=for-the-badge)

## ✨ 特徴

- **🎭 TRON風デザイン**: サイバーパンクなデジタル空間の雰囲気
- **🎨 ネオンエフェクト**: グラデーション、グロー効果、アニメーション
- **📱 レスポンシブ**: すべてのデバイスで最適化された表示
- **⚡ インタラクティブ**: マトリックス風パーティクル、3Dキューブアニメーション
- **🌟 モダンUI/UX**: スムーズなスクロール、フェードイン効果
- **👕 ヴィンテージコレクション**: 厳選されたヴィンテージTシャツの紹介

## 🚀 技術スタック

- **HTML5**: セマンティックマークアップ
- **CSS3**: カスタムプロパティ、グリッドレイアウト、フレックスボックス
- **Vanilla JavaScript**: ES6+、IntersectionObserver API、Canvas API
- **Webフォント**: Google Fonts (Orbitron, Rajdhani)

## 📂 プロジェクト構成

```
highland/
│
├── index.html          # メインHTMLファイル
├── styles.css          # TRON風スタイリング
├── script.js           # インタラクティブ機能
├── README.md           # プロジェクト説明書
├── ロゴ/               # ロゴファイル
│   ├── Highland_Vision_logo_compressed.png
│   └── 50bf7ed5-e3d4-4b11-bdab-3b85623c07c7.png
└── .git/               # Gitリポジトリ
```

## 🎨 デザインコンセプト

### カラーパレット
- **プライマリー**: `#00ffff` (サイアン)
- **セカンダリー**: `#0080ff` (ブルー)
- **アクセント**: `#8000ff` (パープル)、`#ff0080` (ネオンピンク)
- **背景**: `#0a0a0a` (ダークブラック)

### タイポグラフィー
- **ヘッダー**: Orbitron (サイバーパンク風)
- **ボディ**: Rajdhani (未来的でクリーン)

## 🛠️ ローカル開発

### 前提条件
- モダンなWebブラウザ（Chrome、Firefox、Safari、Edge）
- ローカルサーバー（推奨）

### セットアップ

1. **リポジトリをクローン**
```bash
git clone https://github.com/your-username/highland.git
cd highland
```

2. **ローカルサーバーで起動**
```bash
# Python 3の場合
python -m http.server 8000

# Python 2の場合
python -m SimpleHTTPServer 8000

# Node.jsの場合
npx http-server

# VS Code Live Server拡張機能を使用
# 右クリック → "Open with Live Server"
```

3. **ブラウザでアクセス**
```
http://localhost:8000
```

## 🌐 GitHub Pagesでの公開

### 自動デプロイ（推奨）

1. **GitHubにプッシュ**
```bash
git add .
git commit -m "初回コミット: Highland Digital Vision サイト"
git push origin main
```

2. **GitHub Pagesを有効化**
   - GitHub リポジトリページへ移動
   - `Settings` → `Pages`
   - Source: `Deploy from a branch`
   - Branch: `main` / `root`
   - `Save`をクリック

3. **サイトURL取得**
   - 数分後に `https://your-username.github.io/highland` でアクセス可能

### 手動デプロイ

```bash
# gh-pagesブランチを作成してデプロイ
git checkout -b gh-pages
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

## 📋 セクション構成

### 🏠 Hero Section
- グリッチエフェクト付きタイトル
- 3D浮遊キューブアニメーション
- CTAボタン

### 💭 About Section
- デジタルビジョンの説明
- 統計データ表示
- インタラクティブカード

### 👕 Vintage Collection
- ヴィンテージTシャツカテゴリー
- ホバーエフェクト
- 価格表示

### 🚀 Projects Section
- 進行中プロジェクト
- 将来の計画
- ステータスバッジ

### 📧 Contact Section
- インタラクティブフォーム
- 連絡先情報
- アニメーション付き送信確認

## 🎯 主要機能

### マトリックス効果
```javascript
// パーティクルアニメーション
class MatrixEffect {
    // HIGHLAND文字とひらがなのマトリックス雨
}
```

### 3Dキューブアニメーション
```css
/* マウス追従3D効果 */
.cube {
    transform: translateY() rotateX() rotateY() rotateZ();
}
```

### スクロールアニメーション
```javascript
// IntersectionObserver APIを使用
const observer = new IntersectionObserver(entries => {
    // 要素が表示範囲に入った時のアニメーション
});
```

## 🔄 今後のアップデート予定

- [ ] ダークモード/ライトモードの切り替え
- [ ] ヴィンテージアイテムの詳細ページ
- [ ] ショッピングカート機能
- [ ] CMS連携
- [ ] PWA（Progressive Web App）対応
- [ ] SEO最適化

## 🤝 貢献

1. フォークを作成
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは個人使用・学習目的で作成されています。

## 📞 お問い合わせ

- **Website**: [highland.vision](https://your-username.github.io/highland)
- **Email**: hello@highland.vision
- **Social**: @highland_vision

---

**💫 Digital Vision • Vintage Culture**

Made with ❤️ and ⚡ for the digital future 