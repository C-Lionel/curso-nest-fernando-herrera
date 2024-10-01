
export let pokemonIds = [1, 20, 30, 34, 66];

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'bulbasaur',
    age: 15
}

export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander',
    age: 32
}

export let lio = pokemonIds.pop()
console.log(bulbasaur)

export const pokemons: Pokemon[] = [];
pokemons.push(bulbasaur)

console.log(pokemons, charmander)