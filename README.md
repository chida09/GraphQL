# GraphQL

## 参考情報
* [これを読めばGraphQL全体がわかる。GraphQLサーバからDB、フロントエンド構築](https://reffect.co.jp/html/graphql/)

## 基本動作確認
1. index.jsにコードをコピペ
2. $ npx index.jsでサーバー起動
3. consoleに表示されたurlにアクセス
4. Apollo Studio Explorerが起動するので、Query your serverをクリック
5. Operations を空にした状態から左側の Documentationの Query と Fields の下にある hello をクリック

```
operation:
query Query {
    hello
}

output:
{
    "data": {
     "hello": "Hello World"
    }
}
```
