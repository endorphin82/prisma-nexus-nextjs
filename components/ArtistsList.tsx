import { useArtists } from './Artist/queries/__generated__/Artists'

export default function ArtistsList() {
  const { loading, error, data } = useArtists()
  if (loading || !data) return <div>Loading</div>
  const { artists } = data
  console.log('______artists', artists)
  return (
    <section>
      <h3>ArtistsList</h3>
      <ul>
        {artists.map((artist, index) => (
          <li key={artist.id}>
            <h4 onClick={() => console.log('test')}>{artist.id}. {artist.name}</h4>
            <ul>
              {artist.albums.map((album, index) =>
                <li key={album.id + index}>{album.name}{' '}{album.year} </li>
              )}
            </ul>
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
