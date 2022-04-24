// Larger libraries
import React from 'react'
import propTypes from 'prop-types'

// Components
import { H2, Button, Alert, AlertVariant, Text } from '@ticketswap/solar'
import TicketAlert from '~/components/TicketAlert'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'
import {
  MarginBottom16,
  MarginBottom40,
  FlexColStart,
  Container,
  HeadingWrapper,
} from '~/components/orbit/layout'

// Utilities
import { initializeApollo, addApolloState } from '~/graphql/client'
import getEvent from '~/graphql/queries/getEvent'

const Event = props => {
  const { name, date, location, imageUrl, description } = props.data.data.event

  return (
    <>
      <Cover name={name} date={date} imageUrl={imageUrl} location={location} />
      <Container>
        <Alert
          title="Let op"
          variant={AlertVariant.warning}
          action={{
            label: 'Activeer alert',
            onClick: () => window.alert('Alert geactiveerd'),
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
        <MarginBottom40>
          <TicketAlert />
        </MarginBottom40>
        <HeadingWrapper>
          <H2>Informatie</H2>
        </HeadingWrapper>
        {description && description}
        {!description && (
          <FlexColStart>
            <MarginBottom16>
              <Text>
                We hebben een probleem met het ophalen van informatie voor dit
                evenement. Iemand is al bezig om dit op te lossen, maar bij
                vragen kan je direct contact met ons op nemen met de knop
                hieronder.
              </Text>
            </MarginBottom16>
            <Button size={'large'} variant={'primary'}>
              Neem contact op
            </Button>
          </FlexColStart>
        )}
      </Container>
      <Footer />
    </>
  )
}

export const getServerSideProps = async ({ params }) => {
  const client = initializeApollo()

  const data = await client.query({
    query: getEvent,
    variables: {
      id: parseFloat(params.id),
    },
  })

  return addApolloState(client, {
    props: {
      data,
    },
  })
}

export default Event

Event.propTypes = {
  name: propTypes.string,
  date: propTypes.string,
  location: propTypes.string,
  imageUrl: propTypes.string,
  description: propTypes.string,
  props: propTypes.object,
  data: propTypes.object,
}
