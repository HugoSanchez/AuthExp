const baseUrl = `http://10.218.4.11:3000`

const signUserUp = (user) => {
  console.log('Hited signUserUp fetch')
  fetch(`${baseUrl}/signup`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ user })
  }).then(res => res.json())
}

const signUserIn = (user) => {
  console.log('Hited signUserIn fetch')
  fetch(`${baseUrl}/signup`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ user })
  }).then(res => res.json())
}

export {
  signUserIn,
  signUserUp
}
