import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 20px;

  span {
    width: 160px;
    background: #d53f8c;
    padding: 8px;
    border-radius: 4px;

    opacity: 0;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: 500;

    transition: opacity 0.4s;

    &::before {
      content: '';
      border-style: solid;
      border-color: #d53f8c transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
