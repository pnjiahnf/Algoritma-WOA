class Whale {
    constructor(n_dimensi, objFunction) {
        this.objFunction = objFunction;
        this.n_dimensi = n_dimensi;
        this.position = Array(n_dimensi).fill(0);
        this.fitness = 0;
    }

    initPosition(min, max) {
        for (let i = 0; i < this.n_dimensi; i++) {
            this.position[i] = Math.random() * (max - min) + min;
        }
        this.calculateFitness();
    }

    calculateFitness() {
        this.fitness = this.objFunction(...this.position);
    }

    updatePosition(gbestPosition, n_dimensi) {
        const a = 2;
        const A = Array(n_dimensi).fill(0).map(() => a * (2 * Math.random() - 1));
        const C = Array(n_dimensi).fill(0).map(() => 2 * Math.random());

        for (let i = 0; i < n_dimensi; i++) {
            const distance = Math.abs(C[i] * gbestPosition[i] - this.position[i]);
            this.position[i] = gbestPosition[i] - A[i] * distance;
            this.position[i] = Math.max(0, this.position[i]);
        }
        this.calculateFitness();
    }
}

export { Whale };
