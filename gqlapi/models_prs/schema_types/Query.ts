import { objectType, stringArg } from '@nexus/schema'

export const Query = objectType({
  name: 'Query',
  definition: function(t) {
    t.crud.album()
    t.crud.albums()
    t.crud.artist()
    t.crud.artists()
    /*
                t.field('artistsByName', {
                  type: 'Artist',
                  list: true,
                  args: {
                    name: stringArg({ required: true })
                  },
                  resolve: (_, { name }, ctx) =>
                    ctx.prisma.artist.findMany({wher { name } })
                })
 */
        // TODO: no work not array https://github.com/graphql-nexus/nexus-schema-plugin-prisma/blob/master/examples/blog/src/schema/Query.ts


    t.field('artistsByName', {
      type: 'Artist',
      args: {
        name: stringArg({ required: true })
      },
      resolve(_root, args, ctx) {
        return ctx.prisma.artist
          .findOne({
            where: {
              name: args.name
            }
          })
          .then(result => {
            if (result === null) {
              throw new Error(`No blog with id of "${args.name}"`)
            }
            return result
          })
      }
    })

    // t.field('artistsByName', {
    //   type: 'Artist',
    //   args: {
    //     name: stringArg({ required: true })
    //   },
    //   resolve: (_, { name }, ctx) =>
    //     ctx.prisma.artist.findMany({ where: { name } }).then(result => {
    //       if (result === null) {
    //         throw new Error(`No blog with id of "${name}"`)
    //       }
    //       return result
    //     })
    // })


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