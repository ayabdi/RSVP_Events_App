import { IncomingMessage, ServerResponse } from 'http'
import {NextApiRequest, NextApiResponse} from 'next'
import fetch from 'isomorphic-unfetch';
import { useMemo } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from '@apollo/client'
import { WebSocketLink } from "@apollo/client/link/ws";


let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

export type ResolverContext = {
  req?: IncomingMessage | NextApiRequest
  res?: ServerResponse | NextApiResponse<any>
}

const createHttpLink = () => {
  
  const httpLink = new HttpLink({
    uri: 'https://rare-viper-70.hasura.app/v1/graphql',
    credentials: 'include',
    headers :{
      'content-type' : 'application.json',
      'x-hasura-admin-secret' : process.env.HASURA_GRAPHQL_ADMIN_SECRET
    },
    fetch
  })
  return httpLink;
}
function createApolloClient() {
  const ssrMode:boolean = typeof window === 'undefined'
  let link: HttpLink | WebSocketLink 
    link = createHttpLink()
    //console.log(accessToken)
  return new ApolloClient({
    ssrMode,
    link,
    cache: new InMemoryCache(),
  })
}
export type ResolverContextNext = {
  req: IncomingMessage | NextApiRequest
  res: ServerResponse | NextApiResponse<any>
}

export function initializeApollo(
  initialState: any = null,
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send
  // a custom context which will be used by `SchemaLink` to server render pages
) {
  const _apolloClient = apolloClient ?? createApolloClient()
  
  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: any, ctx?: ResolverContextNext) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
