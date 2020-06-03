
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useAlbum } from '../../../components/Album/queries/__generated__/Album'

export default function Album( ) {
  const router = useRouter()
  const { id } = router.query
  const { data, loading, error } = useAlbum({ variables: { where: { id: Number(id) } } })
  if (loading) {
    return (<div>Loading...</div>)
  }
  if (error || !data) {
    return (<div>Error...</div>)
  }
  const { album } = data
  return (
    <>
      <h1>Album: {album.id}</h1>
      <h2>{album.id}</h2>
      <h2>{album.name}</h2>
      <h2>{album.year}</h2>
      <h3>{album.artist.name}</h3>
    </>
  )
}
