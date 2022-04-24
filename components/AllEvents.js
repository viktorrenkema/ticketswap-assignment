// Larger libraries
import React from 'react'
import styled from '@emotion/styled'
import propTypes from 'prop-types'

// Components
import { Card, device } from '@ticketswap/solar'
import { GridContainer } from './orbit/layout'
import EmptyState from './EmptyState'
import Link from 'next/link'

const GridContainerCol3 = styled(GridContainer)`
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const AllEvents = props => {
  const { allEvents } = props

  const noResults = allEvents.length === 0

  return (
    <GridContainerCol3>
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
      {noResults && <EmptyState />}
    </GridContainerCol3>
  )
}

export default AllEvents

AllEvents.propTypes = {
  allEvents: propTypes.array,
}
