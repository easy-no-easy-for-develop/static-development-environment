# 静的開発環境
## 概要
node.js、npm scriptsを使用した静的開発環境です。


## ディレクトリ構成
```
dev
```
** 開発用の格納ディレクトリ

```
dist
```
** 本番公開用の格納ディレクトリ


## 必要なもの
* **node.js**
* node.jsのバージョンは8系を使用します。

* **gulp**

gulpで「gulp: command not found」とエラーが出た場合はgulpをglobalにインストールしてください。
```
$ npm i gulp -g
```

* **webpack**

webpackでエラーが出る場合、webpackをglobalにインストールしてください。
```
$ npm i webpack -g
```


## パッケージインストール
```
$ npm i
```


## npm scripts
```
$ npm run build
```
** distフォルダを一旦削除し、全てのコンパイルタスクを実行します。

```
$ npm run dev
```
** ローカルサーバを起動します。

** GITにコミットする時は必ず`$ npm run build`をしてからコミットをするようにしてください。


## gulpfile.js
画像圧縮タスクは、`gulpfile.js`に記述しています。
`npm run build`した時に`dist`に出力します。


## htmlminify.json
htmlをビルドするタスクは、`htmlminify.json`に記述しています。


## postcss.config.js
cssをビルドするタスクは、`postcss.config.js`に記述しています。
新しい機能を追加したいときは当ファイルを修正します。


## webpack.config.js
JavaScriptをビルドするタスクは、`webpack.config.js`に記述しています。


## stylelint
stylelintのルールは、`.stylelintrc`に記述しています。
cssファイルを保存した時にstylelintのルールに沿ってチェックを行います。
[stylelintルール一覧](https://github.com/stylelint/stylelint-config-standard)


## eslint
eslintのルールは、`.eslintrc.json`に記述しています。
jsファイルを保存した時にeslintのルールに沿ってチェックを行います。
[eslintルール一覧](https://eslint.org/docs/rules/)
