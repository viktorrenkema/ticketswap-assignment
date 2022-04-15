import { gql } from '@apollo/client'
import event from '~/graphql/fragments/event'

const getAllEvents = gql`
  query getAllEvents($first: Int!, $nameInput: String) {
    allEvents(first: $first, name: $nameInput) {
      ...event
    }
  }
  ${event}
`

export default getAllEvents
