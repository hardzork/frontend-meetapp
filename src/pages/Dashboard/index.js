import React, { useEffect, useState } from 'react';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt-BR';

import api from '~/services/api';

import { Container, Calendar } from './styles';

export default function Dashboard() {
  const [meetings, setMeetings] = useState([]);
  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('organizing');
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const data = response.data.map(meetup => {
        const dateTimezoned = utcToZonedTime(meetup.date, timezone);
        return {
          id: meetup.id,
          title: meetup.title,
          date: dateTimezoned.toISOString(),
        };
      });
      setMeetings(data);
    }
    loadSchedule();
  }, []);

  // function handleViewMeetup(args) {
  //   console.tron.log(args);
  // }

  return (
    <Container>
      <Calendar />
    </Container>
  );
}
