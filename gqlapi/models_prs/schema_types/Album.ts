import { objectType } from '@nexus/schema'

export const Album = objectType({
  name: 'Album',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.year()
    t.model.artist()
    //
    // t.list.field('artists', {
    //   type: 'Artist',    // @ts-ignore
    //   resolve: async ({ id }, args, context) => {
    //     // @ts-ignore
    //     // return await context.prisma.album({ id }).artists()
    //     return await context.prisma.album.findOne({ id }).ArtistAlbum({ where: { album_id: id } })
    //   }
    // })
    // t.list.field('artists', {
    //   resolve: ({ id }, args, context) => {
    //     return context.prisma.artistAlbum.findMany({ where: { album_id: id } })
    //   }
    // })
    // t.list.field('artists', {
    //   resolve: async (root, args, context) => {
    //     return await context.prisma.artistAlbum.findMany({ where: { album_id: root.id } })
    //   }
    // })
  }
})