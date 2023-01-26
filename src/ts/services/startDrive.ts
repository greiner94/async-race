async function startDrive(id: number): Promise<{ success: true }> {
  return await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, {
    method: 'PATCH',
  }).then((res) => res.json());
}

export default startDrive;
