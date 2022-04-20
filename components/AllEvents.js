import React from 'react'
import { useQuery } from '@apollo/client'
import { Card, space, Spinner, Input } from '@ticketswap/solar'
import styled from '@emotion/styled'
import getAllEvents from '~/graphql/queries/getAllEvents'
import Link from 'next/link'
import { useDebounce } from '~/lib/useDebounce'
import { MagnifyingGlass } from '@ticketswap/solar/icons'

const Wrapper = styled.div`
  display: flex;
  gap: ${space[16]};
  flex-wrap: wrap;
`

const AllEvents = () => {
  const [query, setQuery] = React.useState('')
  const { loading, data, refetch } = useQuery(getAllEvents, {
    variables: {
      name: '',
    },
  })

  const debouncedSearch = useDebounce(query, 500)

  React.useEffect(
    () => {
      refetch({ name: debouncedSearch })
    },
    [debouncedSearch, refetch] // Only call effect if debounced search term changes
  )

  if (loading) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    )
  }

  const { allEvents } = data

  return (
    <>
      <Input
        onChange={event => setQuery(event.target.value)}
        placeholder="Search all events"
        id="search"
        label="Search"
        hideLabel
        leftAdornment={<MagnifyingGlass size={24} />}
      />
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
