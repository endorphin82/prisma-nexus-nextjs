import { nexusPrismaPlugin } from 'nexus-prisma'
import { makeSchema, objectType } from '@nexus/schema'
import { Context } from '../prisma/context'
import { Query } from './models_prs/schema_types/Query'
import { Artist } from './models_prs/schema_types/Artist'
import { Album } from './models_prs/schema_types/Album'
import { Mutation } from './models_prs/schema_types/Mutation'

export const schema_prs = makeSchema({
  types: [Query, Artist, Album, Mutation],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts'
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma'
      },
      {
        source: require.resolve('../prisma/context'),
        alias: 'Context'
      }
    ]
  }
})
