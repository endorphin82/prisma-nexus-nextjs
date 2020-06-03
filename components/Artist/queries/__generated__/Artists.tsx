import * as Types from '../../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type ArtistsVariables = {};


export type Artists = (
  { __typename: 'Query' }
  & { artists: Array<(
    { __typename: 'Artist' }
    & Pick<Types.Artist, 'id' | 'name' | 'url'>
    & { albums: Array<(
      { __typename: 'Album' }
      & Pick<Types.Album, 'id' | 'name' | 'year'>
    )> }
  )> }
);


export const ArtistsDocument = gql`
    query Artists {
  artists {
    id
    name
    url
    albums {
      id
      name
      year
    }
  }
}
    `;

/**
 * __useArtists__
 *
 * To run a query within a React component, call `useArtists` and pass it any options that fit your needs.
 * When your component renders, `useArtists` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArtists({
 *   variables: {
 *   },
 * });
 */
export function useArtists(baseOptions?: ApolloReactHooks.QueryHookOptions<Artists, ArtistsVariables>) {
        return ApolloReactHooks.useQuery<Artists, ArtistsVariables>(ArtistsDocument, baseOptions);
      }
export function useArtistsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Artists, ArtistsVariables>) {
          return ApolloReactHooks.useLazyQuery<Artists, ArtistsVariables>(ArtistsDocument, baseOptions);
        }
export type ArtistsHookResult = ReturnType<typeof useArtists>;
export type ArtistsLazyQueryHookResult = ReturnType<typeof useArtistsLazyQuery>;
export type ArtistsQueryResult = ApolloReactCommon.QueryResult<Artists, ArtistsVariables>;