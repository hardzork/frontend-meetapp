import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo-header.png';
import { Container, Content, Profile } from './styles';

import history from '~/services/history';

export default function Header() {
  const profile = useSelector(state => {
    const [firstName] = state.user.profile.name.split(' ');
    return {
      firstName,
      ...state.user.profile,
    };
  });
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }

  function handleNewMeetup() {
    history.push('/meetups/new');
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="MeetApp" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <button type="button" onClick={handleNewMeetup}>
            NOVO MEETUP
          </button>
          <Profile>
            <div>
              <Link to="/profile">Olá, {profile.firstName}</Link>
              <div>
                <button type="button" onClick={handleSignOut}>
                  Sair
                </button>
              </div>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
