import { ButtonHTMLAttributes } from 'react';
import { FiTrash } from 'react-icons/fi';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const DeleteButton = ({ ...rest }: ButtonProps) => {
  return (
    <Container type="button" {...rest}>
      <FiTrash color="white" size={20} />
      Deletar
    </Container>
  );
};
