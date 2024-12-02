import { Whale } from "./whale.js";

class WOA {
    constructor(n_whales, n_dimensi, objFunction) {
        this.n_whales = n_whales;
        this.n_dimensi = n_dimensi;
        this.objFunction = objFunction;
        this.whales = [];
        this.gbestFitness = -Infinity;
        this.gbestPosition = Array(n_dimensi).fill(0);
        this.initWhales();
    }

    initWhales() {
        for (let i = 0; i < this.n_whales; i++) {
            const whale = new Whale(this.n_dimensi, this.objFunction);
            whale.initPosition(0, 20);
            this.whales.push(whale);
        }
    }

    updateGbest() {
        this.whales.forEach((whale) => {
            if (whale.fitness > this.gbestFitness) {
                this.gbestFitness = whale.fitness;
                this.gbestPosition = [...whale.position];
                console.log(`New Gbest Fitness: ${this.gbestFitness}, Position: ${this.gbestPosition}`);
            }
        });
    }
    

    mainWOA() {
        this.whales.forEach((whale) => {
            whale.updatePosition(this.gbestPosition, this.n_dimensi);
        });
        this.updateGbest();
    }
}

export { WOA };
