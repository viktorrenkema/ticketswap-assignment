import React from 'react'
import { Card, space } from '@ticketswap/solar'
import styled from '@emotion/styled'
import Link from 'next/link'

const Wrapper = styled.div`
  display: flex;
  gap: ${space[16]};
  flex-wrap: wrap;
  justify-content: center;
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
