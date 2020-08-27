import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";

import { Navbar } from "components/ui/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { messages } from "helpers/calendar-messages";

moment.locale("es");

const localizer = momentLocalizer(moment);
const myEventsList = [
  {
    title: "Event #1",
    start: moment().toDate(),
    end: moment().add(2, "hour").toDate(),
  },
];

export const CalendarScreen = () => {
  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
      />
    </div>
  );
};
