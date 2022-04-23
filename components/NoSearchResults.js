// Larger libraries
import React from 'react'
import styled from '@emotion/styled'

// Components
import { H3, H4, H5, device, color, Text, Button } from '@ticketswap/solar'
import { Calendar } from '@ticketswap/solar/icons'
import { FlexColCenter, FlexColStart } from '~/components/orbit/layout'

const Details = styled(FlexColStart)`
  margin-left: 1rem;
`

const PaddedText = styled(Text)`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  text-align: center;
`

const NoSearchResults = props => {
  return (
    <FlexColCenter>
      <H3>Geen resultaten gevonden</H3>
      <PaddedText style={{ color: color.foregroundMuted, fontSize: '1rem' }}>
        Probeer opnieuw te zoeken op evenementen, locaties en steden
      </PaddedText>
      <Button
        leftAdornment={<Calendar size={24} />}
        size={'large'}
        variant={'primary'}
      >
        Neem contact op
      </Button>
    </FlexColCenter>
  )
}

export default NoSearchResults
