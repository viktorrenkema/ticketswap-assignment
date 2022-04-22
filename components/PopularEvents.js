// Larger libraries
import React from 'react'

// Components
import { Card, Spinner } from '@ticketswap/solar'
import { GridContainer } from './orbit/layout'
import Link from 'next/link'

// Utilities
import { useQuery } from '@apollo/client'
import getPopularEvents from '~/graphql/queries/getPopularEvents'

const PopularEvents = () => {
  const { loading, data } = useQuery(getPopularEvents, {
    variables: {
      first: 6,
    },
  })

  if (loading) {
    return (
      <GridContainer>
        <Spinner />
      </GridContainer>
    )
  }

  const { popularEvents } = data

  return (
    <GridContainer>
      {popularEvents.map(({ id, name, location, date, imageUrl }) => (
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
    </GridContainer>
  )
}

export default PopularEvents
