// Larger libraries
import styled from '@emotion/styled'

// Components
import { space, sizes, device, color, shadow } from '@ticketswap/solar'

const MarginBottom16 = styled.div`
  margin-bottom: ${space[16]};
`

const MarginBottom40 = styled.div`
  margin-bottom: ${space[40]};
`

const FlexColStart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const FlexColCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FlexRowCenter = styled.div`
  display: flex;
  align-items: center;
`

const Container = styled.main`
  padding: 0 ${space[16]};
  margin: ${space[16]} auto;
  max-width: ${sizes.tablet}px;
`

const GridContainer = styled.div`
  display: grid;
  grid-gap: ${space[16]};
  grid-template-columns: repeat(1, 1fr);
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${space[32]};
  margin-bottom: ${space[16]};
`

const CoverContainer = styled.section`
  text-align: center;
  padding: ${space[16]} 0;
  margin-bottom: ${space[32]};
  color: ${color.lightForeground};
  background-color: ${color.brand};
  box-shadow: ${shadow.strong};
`

export {
  MarginBottom16,
  MarginBottom40,
  FlexColStart,
  FlexColCenter,
  FlexRowCenter,
  Container,
  GridContainer,
  HeadingWrapper,
  CoverContainer,
}
