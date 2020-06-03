export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  album?: Maybe<Album>;
  albums: Array<Album>;
  artist?: Maybe<Artist>;
  artists: Array<Artist>;
  artistsByName: Array<Artist>;
  albumsByName: Array<Album>;
};


export type QueryAlbumArgs = {
  where: AlbumWhereUniqueInput;
};


export type QueryAlbumsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<AlbumWhereUniqueInput>;
  before?: Maybe<AlbumWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryArtistArgs = {
  where: ArtistWhereUniqueInput;
};


export type QueryArtistsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<ArtistWhereUniqueInput>;
  before?: Maybe<ArtistWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryArtistsByNameArgs = {
  name: Scalars['String'];
};


export type QueryAlbumsByNameArgs = {
  name: Scalars['String'];
};

export type Artist = {
  __typename?: 'Artist';
  id: Scalars['Int'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  albums: Array<Album>;
};


export type ArtistAlbumsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<AlbumWhereUniqueInput>;
  before?: Maybe<AlbumWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Album = {
  __typename?: 'Album';
  id: Scalars['Int'];
  name: Scalars['String'];
  year?: Maybe<Scalars['String']>;
  artist?: Maybe<Artist>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneAlbum: Album;
  updateOneAlbum?: Maybe<Album>;
  updateManyAlbum: BatchPayload;
  deleteOneAlbum?: Maybe<Album>;
  deleteManyAlbum: BatchPayload;
  createOneArtist: Artist;
  updateOneArtist?: Maybe<Artist>;
  updateManyArtist: BatchPayload;
  deleteOneArtist?: Maybe<Artist>;
  deleteManyArtist: BatchPayload;
};


export type MutationCreateOneAlbumArgs = {
  data: AlbumCreateInput;
};


export type MutationUpdateOneAlbumArgs = {
  data: AlbumUpdateInput;
  where: AlbumWhereUniqueInput;
};


export type MutationUpdateManyAlbumArgs = {
  data: AlbumUpdateManyMutationInput;
  where?: Maybe<AlbumWhereInput>;
};


export type MutationDeleteOneAlbumArgs = {
  where: AlbumWhereUniqueInput;
};


export type MutationDeleteManyAlbumArgs = {
  where?: Maybe<AlbumWhereInput>;
};


export type MutationCreateOneArtistArgs = {
  data: ArtistCreateInput;
};


export type MutationUpdateOneArtistArgs = {
  data: ArtistUpdateInput;
  where: ArtistWhereUniqueInput;
};


export type MutationUpdateManyArtistArgs = {
  data: ArtistUpdateManyMutationInput;
  where?: Maybe<ArtistWhereInput>;
};


export type MutationDeleteOneArtistArgs = {
  where: ArtistWhereUniqueInput;
};


export type MutationDeleteManyArtistArgs = {
  where?: Maybe<ArtistWhereInput>;
};

export type AlbumWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ArtistWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type AlbumCreateInput = {
  name: Scalars['String'];
  year?: Maybe<Scalars['String']>;
  artist?: Maybe<ArtistCreateOneWithoutAlbumsInput>;
};

export type AlbumUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
  artist?: Maybe<ArtistUpdateOneWithoutAlbumsInput>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type AlbumUpdateManyMutationInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type AlbumWhereInput = {
  id?: Maybe<IntFilter>;
  artist_id?: Maybe<NullableIntFilter>;
  name?: Maybe<StringFilter>;
  year?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<AlbumWhereInput>>;
  OR?: Maybe<Array<AlbumWhereInput>>;
  NOT?: Maybe<Array<AlbumWhereInput>>;
  artist?: Maybe<ArtistWhereInput>;
};

export type ArtistCreateInput = {
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  albums?: Maybe<AlbumCreateManyWithoutArtistInput>;
};

export type ArtistUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  albums?: Maybe<AlbumUpdateManyWithoutArtistInput>;
};

export type ArtistUpdateManyMutationInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ArtistWhereInput = {
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  url?: Maybe<NullableStringFilter>;
  albums?: Maybe<AlbumFilter>;
  AND?: Maybe<Array<ArtistWhereInput>>;
  OR?: Maybe<Array<ArtistWhereInput>>;
  NOT?: Maybe<Array<ArtistWhereInput>>;
};

export type ArtistCreateOneWithoutAlbumsInput = {
  create?: Maybe<ArtistCreateWithoutAlbumsInput>;
  connect?: Maybe<ArtistWhereUniqueInput>;
};

export type ArtistUpdateOneWithoutAlbumsInput = {
  create?: Maybe<ArtistCreateWithoutAlbumsInput>;
  connect?: Maybe<ArtistWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ArtistUpdateWithoutAlbumsDataInput>;
  upsert?: Maybe<ArtistUpsertWithoutAlbumsInput>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};

export type NullableIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type NullableStringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type AlbumCreateManyWithoutArtistInput = {
  create?: Maybe<Array<AlbumCreateWithoutArtistInput>>;
  connect?: Maybe<Array<AlbumWhereUniqueInput>>;
};

export type AlbumUpdateManyWithoutArtistInput = {
  create?: Maybe<Array<AlbumCreateWithoutArtistInput>>;
  connect?: Maybe<Array<AlbumWhereUniqueInput>>;
  set?: Maybe<Array<AlbumWhereUniqueInput>>;
  disconnect?: Maybe<Array<AlbumWhereUniqueInput>>;
  delete?: Maybe<Array<AlbumWhereUniqueInput>>;
  update?: Maybe<Array<AlbumUpdateWithWhereUniqueWithoutArtistInput>>;
  updateMany?: Maybe<Array<AlbumUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<AlbumScalarWhereInput>>;
  upsert?: Maybe<Array<AlbumUpsertWithWhereUniqueWithoutArtistInput>>;
};

export type AlbumFilter = {
  every?: Maybe<AlbumWhereInput>;
  some?: Maybe<AlbumWhereInput>;
  none?: Maybe<AlbumWhereInput>;
};

export type ArtistCreateWithoutAlbumsInput = {
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type ArtistUpdateWithoutAlbumsDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ArtistUpsertWithoutAlbumsInput = {
  update: ArtistUpdateWithoutAlbumsDataInput;
  create: ArtistCreateWithoutAlbumsInput;
};

export type AlbumCreateWithoutArtistInput = {
  name: Scalars['String'];
  year?: Maybe<Scalars['String']>;
};

export type AlbumUpdateWithWhereUniqueWithoutArtistInput = {
  where: AlbumWhereUniqueInput;
  data: AlbumUpdateWithoutArtistDataInput;
};

export type AlbumUpdateManyWithWhereNestedInput = {
  where: AlbumScalarWhereInput;
  data: AlbumUpdateManyDataInput;
};

export type AlbumScalarWhereInput = {
  id?: Maybe<IntFilter>;
  artist_id?: Maybe<NullableIntFilter>;
  name?: Maybe<StringFilter>;
  year?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<AlbumScalarWhereInput>>;
  OR?: Maybe<Array<AlbumScalarWhereInput>>;
  NOT?: Maybe<Array<AlbumScalarWhereInput>>;
};

export type AlbumUpsertWithWhereUniqueWithoutArtistInput = {
  where: AlbumWhereUniqueInput;
  update: AlbumUpdateWithoutArtistDataInput;
  create: AlbumCreateWithoutArtistInput;
};

export type AlbumUpdateWithoutArtistDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type AlbumUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};
