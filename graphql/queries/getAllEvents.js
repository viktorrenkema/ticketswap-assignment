import { gql } from '@apollo/client'
import event from '~/graphql/fragments/event'

const getAllEvents = gql`
  query getAllEvents($first: Int!) {
    allEvents(first: $first) {
      ...event
    }
  }
  ${event}
`

export default getAllEvents
