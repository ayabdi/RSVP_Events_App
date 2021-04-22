import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apollo'
import 'tailwindcss/tailwind.css'
import '../modules/dashboard/style.css'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  console.log(pageProps.session)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps}/>
    </ApolloProvider>
  )
}
