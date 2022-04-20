import { gql } from '@apollo/client'
import event from '~/graphql/fragments/event'

const getAllEvents = gql`
  query getAllEvents($name: String) {
    allEvents(name: $name) {
      ...event
    }
  }
  ${event}
`

export default getAllEvents
