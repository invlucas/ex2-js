import {
  useMemo,
  createContext,
  useCallback,
  useState,
  useContext,
} from 'react';

import { v4 as uuidv4 } from 'uuid';

interface Workout {
  id: string;
  timeSpent: string;
  type: string;
  dateTime: string;
}

type WorkoutInput = Omit<Workout, 'id'>;

interface WorkoutsContextData {
  workouts: Workout[];
  totalTimeSpent: number;
  removeWorkout: (id: string) => void;
  createWorkout: (workout: WorkoutInput) => void;
}

const WorkoutsContext = createContext<WorkoutsContextData>(
  {} as WorkoutsContextData,
);

export const WorkoutsProvider: React.FC = ({ children }) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const createWorkout = useCallback(
    (workoutInput: WorkoutInput) => {
      const workout = {
        id: uuidv4(),
        ...workoutInput,
      };

      setWorkouts([...workouts, workout]);
    },
    [workouts],
  );

  const removeWorkout = useCallback(
    (id: string) => {
      const workoutsUpdated = workouts.filter(workout => workout.id !== id);
      setWorkouts(workoutsUpdated);
    },
    [workouts],
  );

  const totalTimeSpent = useMemo(() => {
    const total = workouts.reduce(function sum(accumulator, workout) {
      return accumulator + Number(workout.timeSpent);
    }, 0);
    return total;
  }, [workouts]);

  return (
    <WorkoutsContext.Provider
      value={{ workouts, createWorkout, removeWorkout, totalTimeSpent }}
    >
      {children}
    </WorkoutsContext.Provider>
  );
};

export function useWorkouts() {
  const context = useContext(WorkoutsContext);

  return context;
}
