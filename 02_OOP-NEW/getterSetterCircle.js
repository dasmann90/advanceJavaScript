class Circle {
    static allowColor = new Set(['red','green','yellow']);

    constructor(radius, color){
        this._radius = radius;
        this.setColor(color);
    }

    setColor(newColor){
        if(Circle.allowColor.has(newColor)){
            this._color = newColor;
        }else{
            
            throw new Error(`${newColor} is not allow !!`)
        }
    }

    get color(){
        return this._color;
    }

    set color(newColor){
        this.setColor(newColor)
    }

    get redius(){
        return this._radius;
    }

    set redius(value){
        if(value < 0){
            throw new Error(`raduis can not be negative number !!`)
        }else{
            this._radius = value;
        }
    }
}

const c = new Circle(5,'red');
console.log(c.color);
c.color = 'green';
c.radius = 6;
console.log(c._color);

