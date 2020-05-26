import { nexusPrismaPlugin } from 'nexus-prisma'
import { makeSchema, objectType } from '@nexus/schema'
import { Context } from '../prisma/context'

const Artist = objectType({
  name: 'Artist',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.url()
  }
})

const Album = objectType({
  name: 'Album',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.year()
  }
})

// const ArtistAlbum = objectType({
//   name: "ArtistAlbum",
//   definition(t) {
//
//   }
// })

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.albums()

    t.list.field('albums', {
      type: 'Album',
      resolve: (_, args, ctx) =>
        ctx.prisma.album.findMany({})
    })
    // t.list.field("artists", {
    //   type: "Artist",
    //   resolve: (_, args, ctx) =>
    //     ctx.prisma.artist.findMany({})
    // })
  }
})

// const Mutation = objectType({
//   name: "Mutation",
//   definition(t) {
//
//   }
// })

export const schema_prs = makeSchema({
  types: [Query, Artist, Album],
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
