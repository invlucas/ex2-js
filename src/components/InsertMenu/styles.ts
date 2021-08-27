import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  position: relative;
  flex-direction: column;
  margin: 2rem auto;

  align-items: center;
  justify-content: center;

  height: 6rem;
  max-width: 800px;
  width: 100%;
  border: 2px solid white;

  h3 {
    display: block;
    font-size: 1.125rem;
    text-align: center;
    position: absolute;
    width: 150px;
    top: -15%;
    left: 10px;
    background-color: #121214;
    color: #d53f8c;
  }

  form {
    width: 100%;
  }
`;

export const FormContent = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  select {
    width: 20%;
    background: white;
    border: none;
    border-radius: 0.4rem;
    padding: 0.4rem;

    color: #121214;
  }

  button {
    background: #d53f8c;
    width: 7rem;

    border: none;
    border-radius: 0.4rem;
    padding: 0.4rem 1rem;

    font-weight: 700;
    color: white;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
