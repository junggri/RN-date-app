export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  insertPlace: Place;
};


export type MutationInsertPlaceArgs = {
  input: PlaceInput;
};

export type Picture = {
  __typename?: 'Picture';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  record: Record;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  who: Scalars['String'];
};

export type Place = {
  __typename?: 'Place';
  buildingName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  record: Record;
  register: Register;
  roadAddress: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  who: Scalars['String'];
};

export type PlaceInput = {
  buildingName: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  roadAddress: Scalars['String'];
  who: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  ping: Scalars['String'];
};

export type Record = {
  __typename?: 'Record';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  picture: Array<Picture>;
  place: Place;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  who: Scalars['String'];
};

export type Register = {
  __typename?: 'Register';
  address: Scalars['String'];
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  place: Array<Place>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  who: Scalars['String'];
};
