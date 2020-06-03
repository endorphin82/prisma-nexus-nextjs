import * as Types from '../../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type AlbumsVariables = {};


export type Albums = (
  { __typename: 'Query' }
  & { albums: Array<(
    { __typename: 'Album' }
    & Pick<Types.Album, 'id' | 'name' | 'year'>
    & { artist?: Types.Maybe<(
      { __typename: 'Artist' }
      & Pick<Types.Artist, 'id' | 'name' | 'url'>
    )> }
  )> }
);


export const AlbumsDocument = gql`
    query Albums {
  albums {
    id
    name
    year
    artist {
      id
      name
      url
    }
  }
}
    `;

/**
 * __useAlbums__
 *
 * To run a query within a React component, call `useAlbums` and pass it any options that fit your needs.
 * When your component renders, `useAlbums` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlbums({
 *   variables: {
 *   },
 * });
 */
export function useAlbums(baseOptions?: ApolloReactHooks.QueryHookOptions<Albums, AlbumsVariables>) {
        return ApolloReactHooks.useQuery<Albums, AlbumsVariables>(AlbumsDocument, baseOptions);
      }
export function useAlbumsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Albums, AlbumsVariables>) {
          return ApolloReactHooks.useLazyQuery<Albums, AlbumsVariables>(AlbumsDocument, baseOptions);
        }
export type AlbumsHookResult = ReturnType<typeof useAlbums>;
export type AlbumsLazyQueryHookResult = ReturnType<typeof useAlbumsLazyQuery>;
export type AlbumsQueryResult = ApolloReactCommon.QueryResult<Albums, AlbumsVariables>;