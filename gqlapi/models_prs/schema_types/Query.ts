import { objectType, stringArg } from '@nexus/schema'

export const Query = objectType({
  name: 'Query',
  definition: function(t) {
    t.crud.album()
    t.crud.albums()
    t.crud.artist()
    t.crud.artists()

    t.field('artistsByName', {
      type: 'Artist',
      list: true,
      args: {
        name: stringArg({ required: true })
      },
      resolve: (_, { name }, ctx) =>
        ctx.prisma.artist.findMany({ where: { name } })
    })

      t.field('albumsByName', {
      type: 'Album',
      list: true,
      args: {
        name: stringArg({ required: true })
      },
      resolve: (_, { name }, ctx) =>
        ctx.prisma.album.findMany({ where: { name } })
    })
  }
})