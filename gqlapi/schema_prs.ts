import { nexusPrismaPlugin } from "nexus-prisma"
import { makeSchema, objectType } from "@nexus/schema"

const Artist = objectType({
  name: "Artist",
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.url()
    // t.list.field("albums", {
    //   type: "Album",
    //   resolve: (parent, args, ctx) =>
    //     ctx.prisma.album.findMany({ where: { id: parent.id } })
    // })
  }
})

const Album = objectType({
  name: "Album",
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.year()
    t.list.field("artists", {
      type: "Album",
      resolve: (parent, args, ctx) =>
        ctx.prisma.artist.findMany({})
    })
  }
})

const ArtistAlbum = objectType({
  name: "ArtistAlbum",
  definition(t) {
    t.model.id()
    t.model.Album()
    t.model.Artist()
  }
})

const Query = objectType({
  name: "Query",
  definition(t) {
    t.crud.albums()
    t.crud.artistAlbum()

    t.list.field("albums", {
      type: "Album",
      resolve: (_, args, ctx) =>
        ctx.prisma.album.findMany({})
    })
    t.list.field("artists", {
      type: "Artist",
      resolve: (_, args, ctx) =>
        ctx.prisma.artist.findMany({})
    })
  }
})

// const Mutation = objectType({
//   name: "Mutation",
//   definition(t) {
//     t.crud.createOnealbums({ alias: "createAlbum" })
//   }
// })

export const schema_prs = makeSchema({
  types: [Query, Artist, Album, ArtistAlbum],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + "/../schema.graphql",
    typegen: __dirname + "/generated/nexus.ts"
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma"
      },
      {
        source: require.resolve("../prisma/context"),
        alias: "Context"
      }
    ]
  }
})
