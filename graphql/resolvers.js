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

      let lowerCaseName

      if (name) {
        lowerCaseName = name.toLowerCase()

        let filteredEvents = events.filter(
          event =>
            // With (event.name || '') we add a check whether event.name exists (not null), otherwise the filter method will trip up and return nothing
            (event.name || '').toLowerCase().indexOf(lowerCaseName) > -1 ||
            (event.location || '').toLowerCase().indexOf(lowerCaseName) > -1 ||
            (event.date || '').toLowerCase().indexOf(lowerCaseName) > -1
        )

        return filteredEvents
      } else return events
    },
  },
}
