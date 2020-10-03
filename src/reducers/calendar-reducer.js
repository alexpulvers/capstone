
 
  export const gapi = window.gapi;
  export const API_KEY = process.env.CALENDAR_API_KEY;
  export const CLIENT_ID = process.env.CALENDAR_CLIENT_ID;
  export const DISCOVERY_DOCS = [process.env.CALDENDAR_DISCOVERY_DOCS];
  export const SCOPES = process.env.CALENDAR_SCOPES;

  // handleCalendarClick = () => {
  //   gapi.load("client:auth2", () => {
  //     console.log("loaded client");

  //     gapi.client.init({
  //       apiKey: API_KEY,
  //       clientId: CLIENT_ID,
  //       discoverDocs: DISCOVERY_DOCS,
  //       scope: SCOPES,
  //     });
  //     gapi.client.load("calendar", 'v3', () => console.log('loaded!'))
     
  //     gapi.auth2.getAuthInstance().signIn().then(() => {
  //       const event = {
  //         'summary': 'Testing',
  //         'location': 'Brewspace',
  //         'description': 'Testing Brewspace with google calendar api',
  //         'start': {
  //           'dateTime': '2020-10-02T16:00:00-16:30:00',
  //           'timeZone': ' America/Los_Angeles'
  //         },
  //         'end': {
  //           'dateTime': '2020-10-02T16:00:00-16:30:00',
  //           'timeZone': ' America/Los_Angeles'
  //         },
  //         'attendees': [
  //           { 'email': 'test@blah.com' },
  //           { 'email': 'bg@asd.com' },
  //         ],
  //         'reminders': {
  //           'useDefault': false,
  //           'overrides': [
  //             {
  //               'method': 'email', 'minutes': 24 * 60
  //             }],
  //         }
  //       }
  //       const request = gapi.client.calendar.events.insert({
  //         'calendarId': 'primary',
  //         'resource': event,
  //       })
  //       request.execute(event => {
  //         window.open(event.htmlLink)
  //       })
  //     })
  //   });
  // }

