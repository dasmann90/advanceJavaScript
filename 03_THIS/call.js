// call with no prams

const person = {
    fname:'Mangal',
    lname:'Das',
    fullName:function(){
        return `My full name is ${this.fname} ${this.lname}`
    }
}

const person1 = {
    fname:'Mangal1',
    lname:'Das1'
}
const getFullName = person.fullName.call(person1);
console.log(getFullName)

// call with parms : take only string

const user = {
    username:'dasmann@gmail.com',
    userId:'3',
    getUser:function(name){
        return `user name is: ${this.username}, user id is :${this.userId}, name of user: ${name}`
    }
}

const userFromOtherAc = {
    username:'dasmann90@gmail.com',
    userId:'230'
}

const getUser = user.getUser.call(userFromOtherAc,'Mangal Das');
console.log(getUser)