import { events } from './mock-data'
import _ from 'lodash'

export const resolvers = {
  Query: {
    popularEvents(_parent, args) {
      const { first } = args

      return events.slice(0, first)
    },

    event(_parent, args) {
      const { id } = args

      return events.find(event => event.id === id) || null
    },

    allEvents(_parent, args) {
      const { name } = args

      if (name) {
        let lowerCaseQuery = name.toLowerCase()

        let filteredEvents = _.filter(events, event => {
          return event.name.toLowerCase().indexOf(lowerCaseQuery) > -1
        })

        return filteredEvents
      } else return events
    },
  },
}
