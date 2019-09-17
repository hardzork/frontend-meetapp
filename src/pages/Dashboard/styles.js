import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Calendar = styled.div`
  max-width: 900px;
  height: 500px;
  margin-top: 50px;
  .fc-today {
    /* background: #efdcc1 !important; */
    background: #d7d1c9 !important;
  }
  .fc-event,
  .fc-event-dot {
    background-color: #1c2938;
  }
  .fc-event {
    position: relative;
    display: block;
    font-size: 0.85em;
    line-height: 1.4;
    border-radius: 3px;
    border: 1px solid #1c2938;
  }
  div {
    table {
      border-radius: 10px;
      background-color: #f2ece9;
    }
  }
`;
