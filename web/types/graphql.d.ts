export type Maybe<T> = T | null;
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
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};





export type Query = {
  __typename?: 'Query';
  getSolar: Solar;
  redwood?: Maybe<Redwood>;
};


export type QueryGetSolarArgs = {
  address: Scalars['String'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};

export type Solar = {
  __typename?: 'Solar';
  address: Scalars['String'];
  number_of_panels: Scalars['String'];
  ac_annually: Scalars['String'];
  area: Scalars['String'];
};


export type Get_SolarVariables = Exact<{
  address: Scalars['String'];
}>;


export type Get_Solar = (
  { __typename?: 'Query' }
  & { solar: (
    { __typename?: 'Solar' }
    & Pick<Solar, 'address' | 'number_of_panels' | 'ac_annually' | 'area'>
  ) }
);
