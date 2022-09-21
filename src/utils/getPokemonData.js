const getPokemonData = (api) => {
  return fetch(api)
    .then((res) => res.json())
}

export default getPokemonData;