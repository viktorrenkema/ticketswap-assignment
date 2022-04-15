import React from 'react'
import { useQuery } from '@apollo/client'
import { Card, space, Spinner, Input } from '@ticketswap/solar'
import styled from '@emotion/styled'
import getAllEvents from '~/graphql/queries/getAllEvents'
import Link from 'next/link'

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${space[16]};
  grid-template-columns: repeat(2, 1fr);
`

const AllEvents = () => {
  function useSearchFilter() {
    const [filters, _updateFilter] = React.useState({
      name: undefined,
    })

    const updateFilter = (filterType, value) => {
      _updateFilter({
        [filterType]: value,
      })
    }

    return {
      models: { filters },
      operations: { updateFilter },
    }
  }

  const { operations, models } = useSearchFilter()
  const { loading, data, refetch } = useQuery(getAllEvents, {
    variables: {
      first: 100,
      name: 'bla',
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

  const handleSearch = e => {
    operations.updateFilter('name', e.target.value)
    console.log('models.filters.name', typeof models.filters.name)
    setTimeout(() => {
      refetch({
        nameInput: { first: 100, name: models.filters.name },
      })
    }, 1000)
  }

  return (
    <Wrapper>
      <Input
        onChange={handleSearch}
        id="eventquery"
        label="Which event are you looking for?"
      />
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
