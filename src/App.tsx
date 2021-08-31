import { WorkoutsProvider } from './hooks/useWorkouts';
import { Dashboard } from './pages/Dashboard';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <WorkoutsProvider>
        <Dashboard />
        <GlobalStyles />
      </WorkoutsProvider>
    </>
  );
}

export default App;
