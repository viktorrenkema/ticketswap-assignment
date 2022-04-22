import React from 'react'
import { Card, space, device } from '@ticketswap/solar'
import styled from '@emotion/styled'
import Link from 'next/link'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const AllEvents = props => {
  const { allEvents } = props

  return (
    <>
      <Wrapper>
        {allEvents.map(({ id, name, location, date, imageUrl }) => (
          <Link key={id} href={`/event/${id}`} passHref>
            <a>
              <Card
                title={name}
                subtitle={`${location} - ${new Date(
                  date
                ).toLocaleDateString()}`}
                image={imageUrl}
              />
            </a>
          </Link>
        ))}
      </Wrapper>
    </>
  )
}

export default AllEvents
