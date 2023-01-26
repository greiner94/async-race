async function createCar(carName: string, color: string) {
  return await fetch('http://127.0.0.1:3000/garage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: carName,
      color,
    }),
  }).then((res) => res.json());
}

export default createCar;
