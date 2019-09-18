import React, { useEffect, useState, useMemo } from 'react';
import { format, startOfWeek, endOfWeek, startOfDay } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt-BR';
import { MdArrowBack, MdArrowForward, MdPlace } from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  Calendar,
  Week,
  Day,
  Meetup,
  Time,
  Description,
  Title,
  Place,
  Divisor,
  Meetups,
} from './styles';

export default function Dashboard() {
  const [startDate, setStartDate] = useState(
    startOfWeek(startOfDay(new Date()))
  );
  const [endDate, setEndDate] = useState(endOfWeek(startOfDay(new Date())));
  const [meetings, setMeetings] = useState([]);
  const startDateFormatted = useMemo(
    () => format(startDate, 'dd MMMM yyyy', { locale: pt }),
    [startDate]
  );
  const endDateFormatted = useMemo(
    () => format(endDate, 'dd MMMM yyyy', { locale: pt }),
    [endDate]
  );

  useEffect(() => {
    async function loadSchedule() {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      // const start = utcToZonedTime(startDate, timezone);
      // const end = utcToZonedTime(endDate, timezone);

      const response = await api.get('organizing');

      const data = response.data.map(day => {
        const meetups = day.meetups.map(meet => {
          return {
            hour: format(utcToZonedTime(meet.date, timezone), 'HH:mm'),

            ...meet,
          };
        });
        return {
          date: day.date,
          dateFormatted: format(
            utcToZonedTime(day.date, timezone),
            'dd/MM/yyyy'
          ),
          meetups,
        };
      });
      setMeetings(data);
    }
    loadSchedule();
  }, [endDate, startDate]);

  // function handleViewMeetup(args) {
  //   console.tron.log(args);
  // }

  // function handleNextWeek() {}

  return (
    <Container>
      <Calendar>
        <Week>
          <MdArrowBack size={32} color="#1c2938" />
          <strong>
            {startDateFormatted} - {endDateFormatted}
          </strong>
          <MdArrowForward size={32} color="#1c2938" />
        </Week>
        {meetings.map((day, i) => (
          <>
            <Day key={String(i)}>
              <strong>{day.dateFormatted}</strong>
            </Day>
            <Meetups>
              {day.meetups.map(meetup => (
                <Meetup past={meetup.past}>
                  <Time>
                    <div>{meetup.hour}</div>
                  </Time>
                  <Divisor />
                  <Description>
                    <Title>
                      <span>{meetup.title}</span>
                    </Title>
                    <Place>
                      <MdPlace />
                      <span>{meetup.location}</span>
                    </Place>
                  </Description>
                </Meetup>
              ))}
            </Meetups>
          </>
        ))}
      </Calendar>
    </Container>
  );
}
