// Larger libraries
import React from 'react'

// Components
import Head from 'next/head'

// Utilities
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '~/graphql/client'
import BaseStyles from '~/styles/global'

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <BaseStyles />

      <Component {...pageProps} />
    </ApolloProvider>
  )
}
