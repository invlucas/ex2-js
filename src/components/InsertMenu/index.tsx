import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiCalendar, FiClock } from 'react-icons/fi';
import { Container, FormContent } from './styles';
import { Input } from '../Input';

interface InputMenuFormData {
  time: string;
  sport: string;
  date: string;
}

export const InsertMenu = () => {
  const registerWorkoutLogFormSchema = yup.object().shape({
    time: yup
      .number()
      .min(1, 'Você deve gastar no mínimo 1 minuto!')
      .transform(value => (Number.isNaN(value) ? undefined : value))
      .required('Insira o tempo gasto!'),
    date: yup.string().required('Selecione uma data!'),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(registerWorkoutLogFormSchema),
  });

  const { errors } = formState;

  const handleCreateLog = (data: InputMenuFormData) => {
    console.log(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleCreateLog)}>
        <h3> Insert an item</h3>
        <FormContent>
          <Input
            icon={FiClock}
            type="number"
            placeholder="Time spent"
            min={0}
            error={errors.time}
            {...register('time')}
          />
          <select {...register('sport')}>
            <option>Run</option>
            <option>Swim</option>
            <option>Bike</option>
          </select>
          <Input
            icon={FiCalendar}
            type="date"
            error={errors.date}
            {...register('date')}
          />
          <button type="submit">Add</button>
        </FormContent>
      </form>
    </Container>
  );
};
