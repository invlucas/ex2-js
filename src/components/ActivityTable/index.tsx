import { useMemo } from 'react';
import { Column, useTable, useSortBy } from 'react-table';
import { useWorkouts } from '../../hooks/useWorkouts';
import { DeleteButton } from '../DeleteButton';
import { Container, Thead, Tbody } from './styles';

interface Data {
  id: string;
  timeSpent: string;
  type: string;
  dateTime: string;
}

export const ActivityTable = () => {
  const { workouts, removeWorkout } = useWorkouts();

  const columns = useMemo<Column<Data>[]>(
    () => [
      { Header: 'TIME SPENT', accessor: 'timeSpent' },
      { Header: 'TYPE', accessor: 'type' },
      { Header: 'DATE', accessor: 'dateTime' },
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Data>({ columns, data: workouts }, useSortBy);

  return (
    <Container>
      <table {...getTableProps()}>
        <Thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {' '}
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}{' '}
                  </span>
                </th>
              ))}
              <th>ACTIONS</th>
            </tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
                <td>
                  <DeleteButton
                    onClick={() => removeWorkout(row.original.id)}
                  />
                </td>
              </tr>
            );
          })}
        </Tbody>
      </table>
    </Container>
  );
};
