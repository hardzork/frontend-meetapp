import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Calendar = styled.div`
  /* max-width: 900px; */
  margin-top: 50px;
  h4 {
    margin-bottom: 10px;
    font-size: 32px;
    color: #1c2938;
  }
`;
export const Meetup = styled.div`
  position: relative;
  min-width: 500px;
  display: flex;
  font-size: 0.875em;
  padding: 0.714286em 1em;
  cursor: pointer;
  opacity: ${props => (props.past ? 0.6 : 1)};
  background: #fff;
  border-radius: 4px;
  color: #1c2938;
  padding: 1em;
  margin-bottom: 10px;
  font-weight: normal;
  text-shadow: none;
  box-shadow: 0px 2px 2px 0px ${darken(0.2, '#ccc')};
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.1, '#fff')};
  }
  ${props =>
    props.past &&
    css`
      box-shadow: none;
      &::after {
        position: absolute;
        right: -4px;
        top: -4px;
        padding: 0;
        width: 70px;
        height: 15px;
        background: #d04925;
        /* text-align: right; */
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font: 0.714286em 'Roboto', sans-serif;
        font-weight: bold;
        font-style: italic;
        content: 'Encerrado';
        border-radius: 4px;
        opacity: 0.8;
        box-shadow: 0px 2px 2px 0px ${darken(0.2, '#ccc')};
      }
    `}
`;
export const Description = styled.div``;

export const Time = styled.div`
  width: 6em;
  font-size: 0.8em;
  line-height: 2;
  min-height: 3.2em;
  opacity: 0.7;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const Divisor = styled.div`
  background: #1c2938;
  width: 3.5px;
  margin: -0.285714em 0.714286em;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
`;

export const Title = styled.div`
  display: block;
  line-height: 1.7;
  font-weight: 600;
`;
export const Place = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  opacity: 0.7;
  margin-top: 4px;
  font: 0.714286em 'Roboto', sans-serif;
`;
