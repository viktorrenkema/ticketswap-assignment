import React from 'react'
import Container from '~/components/Container'
import { useQuery } from '@apollo/client'
import getAllEvents from '~/graphql/queries/getAllEvents'
import { useDebounce } from '~/lib/useDebounce'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'
import { space, sizes, Card, Spinner } from '@ticketswap/solar'
import { WarningRounded } from '@ticketswap/solar/icons'
import styled from '@emotion/styled'
import AllEvents from '~/components/AllEvents'

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
      <Cover page="search" setQuery={setQuery}></Cover>
      <SearchPageContainer>
        <Card
          leftAdornment={<WarningRounded size={24} />}
          title="Let op"
          subtitle="Dit evenement heeft momenteel geen beschikbare kaarten. "
          description="Zet een alert aan om op de hoogte te worden gehouden."
        ></Card>
        <AllEvents allEvents={allEvents}></AllEvents>
      </SearchPageContainer>
      <Footer />
    </>
  )
}

export default Search
