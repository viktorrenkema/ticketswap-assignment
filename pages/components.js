import React from 'react'
import Container from '~/components/Container'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'
import {
  Alert,
  Accordion,
  Banner,
  StarRating,
  CardCarousel,
  Card,
  ContentDialog,
  Pill,
  Collapsible,
  Toggle,
  Checkbox,
  Select,
  DateInput,
  Panel,
  PanelBody,
  PanelContent,
  H4,
  PanelText,
  BaseButton,
} from '@ticketswap/solar'
import styled from '@emotion/styled'
import PopularEvents from '~/components/PopularEvents'
import Link from 'next/link'

const Home = () => (
  <>
    <Cover page="frontpage" />
    <Container>
      <Alert></Alert>
      <Accordion></Accordion>
      <Banner></Banner>
      <StarRating></StarRating>
      {/* <CardCarousel></CardCarousel> */}
      <Card></Card>
      {/* <ContentDialog></ContentDialog> */}

      <Pill></Pill>
      <Collapsible></Collapsible>
      <Toggle></Toggle>
      <Checkbox></Checkbox>
      {/* <Select></Select> */}
      {/* <DateInput></DateInput> */}
    </Container>
    <Panel>
      <PanelContent>
        <PanelBody>
          <H4>Title</H4>
          <PanelText>Lorem ipsum dolor sit amet</PanelText>
          <BaseButton>Edit</BaseButton>
        </PanelBody>
      </PanelContent>
    </Panel>
    <Footer />
  </>
)

export default Home
