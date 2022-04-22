import React from 'react'
import Container from '~/components/Container'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'
import { H2, H5, Image, Text } from '@ticketswap/solar'
import { gql } from '@apollo/client'
import { initializeApollo, addApolloState } from '~/graphql/client'

const Event = props => {
  const { name, date, location, imageUrl, description } = props.data.data.event

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

  const data = await client.query({
    query: MY_QUERY,
    variables: {
      id: 1,
    },
  })

  return addApolloState(client, {
    props: {
      data,
    },
  })
}

export default Event
