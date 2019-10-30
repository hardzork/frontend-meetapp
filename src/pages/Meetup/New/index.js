import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { MdSave } from 'react-icons/md';

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

export default function New() {
  const [startDate, setStartDate] = useState(new Date());

  async function handleSubmit(data) {
    const { title, description, location, file_id } = data;

    const response = await api.post('meetups', {
      title,
      description,
      location,
      date: startDate,
      file_id,
    });
    const { id } = response.data;
    history.push(`/meetups/${id}/details`);
    toast.success('Meetup criado com sucesso.');
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
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
          Criar Meetup
        </button>
      </Form>
    </Container>
  );
}
