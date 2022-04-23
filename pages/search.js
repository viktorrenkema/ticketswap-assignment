// Larger libraries
import React from 'react'
import styled from '@emotion/styled'

// Components
import { space, sizes, Card, Spinner } from '@ticketswap/solar'
import { WarningRounded } from '@ticketswap/solar/icons'
import AllEvents from '~/components/AllEvents'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'

// Utilities
import { useQuery } from '@apollo/client'
import { useDebounce } from '~/lib/useDebounce'
import getAllEvents from '~/graphql/queries/getAllEvents'

const Wrapper = styled.div`
  display: flex;
  gap: ${space[16]};
  flex-wrap: wrap;
  justify-content: center;
`

const SearchPageContainer = styled.main`
  padding: 0 ${space[16]};
  margin: ${space[16]} auto;
  max-width: ${sizes.laptop}px;
  display: flex;
  flex-direction: column;
  gap: ${space[32]};
`

const Search = () => {
  const [query, setQuery] = React.useState('')
  const debouncedSearch = useDebounce(query, 500)

  const { loading, data, refetch } = useQuery(getAllEvents, {
    variables: {
      name: '',
    },
  })

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
      <Cover page="search" setQuery={setQuery}></Cover>
      <SearchPageContainer>
        <Card
          leftAdornment={<WarningRounded size={24} />}
          title="Covid-19 regulaties opgeheven."
          description="In Nederland zijn er geen maatregelen meer omtrent covid-19."
        ></Card>
        <AllEvents allEvents={allEvents}></AllEvents>
      </SearchPageContainer>
      <Footer />
    </>
  )
}

export default Search
