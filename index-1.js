/**
 * 基本動作確認
 * 1. index.jsにコードをコピペ
 * 2. $ npx index.jsでサーバー起動
 * 3. consoleに表示されたurlにアクセス
 * 4. Apollo Studio Explorerが起動するので、Query your serverをクリック
 * 5. Operations を空にした状態から左側の Documentationの Query と Fields の下にある hello をクリック
 * 6. outputは以下になる
 * {
 *   "data": {
 *     "hello": "Hello World"
 *   }
 * }
 */

const { ApolloServer, gql } = require('apollo-server')

// Queryタイプ: Read Operation(問い合わせ)を行うクエリーの定義に利用します
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// resolver: Queryタイプで定義した戻り値の型通りにどのように処理を行うのかを記述する
const resolvers = {
  Query: {
    hello: () => 'Hello World',
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
