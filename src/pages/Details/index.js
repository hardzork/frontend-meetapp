import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

import ReactRouterPropTypes from 'react-router-prop-types';
import {
  MdEdit,
  MdDeleteForever,
  MdEvent,
  MdPlace,
  MdUndo,
} from 'react-icons/md';

import api from '~/services/api';
import historyService from '~/services/history';

import {
  Container,
  Header,
  Title,
  Banner,
  GoBackButton,
  EditButton,
  DeleteButton,
  Desciption,
  Info,
} from './styles';

export default function Details({ match, history }) {
  const [id] = useState(match.params.id);
  const [meetup, setMeetup] = useState({ owner: {}, banner: {} });
  useEffect(() => {
    async function loadDetails() {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const response = await api.get(`meetups/${id}`);
      const data = {
        dateFormatted: format(
          utcToZonedTime(response.data.date, timezone),
          'dd/MM/yyyy'
        ),
        hour: format(utcToZonedTime(response.data.date, timezone), 'HH:mm'),
        ...response.data,
      };
      setMeetup(data);
    }
    loadDetails();
  }, [id]);

  function handleGoBackToDashboard() {
    historyService.push('/dashboard', [...history.location.state]);
  }
  return (
    <Container>
      <Header>
        <Title>
          <span>{meetup.title}</span>
          <strong>por {meetup.owner.name}</strong>
        </Title>
        <div>
          <GoBackButton onClick={handleGoBackToDashboard}>
            <MdUndo />
            Voltar
          </GoBackButton>
          <EditButton past={meetup.past}>
            <MdEdit color="#fff" />
            Editar
          </EditButton>
          <DeleteButton past={meetup.past}>
            <MdDeleteForever color="#fff" />
            Cancelar
          </DeleteButton>
        </div>
      </Header>
      <Banner>
        <img src={meetup.banner.url} alt={meetup.title} />
      </Banner>
      <Desciption>
        <p>{meetup.description}</p>
      </Desciption>
      <Info>
        <span>
          <MdEvent size={22} />
          {meetup.dateFormatted} às {meetup.hour}
        </span>
        <span>
          <MdPlace size={22} />
          {meetup.location}
        </span>
      </Info>
    </Container>
  );
}

Details.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};
