import { objectType } from '@nexus/schema'

export const Album = objectType({
  name: 'Album',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.year()
    t.model.artist()
  }
})