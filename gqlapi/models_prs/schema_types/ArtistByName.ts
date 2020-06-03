import { objectType } from '@nexus/schema'

export const ArtistByName = objectType({
  name: 'ArtistByName',
  definition(t) {
    t.string("name")
  }
})