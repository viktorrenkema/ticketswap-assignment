import React from 'react'
import Container from '~/components/Container'
import Footer from '~/components/Footer'
import { Input, space } from '@ticketswap/solar'
import styled from '@emotion/styled'
import AllEvents from '~/components/AllEvents'

const SubTitle = styled.h3`
  margin-top: ${space[32]};
  margin-bottom: ${space[16]};
`

const Search = () => {
  return (
    <>
      <Container>
        <SubTitle>All events</SubTitle>
        <AllEvents></AllEvents>
      </Container>
      <Footer />
    </>
  )
}

export default Search
