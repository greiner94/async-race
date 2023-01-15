async function startEngine(id: number, status: 'started' | 'stopped') {
  return await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
    method: 'PATCH',
  }).then((res) => res.json());
}

export default startEngine;
