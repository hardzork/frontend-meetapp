import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
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

export const Title = styled.div`
  display: flex !important;
  justify-content: flex-start !important;
  align-items: initial !important;
  flex-direction: column !important;
  span {
    font-size: 28px !important;
    font-weight: bold !important;
    color: #1c2938 !important;
  }
  strong {
    font-size: 12px !important;
    color: #767676 !important;
    font-weight: normal;
    font-style: italic;
  }
`;

export const EditButton = styled.button.attrs(props => ({
  disabled: props.past,
}))`
  margin: 5px 0 0;
  font: 14px 'Roboto', sans-serif !important;
  height: 40px;
  width: 100px;
  margin-right: 10px;
  background: #207561;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
  &:hover {
    background: ${lighten(0.1, '#207561')};
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  svg {
    margin-right: 5px;
    vertical-align: middle;
  }
`;
export const DeleteButton = styled.button.attrs(props => ({
  disabled: props.past,
}))`
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
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  svg {
    margin-right: 5px;
    vertical-align: middle;
  }
`;
export const Banner = styled.div`
  img {
    width: 940px;
    max-height: 300px;
  }
`;
export const Desciption = styled.div`
  width: 900px;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  margin-top: 5px;
  p {
    text-align: justify;
  }
`;
export const Info = styled.div`
  width: 900px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 30px;
  span {
    color: #696464;
    vertical-align: middle;
    svg {
      vertical-align: middle;
      margin-right: 5px;
    }
    & + span {
      /* margin-left: 50px; */
      vertical-align: middle;
      svg {
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  }
`;
