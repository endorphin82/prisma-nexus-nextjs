import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

/*
export const ALL_ARTISTS_QUERY = gql`
    query allArtists {
        artists {
            id
            name
            albums{
                id
                name
                year
            }
        }
    }
`
*/

export const ALL_ALBUMS_QUERY = gql`
    query allAlbums {
        albums {
            id
            name
        }
    }
`
export default function AlbumsList() {
  const { loading, error, data } = useQuery(ALL_ALBUMS_QUERY)
  if (loading || !data) return <div>Loading</div>
  const { albums } = data
  console.log('______albums', albums)
  return (
    <section>
      <h3>Sequelize</h3>
      <ul>
        {albums.map((album, index) => (
          <li key={album.id}>
              <h4 onClick={()=> console.log("test")}>{album.id }. {album.name}</h4>
              <ul>
               {/* {artist.albums.map((album, index) =>*/}
               {/*  <li key={artist.id+index}>{album.name }{' '}{album.year } </li>*/}
               {/*)}*/}
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
