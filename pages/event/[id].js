import React from 'react'
import Container from '~/components/Container'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'
import { H2, H5, Image, Text } from '@ticketswap/solar'
import { useQuery, gql } from '@apollo/client'
import getEvent from '~/graphql/queries/getEvent'
import { initializeApollo, addApolloState } from '~/graphql/client'
import { schema } from '~/graphql/schema'

const Event = ({ eventId, name, date, location, imageUrl, description }) => {
  return (
    <>
      <Cover />
      <Container>
        <Image
          src={imageUrl}
          size={128}
          rounded={true}
          alt={`An image of the ${name} event.`}
        />
        <H2>{name}</H2>
        <H5>{new Date(date).toLocaleString()}</H5>
        <H5>{location}</H5>
        <Text>{description}</Text>
      </Container>
      <Footer />
    </>
  )
}

const MY_QUERY = gql`
  query getEvent($id: Int!) {
    event(id: $id) {
      id
      name
      date
      location
      imageUrl
      description
    }
  }
`

export const getServerSideProps = async ({ params }) => {
  const client = initializeApollo()

  // console.log('query', MY_QUERY)

  await client
    .query({
      query: MY_QUERY,
      variables: {
        id: parseInt(params.id),
      },
    })
    .then(r => console.log('reso', r))

  return addApolloState(client, {
    props: {},
  })
}

export default Event
