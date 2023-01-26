import getWinner from './getWinner';

async function setWinner(id: number, time: number) {
  const winnerInfo = await getWinner(id).then((res) => res);
  if (!winnerInfo.id) {
    return await fetch('http://127.0.0.1:3000/winners', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        wins: 1,
        time,
      }),
    }).then((res) => res.json());
  } else {
    return await fetch(`http://127.0.0.1:3000/winners/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        wins: winnerInfo.wins + 1,
        time: winnerInfo.time > time ? time : winnerInfo.time,
      }),
    }).then((res) => res.json());
  }
}

export default setWinner;
