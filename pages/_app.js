// Larger libraries
import React from 'react'
import propTypes from 'prop-types'

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
        <title>Ticketswap Challenger</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <BaseStyles />

      <Component {...pageProps} />
    </ApolloProvider>
  )
}

App.propTypes = {
  Component: propTypes.func,
  pageProps: propTypes.object,
}
