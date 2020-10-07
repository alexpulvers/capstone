let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, '')

export const INITIAL_EVENTS = [
  {
    id:createEventId(),
    title: 'Closed',
    start: todayStr + 'T00:00:00',
    end: todayStr + 'T09:59:00'
  },
  {
    id:createEventId(),
    title:'Open',
    start: todayStr + 'T10:00:00'
  }
]

export function createEventId(){
  return String(eventGuid++)
};