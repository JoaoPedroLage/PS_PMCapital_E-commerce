export default async function getToken(data) {
  const URL = 'http://localhost:3001/login';

  const request = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    mode: 'no-cors',
  });

  const response = await request.json();

  return response;
}
