import { nexusPrismaPlugin } from 'nexus-prisma'
import { makeSchema, objectType } from '@nexus/schema'
import { Context } from '../prisma/context'
import { Query } from './models_prs/schema_types/Query'
import { Artist } from './models_prs/schema_types/Artist'
import { Album } from './models_prs/schema_types/Album'
import { Mutation } from './models_prs/schema_types/Mutation'

// const ArtistAlbum = objectType({
//   name: 'ArtistAlbum',
//   definition(t) {
//     t.model.id()
//     // t.model.Artist()
//     // t.model.Album()
//     t.model.createdAt()
//     // t.list.field('artists', {
//     //   type: 'Artist',    // @ts-ignore
//     //   resolve: async ({ id }, args, context) => {
//     //     // @ts-ignore
//     //     return await context.prisma.album({ id }).artists()
//     //   }
//     // })
//
//   }
// })

// const Query = objectType({
//   name: 'Query',
//   definition(t) {
//     t.crud.albums()
//
//     t.list.field('albums', {
//       type: 'Album',
//       resolve: (_, args, ctx) =>
//         ctx.prisma.album.findMany({})
//     })
//     // t.list.field("artists", {
//     //   type: "Artist",
//     //   resolve: (_, args, ctx) =>
//     //     ctx.prisma.artist.findMany({})
//     // })
//   }
// })


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
