import Link from 'next/link'
import { useAlbums } from './Album/queries/__generated__/Albums'

export default function AlbumsList() {
  const { loading, error, data } = useAlbums()
  if (loading || !data) return <div>Loading</div>
  const { albums } = data
  console.log('______albums', albums)
  return (
    <section>
      <h3>AlbumsList</h3>
      <ul>
        {albums.map((album, index) => (
          <li key={album.id}>
            <Link href="/album/[id]" as={`/album/${album.id}`}><a >
            <h4 onClick={() => console.log('test')}>{album.id}. {album.name} {album?.artist?.name}</h4>
              </a></Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0; 
        }
      `}</style>

    </section>
  )
}
