import axios  from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

// ESTO ES LO MISMO

// export class Pokemon {
    
//     public id: number;
//     public name: string;

//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//         console.log('Constructor llamado')
//     }
// }

// QUE ESCRIBIR ESTO
// MAS SIMPLIFICADO EN EL CONSTRUCTOR, ES LA FORMA CORTA DE HACERLO

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }
    
    constructor(
        public readonly id: number,
        // public id: number,
        public name: string
    ) {}

    scream() {
        console.log(`${this.name.toUpperCase()} !!!`)
    }

    speak() {
        console.log(`${this.name}, ${this.name}`)
    }

    async getMoves(): Promise<Move[]> {
        // const moves = 10;
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        return data.moves
    }


}

export const charmander = new Pokemon(1, 'Charmander');
console.log(charmander.imageUrl);

charmander.scream();
charmander.speak();
charmander.getMoves()
