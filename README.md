# seichi-keiba

ギガンティック☆整地鯖において、競馬大会を行う際にレース情報や勝馬投票券の販売を行うサイト。

## 機能

### 利用者

* レース情報・結果の閲覧
* 勝馬投票券の購入・払戻状況の確認

### 管理者

* レース情報・結果の登録

## 開発

### ディレクトリ構成

* monorepo
  * [frontend](./frontend/)
    * [こちらのサイト](https://note.com/tabelog_frontend/n/n07b4077f5cf3)で紹介されているものを使用。
  * [backend](./backend/)
  * [shared](./shared/)

### 主な依存関係

#### 共通

* [Volta](https://volta.sh)
  * Node.jsやYarnのバージョン管理
* Node.js
* Yarn

#### フロントエンド

* [React](https://ja.reactjs.org)
* [Vite](https://vitejs.dev)
  * ビルドツール

#### バックエンド

* GraphQL
* Apollo Server

### CSSについて

* ChakraUIを基本
* 一部コンポーネント化する際にWindiCSSを使用

### 開発を始める

```bash
# 依存関係をインストール
$ yarn install
  [1/4] Resolving packages...
  ...
  Done in 4.27s.

# 開発用サーバーを起動（ホットリロード）
$ yarn dev
  vite v... dev server running at:

  > Local: http://localhost:3000/
  ...
```

## ライセンス

[MIT License](./LICENSE)
