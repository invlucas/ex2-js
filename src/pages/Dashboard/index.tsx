import { ActivityTable } from '../../components/ActivityTable';
import { InsertMenu } from '../../components/InsertMenu';
import { useWorkouts } from '../../hooks/useWorkouts';
import { Container } from './styles';

export const Dashboard = () => {
  const { totalTimeSpent } = useWorkouts();

  return (
    <Container>
      <h1>Workout Log</h1>
      <InsertMenu />
      <ActivityTable />
      <strong>{totalTimeSpent} hours spent </strong>
    </Container>
  );
};
