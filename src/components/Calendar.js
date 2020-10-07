import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {INITIAL_EVENTS, createEventId } from  './event-utils';

export default class Calendar extends React.Component{
state = {
  currentEvents: [],
}

  render() {
    return (
      <React.Fragment>
    <div className="calendar">
      <FullCalendar plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
    initialView="timeGridWeek"
    editable={true}
    selectable={true}
    selectMirror={true}
    dayMaxEvents={true}
    initialEvents={INITIAL_EVENTS}
    select={this.handleDateSelect}
    eventContent={getEvent}
    eventClick={this.handleEventClick}
    eventsSet={this.handleEvents} />
    </div>  
    </React.Fragment>
    );
  }
  handleDateSelect = (selectInfo) => {
    let title = prompt('Enter your name.')
    let calendarApi = selectInfo.view.calendar
    calendarApi.unselect();
    if(title) {
      calendarApi.addEvent({
        id:createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: false,
        
      })
    }
  }

  handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete this entry '${clickInfo.event.title}`)) {
      clickInfo.event.remove()
    }
  }
  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }
}
function getEvent (eventInfo) {
  return (
    <React.Fragment>
      {eventInfo.event.title}
      {eventInfo.event.timeText}
    </React.Fragment>
  )
}