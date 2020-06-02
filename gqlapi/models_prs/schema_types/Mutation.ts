import { objectType } from '@nexus/schema'

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneAlbum()
    t.crud.updateOneAlbum()
    t.crud.updateManyAlbum()
    t.crud.deleteOneAlbum()
    t.crud.deleteManyAlbum()

    t.crud.createOneArtist()
    t.crud.updateOneArtist()
    t.crud.updateManyArtist()
    t.crud.deleteOneArtist()
    t.crud.deleteManyArtist()
  }
})