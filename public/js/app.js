"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// This checks for type of container, if not HTMLElement, it will look for what comes after the pipe.
const container = document.getElementById('app');
const pokemons = 151;
// fetchData loops through number of pokemon to retrive and for each object call getPokemon
const getKanto = () => {
    for (let i = 1; i <= pokemons; i++) {
        getPokemon(i);
    }
};
let kantoBtn = document.getElementById('kanto');
kantoBtn.addEventListener('click', (e) => getRegion(1, 151));
let johtoBtn = document.getElementById('johto');
johtoBtn.addEventListener('click', (e) => getRegion(152, 251));
let hoennBtn = document.getElementById('hoenn');
hoennBtn.addEventListener('click', (e) => getRegion(252, 386));
let sinnohBtn = document.getElementById('sinnoh');
sinnohBtn.addEventListener('click', (e) => getRegion(387, 493));
let unovaBtn = document.getElementById('unova');
unovaBtn.addEventListener('click', (e) => getRegion(494, 649));
let kalosBtn = document.getElementById('kalos');
kalosBtn.addEventListener('click', (e) => getRegion(650, 721));
let alolaBtn = document.getElementById('alola');
alolaBtn.addEventListener('click', (e) => getRegion(722, 809));
let galarBtn = document.getElementById('galar');
galarBtn.addEventListener('click', (e) => getRegion(810, 898));
const getRegion = (start, end) => {
    container.innerHTML = '';
    for (let i = start; i <= end; i++) {
        getPokemon(i);
    }
};
// Fetching data may take time. We will use an async function that returns a Promise of type void. The function won't return a value.
const getPokemon = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = yield data.json();
    const pokemonType = pokemon.types
        .map((poke) => poke.type.name)
        .join(', ');
    const pokemonAbilities = pokemon.abilities
        .map((poke) => poke.ability.name)
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
});
const showPokemon = (pokemon) => {
    let output = `     
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
