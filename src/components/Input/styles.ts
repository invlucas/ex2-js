import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isInvalid: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 1rem;

  display: flex;
  align-items: center;
  border: 3px solid #121214;

  width: 12rem;
  height: 2rem;
  background: white;
  border-radius: 0.4rem;

  svg {
    color: #d53f8c;
    margin-right: 0.5rem;
  }

  ${props =>
    props.isInvalid &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #f781be;
    `}

  input {
    width: 100%;
    background: transparent;

    border: none;

    color: #121214;

    &::placeholder {
      color: #666360;
    }
  }

  input[type='date']::-webkit-calendar-picker-indicator {
    background-color: transparent;
    padding: 0;
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 16px;
  svg {
    margin: 0px;
  }
  span {
    background-color: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
