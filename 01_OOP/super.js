// super class use

class Triangle {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    getArea(){
        return (this.a * this.b)/2;
    }

    getHypotenuse(){
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }

    describe(){
        return `Area is of triangle is ${this.getArea()}`
    }
}

class ColorTriangle extends Triangle{
    constructor(a,b,color){
        super(a,b);
        this.color = color;
    }
}

class ColorTriangleMood extends ColorTriangle {
    constructor(a,b,color,mood){
        super(a,b,color);
        this.mood = mood;
    }
}

const triangle = new ColorTriangleMood(3,4,'red','sad');
const area = triangle.getArea();
const color = triangle.color = 'green'
console.log(color);
