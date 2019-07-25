import studentsReducer from './studentsReducer';
import * as actions from '../actions';

describe('studentsReducer', () => {
  const students = [
    { id: 1, username: 'tiff' },
    { id: 2, username: 'jjb' }
  ];

  it('should return default state', () => {
    const expected = [];
    const result = studentsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should add students to state tree', () => {
    const action = actions.addStudents(students);
    const result = studentsReducer([], action);

    expect(result).toEqual(students);
  });
});
