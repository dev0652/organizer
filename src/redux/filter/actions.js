import { UPD } from './types';

export const updateFilter = filterValue => ({
  type: UPD,
  payload: filterValue,
});
