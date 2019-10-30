import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
  align-self: stretch;
  border-radius: 10px;

  label {
    cursor: pointer;
    width: 100%;
    max-height: 26vw;
    overflow: hidden;
    margin-bottom: 10px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      opacity: 0.7;
    }
    input {
      display: none;
    }
  }
`;
