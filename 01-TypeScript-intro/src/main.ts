import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { name, age, isValid } from './bases/01-types.ts';
import { lio } from './bases/02-objects.ts';
import { charmander } from './bases/06-decorators2.ts';
// import { charmander } from './bases/05-decorators.ts';
// import { charmander } from './bases/04-injection.ts'
// import { Pokemon, charmander } from './bases/03-classes.ts';
// const lionel = new Pokemon(2, 'lio');


if (isValid) {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Hola soy ${name} y tengo ${age} años ${lio} - ${charmander.name} </h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
} 


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
