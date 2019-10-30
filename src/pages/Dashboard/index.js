import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { MdPlace } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import {
  Container,
  Calendar,
  Meetup,
  Time,
  Description,
  Title,
  Place,
  Divisor,
} from './styles';

export default function Dashboard() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    async function loadSchedule() {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const response = await api.get('organizing');

      const data = response.data.map(meetup => {
        return {
          dateFormatted: format(
            utcToZonedTime(meetup.date, timezone),
            'dd/MM/yyyy'
          ),
          hour: format(utcToZonedTime(meetup.date, timezone), 'HH:mm'),
          ...meetup,
        };
      });
      setMeetings(data);
    }
    loadSchedule();
  }, []);

  return (
    <Container>
      <Calendar>
        <h4>Meus Meetups</h4>
        {meetings.map(meetup => (
          <Link to={`/meetups/${meetup.id}/details`}>
            <Meetup past={meetup.past}>
              <Time>
                <div>{meetup.dateFormatted}</div>
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
      </Calendar>
    </Container>
  );
}
