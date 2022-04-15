import React from 'react'
import { useQuery } from '@apollo/client'
import { Card, space, Spinner } from '@ticketswap/solar'
import styled from '@emotion/styled'
import getAllEvents from '~/graphql/queries/getAllEvents'
import Link from 'next/link'

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${space[16]};
  grid-template-columns: repeat(2, 1fr);
`

const AllEvents = () => {
  const { loading, data } = useQuery(getAllEvents, {
    variables: {
      first: 200,
    },
  })

  if (loading) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    )
  }

  const { allEvents } = data

  return (
    <Wrapper>
      {allEvents.map(({ id, name, location, date, imageUrl }) => (
        <Link key={id} href={`/event/${id}`} passHref>
          <a>
            <Card
              title={name}
              subtitle={`${location} - ${new Date(date).toLocaleDateString()}`}
              image={imageUrl}
            />
          </a>
        </Link>
      ))}
    </Wrapper>
  )
}

export default AllEvents
