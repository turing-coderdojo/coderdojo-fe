import queries from '../queries';
import * as queryTypes from '../queryTypes';
import { gqlQuery } from '../clientQuery';
import { gqlMutate } from '../clientQuery';

jest.mock('../clientQuery.js');
gqlQuery.mockImplementation(() => {});
gqlMutate.mockImplementation(() => {});

describe('Queries', () => {
  
})