import { IWinnerResponse } from '../../types';

async function getWinner(id: number): Promise<IWinnerResponse> {
  return await fetch(`http://127.0.0.1:3000/winners/${id}`).then((res) => res.json());
}

export default getWinner;
