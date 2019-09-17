import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  /* background: linear-gradient(#e0e0e0, #d7d1c9); */
  background: #1c2938;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(255, 255, 255, 0.9);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }

    span {
      color: #d04925;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #696464;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.1, '#696464')};
      }

      div {
        margin: auto;
      }
    }

    a {
      color: #eee;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
