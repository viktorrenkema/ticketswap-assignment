import { events } from './mock-data'

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
      console.log('args', args)
      // if (name) return _context.db.event.filter(e => e.name == name)
      return events
    },
  },
}
