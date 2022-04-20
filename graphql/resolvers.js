import { events } from './mock-data'
import _ from 'lodash'

export const resolvers = {
  Query: {
    popularEvents(_parent, args, _context, _info) {
      const { first } = args

      return events.slice(0, first)
    },

    event(_parent, args, _context, _info) {
      const { id } = args

      return events.find(event => event.id === id) || null
    },

    allEvents(_parent, args, _context, _info) {
      const { name } = args

      if (name) {
        var filteredEvents = _.filter(events, event => {
          return event.name.indexOf(name) > -1
        })

        return filteredEvents
      } else return events
    },
  },
}
