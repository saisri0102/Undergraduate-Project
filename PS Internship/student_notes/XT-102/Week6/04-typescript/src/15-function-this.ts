function sum(this :{x: number, y:number} , z:number){
    return this.x+this.y+z;
}
sum.call({x: 12, y:13}, 14);

export{}