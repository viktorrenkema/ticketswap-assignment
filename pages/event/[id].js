import React from 'react'
import Container from '~/components/Container'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'
import {
  H2,
  Button,
  space,
  color,
  Alert,
  AlertVariant,
} from '@ticketswap/solar'
import { useQuery } from '@apollo/client'
import getEvent from '~/graphql/queries/getEvent'
import styled from '@emotion/styled'
import { HeadingWrapper } from '~/pages/index'
import TicketAlert from '~/components/TicketAlert'

const Margin = styled.section`
  margin-bottom: ${space[40]};
`

const Event = ({ eventId }) => {
  const { data, loading } = useQuery(getEvent, {
    variables: {
      id: parseInt(eventId),
    },
  })

  if (loading || !data.event) return null

  const { name, date, location, imageUrl, description } = data.event

  return (
    <>
      <Cover name={name} date={date} imageUrl={imageUrl} location={location} />
      <Container>
        <Alert
          title="Let op"
          variant={AlertVariant.warning}
          action={{
            label: 'Activeer alert',
            onClick: () => console.log('Alert geactiveerd'),
          }}
        >
          Dit evenement heeft momenteel geen beschikbare kaarten. Zet een alert
          aan om op de hoogte te worden gehouden.
        </Alert>
        <HeadingWrapper>
          <H2>Tickets</H2>
          <Button size={'small'} variant={'primary'}>
            Verkoop tickets
          </Button>
        </HeadingWrapper>
        <Margin>
          <TicketAlert></TicketAlert>
        </Margin>
        <HeadingWrapper>
          <H2>Informatie</H2>
        </HeadingWrapper>
        <p>{description}</p>
      </Container>
      <Footer />
    </>
  )
}

export const getServerSideProps = async ({ params }) => {
  console.log('params', params)
  return {
    props: {
      eventId: params.id,
    },
  }
}

export default Event
