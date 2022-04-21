import React from 'react'
import Container from '~/components/Container'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'
import {
  Tabs,
  TabList,
  TabPanel,
  Tab,
  TabPanels,
  H3,
  space,
  Alert,
  AlertVariant,
} from '@ticketswap/solar'
import { useQuery } from '@apollo/client'
import getEvent from '~/graphql/queries/getEvent'
import styled from '@emotion/styled'

const TabContentContainer = styled.div`
  /* padding: 0 ${space[16]}; */
  margin: ${space[16]} auto;
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
        <Tabs>
          <TabList>
            <Tab>
              <H3>Informatie</H3>
            </Tab>
            <Tab>
              <H3>Tickets</H3>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TabContentContainer>
                <Alert
                  variant={AlertVariant.warning}
                  action={{
                    label: 'Activeer alert',
                    onClick: () => console.log('Alert geactiveerd'),
                  }}
                >
                  Dit evenement heeft momenteel geen beschikbare kaarten. Zet
                  een alert aan om op de hoogte te worden gehouden.
                </Alert>
                <p>{description}</p>
              </TabContentContainer>
            </TabPanel>
            <TabPanel>
              <TabContentContainer>
                <Alert
                  variant={AlertVariant.warning}
                  action={{
                    label: 'Activeer alert',
                    onClick: () => console.log('Alert geactiveerd'),
                  }}
                >
                  Dit evenement heeft momenteel geen beschikbare kaarten. Zet
                  een alert aan om op de hoogte te worden gehouden.
                </Alert>
              </TabContentContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
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
