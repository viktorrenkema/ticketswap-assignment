// Larger libraries
import React from 'react'
import styled from '@emotion/styled'

// Components
import { device, color, Toggle, Text } from '@ticketswap/solar'
import { Alert } from '@ticketswap/solar/icons'
import { FlexColStart, FlexRowCenter } from '~/components/orbit/layout'

const AlertPanel = styled.div`
  border: 1px solid ${color.stroke};
  padding: 1rem;
  border-radius: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const IconWrapper = styled.div`
  align-self: flex-start;
  min-width: 2.5rem;
  min-height: 2.5rem;
  border-radius: 0.5rem;
  background-color: ${color.warning};
  color: ${color.onWarning};
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    width: 3rem;
    height: 3rem;
  }
`

const Details = styled(FlexColStart)`
  margin-left: 1rem;
`

const TicketAlert = () => {
  return (
    <AlertPanel>
      <FlexRowCenter>
        <IconWrapper>
          <Alert></Alert>
        </IconWrapper>
        <Details>
          <Text style={{ fontWeight: '500' }}>Ticket alerts</Text>
          <Text style={{ color: color.foregroundMuted, fontSize: '1rem' }}>
            Ontvang een melding wanneer een ticket beschikbaar komt
          </Text>
        </Details>
      </FlexRowCenter>
      <FlexRowCenter>
        <Toggle adornment={<Alert size={16} />}></Toggle>
      </FlexRowCenter>
    </AlertPanel>
  )
}

export default TicketAlert
