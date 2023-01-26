import { Icar } from '../types';

async function getCar(id: number): Promise<Icar> {
  return await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'GET',
  }).then((res) => res.json());
}

export default getCar;
