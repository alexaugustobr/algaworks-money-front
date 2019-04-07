import { Component } from '@angular/core';

@Component({
    selector: 'hello',
    template: `<h2>Idade {{getIdade()}}</h2>`
})
export class HelloComponent {
    idade = 11;

    getIdade() {
        return this.idade
    }
}
