function sum(z) {
    return this.x + this.y + z;
}
sum.call({ x: 12, y: 13 }, 14);
export {};
