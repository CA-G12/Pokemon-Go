const getPokemon = (name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
      console.log(res);
      if (res.status === 404) throw new Error('pokemon not found')
      if (res.status !== 200) throw new Error('something went wrong!!')
      else return res.json()
    })
}

export default getPokemon;