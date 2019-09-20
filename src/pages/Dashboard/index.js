import React, { useEffect, useState, useMemo } from 'react';
import { format, startOfWeek, endOfWeek, startOfDay, addWeeks } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt-BR';
import { MdArrowBack, MdArrowForward, MdPlace } from 'react-icons/md';
import { Link } from 'react-router-dom';

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

      const response = await api.get('organizing', {
        params: { startDate, endDate },
      });

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

  function handleNextWeek() {
    const newDate = addWeeks(endDate, 1);
    setEndDate(endOfWeek(startOfDay(newDate)));
    setStartDate(startOfWeek(startOfDay(newDate)));
  }

  function handlePrevWeek() {
    const newDate = addWeeks(startDate, -1);
    setStartDate(startOfWeek(startOfDay(newDate)));
    setEndDate(endOfWeek(startOfDay(newDate)));
  }

  return (
    <Container>
      <Calendar>
        <Week>
          <button type="button" onClick={handlePrevWeek}>
            <MdArrowBack size={32} color="#1c2938" />
          </button>
          <strong>
            {startDateFormatted} - {endDateFormatted}
          </strong>
          <button type="button" onClick={handleNextWeek}>
            <MdArrowForward size={32} color="#1c2938" />
          </button>
        </Week>
        {meetings.map((day, i) => (
          <>
            <Day key={String(i)}>
              <strong>{day.dateFormatted}</strong>
            </Day>
            <Meetups>
              {day.meetups.map(meetup => (
                <Link to={`/details/${meetup.id}`}>
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
                </Link>
              ))}
            </Meetups>
          </>
        ))}
      </Calendar>
    </Container>
  );
}
