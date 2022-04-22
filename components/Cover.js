// Larger libraries
import React from 'react'
import styled from '@emotion/styled'

// Components
import { TicketSwap, MagnifyingGlass } from '@ticketswap/solar/icons'
import {
  space,
  color,
  H1,
  H5,
  Input,
  device,
  Cover as SolarCover,
} from '@ticketswap/solar'
import { FlexColCenter, CoverContainer } from './orbit/layout'

// Utilities
import { getNumberOfDay, getNameOfMonth, convertDate } from '~/lib/convertDates'

const Title = styled(H1)`
  color: ${color.lightForeground};
  @media ${device.tablet} {
    font-size: 3.5rem;
  }
`

const Detail = styled(H5)`
  color: ${color.lightForeground};
`

const CoverContainerWithImage = styled(CoverContainer)`
  padding: 0;
  background-color: none;
  display: flex;
`

const CoverDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space[16]};
  width: 100%;
`

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 48rem;
`

const TitleWrapper = styled.div`
  text-align: center;
  margin: 2rem 0;
  margin-bottom: 1.5rem;
  text-align: left;
  margin-top: 2rem;
  padding: 0 1rem;
  margin: 1rem 0;
  text-shadow: 0px 1px 4px rgb(0 0 0 / 30%), 0px 2px 13px rgb(0 0 0 / 30%),
    0px 3px 23px rgb(0 0 0 / 30%);
`

const Cover = props => {
  let { page, name, date, imageUrl, location, setQuery } = props

  if (page === 'frontpage') {
    return (
      <CoverContainer>
        <TicketSwap size={64} />
        <Title>Ticketswap challenger</Title>
      </CoverContainer>
    )
  }

  if (page === 'search') {
    return (
      <CoverContainerWithImage>
        <SolarCover imageUrl="https://cdn.ticketswap.com/public/201706/ab89e741-cc69-4c2e-88bc-3d4c807acef2.jpeg">
          <CoverDetailsWrapper>
            <TicketSwap size={64} />
            <TitleWrapper>
              <Title>Veilig tickets kopen en verkopen</Title>
            </TitleWrapper>
            <InputWrapper>
              <Input
                onChange={event => setQuery(event.target.value)}
                placeholder="Zoek naar evenementen, locaties, of steden"
                id="search"
                label="Search"
                hideLabel
                leftAdornment={<MagnifyingGlass size={24} />}
              />
            </InputWrapper>
          </CoverDetailsWrapper>
        </SolarCover>
      </CoverContainerWithImage>
    )
  }

  return (
    <CoverContainerWithImage>
      <SolarCover imageUrl={imageUrl} alt={`An image of the ${name} event.`}>
        <CoverDetailsWrapper>
          <TicketSwap size={64} />
          <FlexColCenter>
            <Title>{name}</Title>
            <Detail>{location}</Detail>
            <Detail>
              {getNumberOfDay(convertDate(date))}
              &nbsp;
              {getNameOfMonth(convertDate(date))}
              &nbsp;
              {date.substring(0, 4)}, begint om {date.substring(11, 16)}
            </Detail>
          </FlexColCenter>
        </CoverDetailsWrapper>
      </SolarCover>
    </CoverContainerWithImage>
  )
}

export default Cover
