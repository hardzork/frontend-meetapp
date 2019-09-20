import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '~/store/modules/auth/actions';

// import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-header.png';
import { Container, Content, Profile } from './styles';

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
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="MeetApp" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          {/* <Notifications /> */}
          <Profile>
            <div>
              <Link to="/profile">Olá, {profile.firstName}</Link>
              {/* <strong>{profile.name}</strong> */}
              <div>
                {/* <Link to="/profile">Meu Perfil</Link> */}
                <button type="button" onClick={handleSignOut}>
                  Sair
                </button>
              </div>
            </div>
            {/* <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt={profile.name}
            /> */}
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
