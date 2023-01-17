import { Icar } from '../types';

async function getAllCars(): Promise<Icar[]> {
  return await fetch('http://127.0.0.1:3000/garage').then((res) => res.json());
}

export default getAllCars;
