import React from 'react'
import Container from '~/components/Container'
import Footer from '~/components/Footer'
import { H1, space, sizes } from '@ticketswap/solar'
import styled from '@emotion/styled'
import AllEvents from '~/components/AllEvents'

const SearchPageContainer = styled.main`
  padding: 0 ${space[16]};
  margin: ${space[16]} auto;
  max-width: ${sizes.laptopL}px;
  display: flex;
  flex-direction: column;
  gap: ${space[32]};
`

const Search = () => {
  return (
    <>
      <SearchPageContainer>
        {/* <Cover
          fullHeight
          caption={'Confetti and light show at a festival'}
          captionUrl={'Confetti and light show at a festival'}
          images={
            'https://cdn.ticketswap.com/public/202106/6c79cde4-0e56-4abf-a88d-96e64060cadd.dc57f787362f4ba50df3be9ada97644a2539e90a.jpeg'
          }
        >
          <Title>Search for upcoming events</Title>
        </Cover> */}
        {/* <Cover imageUrl="https://cdn.ticketswap.com/public/202106/6c79cde4-0e56-4abf-a88d-96e64060cadd.dc57f787362f4ba50df3be9ada97644a2539e90a.jpeg">
          <Title>Awakenings Festival 2019</Title>
        </Cover> */}
        <H1>All events</H1>
        <AllEvents></AllEvents>
      </SearchPageContainer>
      <Footer />
    </>
  )
}

export default Search
