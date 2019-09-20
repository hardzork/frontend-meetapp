import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import {
  Container,
  Header,
  Banner,
  EditButton,
  DeleteButton,
  Desciption,
  Info,
} from './styles';

export default function Details({ match }) {
  return (
    <Container>
      <Header>
        <span>Título do Meetup selecionado</span>
        <div>
          <EditButton>
            <MdEdit color="#fff" />
            Editar
          </EditButton>
          <DeleteButton>
            <MdDeleteForever color="#fff" />
            Cancelar
          </DeleteButton>
        </div>
      </Header>
      <Banner>
        <img
          src="https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/shake-up-sales-meeting-og.jpg"
          alt="Título do Meetup selecionado"
        />
      </Banner>
      <Desciption>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Desciption>
      <Info>
        <span>Data do evento</span>
        <span>Local do evento</span>
      </Info>
    </Container>
  );
}

Details.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
