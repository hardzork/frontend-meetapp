import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #1c2938;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      font-weight: bold;
      color: #d7d1c9;
    }
  }

  aside {
    display: flex;
    align-items: center;

    button {
      display: block;
      font-weight: bold;
      color: #d7d1c9;
      background: green;
      border: none;
      height: 30px;
      padding: 0 5px;
      border-radius: 4px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.1, 'green')};
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;
    a {
      display: block;
      color: #d7d1c9;
    }
    div {
      display: flex;
      justify-content: flex-end;
      margin: 0;
      button {
        margin-top: 2px;
        font-size: 12px;
        color: #d04925;
        border: 0;
        background: none;
      }
    }
  }
  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;
