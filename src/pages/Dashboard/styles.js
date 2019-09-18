import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Calendar = styled.div`
  max-width: 900px;
  margin-top: 50px;
`;
export const Week = styled.div`
  font-size: 1.333334em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background: #f7f7f7;
  color: #1c2938;
  width: 500px;
  padding: 0.5em 0;
`;
export const Day = styled.div`
  padding: 0.5em 1em;
  line-height: 1.5em;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  margin: 0;
  /* border-top: 1px solid #1c2938; */
  /* border-bottom: 1px solid #1c2938; */
  color: #707070;
`;
export const Meetups = styled.div`
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
`;
export const Meetup = styled.div`
  display: flex;
  font-size: 0.875em;
  padding: 0.714286em 1em;
  cursor: pointer;
  opacity: ${props => (props.past ? 0.6 : 1)};
  background: #fff;
  border-bottom: 1px solid #ccc;
  /* border-color: #ccc; */
  color: #1c2938;
  /* margin-top: -1px; */
  padding: 1em;
  font-weight: normal;
  text-shadow: none;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.1, '#fff')};
  }
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
  /* line-height: 1.142857; */
  display: block;
  line-height: 1.7;
  font-weight: 600;
`;
export const Place = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  opacity: 0.7;
  font: 0.714286em 'Roboto', sans-serif;
`;
