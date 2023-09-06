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
