import { objectType } from '@nexus/schema'

export const Artist = objectType({
  name: 'Artist',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.url()
    t.model.albums()
  }
})