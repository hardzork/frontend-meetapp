import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  margin-top: 50px;
  margin-bottom: 10px;
  span {
    font-size: 28px;
    font-weight: bold;
    color: #1c2938;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
// export const Actions = styled.div``;
export const EditButton = styled.button`
  margin: 5px 0 0;
  font: 14px 'Roboto', sans-serif !important;
  height: 40px;
  width: 100px;
  margin-right: 10px;
  background: #696464;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${lighten(0.1, '#696464')};
  }
  svg {
    margin-right: 5px;
    vertical-align: middle;
  }
`;
export const DeleteButton = styled.button`
  margin: 5px 0 0;
  font: 14px 'Roboto', sans-serif !important;
  height: 40px;
  width: 100px;
  background: #d04925;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
  &:hover {
    background: ${lighten(0.1, '#d04925')};
  }
  svg {
    margin-right: 5px;
    vertical-align: middle;
  }
`;
export const Banner = styled.div`
  img {
    max-width: 900px;
    max-height: 400px;
  }
`;
export const Desciption = styled.div``;
export const Info = styled.div``;
