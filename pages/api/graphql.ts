import { ApolloServer } from "apollo-server-micro"
import Cors from "micro-cors"
import { connectSeq, sequelize } from "../../gqlapi/models_seq/base"
import { schema_seq } from "../../gqlapi/schema_seq"
import { schema_mon } from "../../gqlapi/schema_mon"
import { connectMon } from "../../gqlapi/models_mon/base"

import { schema_prs } from "../../gqlapi/schema_prs"
import { createContext } from "../../prisma/context"

// connectSeq(sequelize)

// connectMon()

const cors = Cors({
  allowMethods: ["GET", "POST", "OPTIONS"]
})

const apolloServer = new ApolloServer({
  schema: schema_prs,
  context: createContext

})
const handler = apolloServer.createHandler({ path: "/api/graphql" })

export const config = {
  api: {
    bodyParser: false
  }
}

export default cors(handler)
