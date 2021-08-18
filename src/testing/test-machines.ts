import { Machine } from '../interfaces/machine';

/** return fresh array of test heroes */
export function getTestMachines(): Machine[] {
  return [
    {id: 1, name: '', cores: 1, frequency: 1, ram: 1 , selected: false},
    {id: 2, name: '', cores: 2, frequency: 2, ram: 2 , selected: false}
]
}
