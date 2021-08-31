import {
  InputHTMLAttributes,
  useState,
  useCallback,
  ForwardRefRenderFunction,
  forwardRef,
  useEffect,
} from 'react';

import { FiAlertCircle } from 'react-icons/fi';
import { FieldError } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  error?: FieldError | null;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, icon: Icon, error = null, ...rest },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused} isInvalid={!!error}>
      {Icon && <Icon size={20} />}
      <input
        name={name}
        onFocus={handleInputFocus}
        ref={ref}
        {...rest}
        onBlur={handleInputBlur}
      />
      {error && (
        <Error title={error.message}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export const Input = forwardRef(InputBase);
