import { IWinnerResponse } from '../../types';

async function getAllWinners(
  sortType: 'wins' | 'time' = 'wins',
  sortOrder: 'ASC' | 'DESC' = 'ASC'
): Promise<IWinnerResponse[]> {
  return await fetch(`http://127.0.0.1:3000/winners?_sort=${sortType}&_order=${sortOrder}`).then((res) => res.json());
}

export default getAllWinners;
