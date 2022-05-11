// Larger libraries
import React from 'react'
import styled from '@emotion/styled'

// Components
import { space, sizes, Card } from '@ticketswap/solar'
import { WarningRounded } from '@ticketswap/solar/icons'

import Footer from '~/components/Footer'

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
