const URL = 'https://scandy-back.onrender.com/';

const zapros= 'query{categories{name}}'


 const getData = async (query) => {
  return await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: {},
    }),
  })
    .then((res) => res.json())
    .then((res) => {res.data
console.log(res)
    });
};


getData(zapros)