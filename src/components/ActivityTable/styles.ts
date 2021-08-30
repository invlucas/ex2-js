import styled from 'styled-components';

export const Container = styled.div`
  table {
    margin-top: 2rem;
    background-color: #1d1d21;
    width: 100%;
    color: white;
    border-collapse: collapse;
    border: 2px solid white;
  }
`;

export const Thead = styled.thead`
  color: #4b4d63;

  tr {
    border: 0.5px solid rgba(255, 255, 255, 0.06);

    th {
      vertical-align: bottom;
      text-align: center;
      padding: 0.8rem 1.2rem;
      font-weight: 700;
      font-size: 0.875rem;
      max-width: 4rem;

      cursor: pointer;
    }
  }
`;

export const Tbody = styled.tbody`
  td {
    align-content: center;
    text-align: center;
    padding: 0.875rem 1rem;
    color: #eeeef2;
  }
`;
