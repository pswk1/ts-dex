// This checks for type of container, if not HTMLElement, it will look for what comes after the pipe.
const container: HTMLElement | any = document.getElementById('app');

const pokemons: number = 151;

// Interface defines types of what we need.
interface IPokemon {
	id: number;
	name: string;
	image: string;
	type: string;
	abilities: string;
}

// fetchData loops through number of pokemon to retrive and for each object call getPokemon
const getKanto = (): void => {
	for (let i = 1; i <= pokemons; i++) {
		getPokemon(i);
	}
};

let kantoBtn: HTMLElement | any = document.getElementById('kanto');
kantoBtn.addEventListener('click', (e: Event) => getRegion(1, 151));

let johtoBtn: HTMLElement | any = document.getElementById('johto');
johtoBtn.addEventListener('click', (e: Event) => getRegion(152, 251));

let hoennBtn: HTMLElement | any = document.getElementById('hoenn');
hoennBtn.addEventListener('click', (e: Event) => getRegion(252, 386));

let sinnohBtn: HTMLElement | any = document.getElementById('sinnoh');
sinnohBtn.addEventListener('click', (e: Event) => getRegion(387, 493));

let unovaBtn: HTMLElement | any = document.getElementById('unova');
unovaBtn.addEventListener('click', (e: Event) => getRegion(494, 649));

let kalosBtn: HTMLElement | any = document.getElementById('kalos');
kalosBtn.addEventListener('click', (e: Event) => getRegion(650, 721));

let alolaBtn: HTMLElement | any = document.getElementById('alola');
alolaBtn.addEventListener('click', (e: Event) => getRegion(722, 809));

let galarBtn: HTMLElement | any = document.getElementById('galar');
galarBtn.addEventListener('click', (e: Event) => getRegion(810, 898));

const getRegion = (start: number, end: number): void => {
	container.innerHTML = '';
	for (let i = start; i <= end; i++) {
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
    <a href='https://www.serebii.net/pokemon/${pokemon.name}' target="_blank" rel=”noopener”>
      <div class="card">
        <span class="card--id">${pokemon.id}</span>
        <img class="card--image" src=${pokemon.image} alt=${pokemon.name} />
        <h1 class="card--name">${pokemon.name}</h1>
        <span class="card--details">Type: ${pokemon.type}</span> <br />
        <span class="card--abilities">Abilities: ${pokemon.abilities}</span>
      </div>
    </a>
      `;
	container.innerHTML += output;
};

getKanto();
