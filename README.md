# my-minista-project

## Demo

- URL: https
- Pass: `********`

## Caution

- 静的ビルドされるため React の Hook を使用することはできない
- import した CSS は bundle.css として結合し全体に適応される
- minify するかどうかは minista.config.ts の vite にて設定

## error 回避

- yarn add --dev @types/css-modules で css-modules の型定義ファイルをインストール
