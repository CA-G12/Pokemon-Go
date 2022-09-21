const getAllPokemon = () => {
  return fetch(`https://pokeapi.co/api/v2/pokemon`)
    .then((res) => res.json())
    .then((data) => {
      const urls = data.results.map((poke) => fetch(poke.url).then((res) => res.json()));
      return Promise.all(urls)
        .then((result) => result)
    })
}

export default getAllPokemon;