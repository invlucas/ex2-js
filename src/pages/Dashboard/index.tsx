import { InsertMenu } from '../../components/InsertMenu';
import { Container } from './styles';

export const Dashboard = () => {
  return (
    <Container>
      <h1>Workout Log</h1>
      <InsertMenu />
    </Container>
  );
};
