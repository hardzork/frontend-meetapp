import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { utcToZonedTime } from 'date-fns-tz';
import { Form, Input } from '@rocketseat/unform';
import { MdSave } from 'react-icons/md';
import * as Yup from 'yup';
import DatePicker, { registerLocale } from 'react-datepicker';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import Banner from '../Banner';

import { Container } from './styles';

const schema = Yup.object().shape({
  file_id: Yup.number()
    .transform(value => (!value ? undefined : value))
    .required('Banner is required'),
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  location: Yup.string().required('Location is required'),
});

registerLocale('pt-br', ptBR);

export default function Edit({ match }) {
  const [id] = useState(match.params.id);
  const [meetup, setMeetup] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    async function loadInfo() {
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
      setStartDate(utcToZonedTime(data.date, timezone));
    }
    loadInfo();
  }, [id]);

  async function handleSubmit(data) {
    const { title, description, location, file_id } = data;

    await api.put(`meetups/${id}`, {
      title,
      description,
      location,
      date: startDate,
      file_id,
    });
    history.push(`/meetups/${id}/details`);
    toast.success('Meetup atualizado com sucesso.');
  }

  return (
    <Container>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        <Banner name="file_id" />
        <Input name="title" placeholder="Título" />
        <Input name="description" placeholder="Descricao" />
        <DatePicker
          locale="pt-br"
          selected={startDate}
          onChange={date => setStartDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="dd 'de' MMMM 'de' yyyy 'às' HH:mm"
        />
        <Input name="location" placeholder="Local" />
        <button type="submit">
          <MdSave size={20} color="#fff" />
          Salvar alteração
        </button>
      </Form>
    </Container>
  );
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
