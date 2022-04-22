import React from 'react'
import { TicketSwap, MagnifyingGlass } from '@ticketswap/solar/icons'
import styled from '@emotion/styled'
import {
  space,
  color,
  H1,
  H5,
  Image,
  shadow,
  Input,
  device,
  Cover as SolarCover,
} from '@ticketswap/solar'
import { getNumberOfDay, getNameOfMonth } from '~/lib/convertDates'

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: ${space[32]};
  color: ${color.lightForeground};
  box-shadow: ${shadow.strong};
  display: flex;
`
const FpWrapper = styled.div`
  text-align: center;
  padding: ${space[16]} 0;
  margin-bottom: ${space[32]};
  color: ${color.lightForeground};
  background-color: ${color.brand};
  box-shadow: ${shadow.strong};
`

export const Title = styled(H1)`
  color: ${color.lightForeground};
  @media ${device.tablet} {
    font-size: 3.5rem;
  }
`

const Detail = styled(H5)`
  color: ${color.lightForeground};
`

const CoverDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space[16]};
  width: 100%;
`

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <FpWrapper>
        <TicketSwap size={64} />
        <Title>Ticketswap challenger</Title>
      </FpWrapper>
    )
  }

  if (page === 'search') {
    return (
      <Wrapper>
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
      </Wrapper>
    )
  }

  // Function that converts the new Date() to more readable format (e.g. 03 09 2021). Used for the "Datum" heading.
  function convertDate(inputFormat) {
    const d = new Date(inputFormat)
    function pad(s) {
      return s < 10 ? '0' + s : s
    }
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join(' ')
  }

  return (
    <Wrapper>
      <SolarCover imageUrl={imageUrl} alt={`An image of the ${name} event.`}>
        <CoverDetailsWrapper>
          <TicketSwap size={64} />
          <DetailsWrapper>
            <Title>{name}</Title>
            <Detail>{location}</Detail>
            <Detail>
              {getNumberOfDay(convertDate(date))}
              &nbsp;
              {getNameOfMonth(convertDate(date))}
              &nbsp;
              {date.substring(0, 4)}, begint om {date.substring(11, 16)}
            </Detail>
          </DetailsWrapper>
        </CoverDetailsWrapper>
      </SolarCover>
    </Wrapper>
  )
}

export default Cover
