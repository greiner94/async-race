async function deleteWinner(id: number) {
  return await fetch(`http://127.0.0.1:3000/winners/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json());
}

export default deleteWinner;
