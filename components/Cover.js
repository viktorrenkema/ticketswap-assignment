import React from 'react'
import { TicketSwap } from '@ticketswap/solar/icons'
import styled from '@emotion/styled'
import {
  space,
  color,
  H1,
  H5,
  Text,
  Image,
  shadow,
  Cover as SolarCover,
} from '@ticketswap/solar'

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

const Title = styled(H1)`
  color: ${color.lightForeground};
`

const Detail = styled(H5)`
  color: ${color.lightForeground};
`

const CoverDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space[16]};
`

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Cover = props => {
  let { name, date, imageUrl = '', location } = props

  if (!name) {
    return (
      <FpWrapper>
        <TicketSwap size={64} />
        <Title>Ticketswap challenger</Title>
      </FpWrapper>
    )
  }

  return (
    <Wrapper>
      <SolarCover
        blurred
        imageUrl={imageUrl}
        alt={`An image of the ${name} event.`}
      >
        <CoverDetailsWrapper>
          <TicketSwap size={64} />
          <Image
            rounded
            style={{ width: '254px', height: '143px' }}
            // The style prop above is a workaround for now. Preferred would be setting Width and height as props directly, but these don't seem to be applied correctly, neither as strings.
            src={imageUrl}
            alt={`An image of the ${name} event.`}
          />
          <DetailsWrapper>
            <Title>{name}</Title>
            <Detail>{location}</Detail>
            <Detail>{new Date(date).toLocaleString()}</Detail>
          </DetailsWrapper>
        </CoverDetailsWrapper>
      </SolarCover>
    </Wrapper>
  )
}

export default Cover
