import { objectType } from "@nexus/schema"

export const Album = objectType({
  name: "albums",
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.year()
  }
})