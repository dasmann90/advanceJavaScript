// use of bind : 

const user = {
    name:'Mangal Das',
    city:'Jamshedpur',
    getUser:function(){
        console.log('This is',this);
        console.log(`User name : ${this.name} and city is : ${this.city}`)
    }
}

const btn = document.querySelector("#clickMe");
//btn.addEventListener("click",user.getUser.bind(this)) // call window object

btn.addEventListener("click",user.getUser.bind(user)) // call user object