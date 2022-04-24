// Larger libraries
import React from 'react'
import styled from '@emotion/styled'

// Components
import { H3, color, Text, Button } from '@ticketswap/solar'
import { Calendar } from '@ticketswap/solar/icons'
import { FlexColCenter } from '~/components/orbit/layout'

const PaddedText = styled(Text)`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  text-align: center;
  color: ${color.foregroundMuted};
`

const EmptyStateWrapper = styled(FlexColCenter)`
  grid-column: 1 / 4;
`

const EmptyState = () => {
  return (
    <EmptyStateWrapper>
      <H3>Geen resultaten gevonden</H3>
      <PaddedText>
        Probeer opnieuw te zoeken op evenementen, locaties en steden
      </PaddedText>
      <Button
        leftAdornment={<Calendar size={24} />}
        size={'large'}
        variant={'primary'}
      >
        Neem contact op
      </Button>
    </EmptyStateWrapper>
  )
}

export default EmptyState
