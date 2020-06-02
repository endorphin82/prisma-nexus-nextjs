import { objectType } from '@nexus/schema'

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.album()
    t.crud.albums()
    t.crud.artist()
    t.crud.artists()
    // t.list.field("artists", {
    //   type: "Artist",
    //   resolve: (_, args, ctx) =>
    //     ctx.prisma.artist.findMany({})
    // })
  }
})