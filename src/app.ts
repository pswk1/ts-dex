// This checks for type of container, if not HTMLElement, it will look for what comes after the pipe.
const container: HTMLElement | any = document.getElementById('app');

const pokemons: number = 5;

// Interface defines types of what we need.
interface IPokemon {
  id: number;
  name: string;
  image: string;
  type: string;
  abilities: string;
}

// fetchData loops through number of pokemon to retrive and for each object call getPokemon
const fetchData = (): void => {
  for (let i = 1; i <= pokemons; i++) {
    getPokemon(i);
  }
};

// Fetching data may take time. We will use an async function that returns a Promise of type void. The function won't return a value.
const getPokemon = async (id: number): Promise<void> => {
  const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon: any = await data.json();
  const pokemonType: string = pokemon.types
    .map((poke: any) => poke.type.name)
    .join(', ');
  const pokemonAbilities: string = pokemon.abilities
    .map((poke: any) => poke.ability.name)
    .join(', ');

  // Once data is fetched, transformedPokemon, a new object is created that mirrors the Pokemon interface

  const transformedPokemon = {
    id: pokemon.id,
    name: pokemon.name,
    image: `${pokemon.sprites.front_default}`,
    type: pokemonType,
    abilities: pokemonAbilities,
  };

  showPokemon(transformedPokemon);
};

const showPokemon = (pokemon: IPokemon): void => {
  let output: string = `
          <div class="card">
              <span class="card--id">#${pokemon.id}</span>
              <img class="card--image" src=${pokemon.image} alt=${pokemon.name} />
              <h1 class="card--name">${pokemon.name}</h1>
              <span class="card--details">${pokemon.type}</span>
              <span class="card--details">${pokemon.abilities}</span>
          </div>
      `;
  container.innerHTML += output;
};

fetchData();
