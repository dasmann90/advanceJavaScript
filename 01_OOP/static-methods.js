// static methods : call without create instance of class

class ArrayUtils {
    constructor(){
        throw new Error(`static methods can't be init`)
    }

    static avg(arr){
        if(arr.lenght === 0){
            throw new Error(`Array should not be empty`)
        }
        else{
          return  arr.reduce((a,b)=> a + b)/2;
        }
    }

    static max(arr){
        return Math.max(...arr);
    }
}

const avg = ArrayUtils.avg([3,4,5,6]);
const maxNumber = ArrayUtils.max([2,0,45,9])
console.log(avg)
console.log(maxNumber)