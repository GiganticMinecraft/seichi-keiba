// Code generated by graphql-codegen. DO NOT EDIT.
import { DateString } from "../../types/nonimal";
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  Date: DateString;
};

export type News = {
  __typename?: 'News';
  closed_at?: Maybe<Scalars['Date']>;
  contents: Array<Scalars['String']>;
  created_at: Scalars['Date'];
  id: Scalars['ID'];
  last_updated_at?: Maybe<Scalars['Date']>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  news: Array<News>;
  valid_news: Array<News>;
};


export type QueryNewsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryValid_NewsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type GetAllNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllNewsQuery = { __typename?: 'Query', news: Array<{ __typename?: 'News', id: string, title: string, contents: Array<string>, created_at: DateString, last_updated_at?: DateString | null, closed_at?: DateString | null }> };

export type GetValidNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetValidNewsQuery = { __typename?: 'Query', valid_news: Array<{ __typename?: 'News', id: string, title: string, closed_at?: DateString | null }> };


export const GetAllNewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllNews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"news"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"closed_at"}}]}}]}}]} as unknown as DocumentNode<GetAllNewsQuery, GetAllNewsQueryVariables>;
export const GetValidNewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getValidNews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"valid_news"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"closed_at"}}]}}]}}]} as unknown as DocumentNode<GetValidNewsQuery, GetValidNewsQueryVariables>;