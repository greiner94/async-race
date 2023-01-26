async function updateCar(id: number, name: string, color: string) {
  return await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      color,
    }),
  }).then((res) => res.json());
}

export default updateCar;
