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
  return (
    <>
      <SearchPageContainer>
        <Card
          leftAdornment={<WarningRounded size={24} />}
          title="Teeeest"
          description="."
        />
      </SearchPageContainer>
      <Footer />
    </>
  )
}

export default Search
