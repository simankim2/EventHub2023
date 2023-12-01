import { AppEvent } from "../../app/types/events";
import EventListItem from "./dashboard/EventListItem";

type Props = {
  events: AppEvent[]
  selectEvent: (event: AppEvent) => void
  deleteEvent: (eventId: string) => void
}

export default function EventList({events, selectEvent, deleteEvent}: Props) {
  return (
    <>
      {events.map((event: any) => (
        <EventListItem
          key={event.id} event={event}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  )
}
