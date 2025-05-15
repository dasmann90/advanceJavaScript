// apply with parms : take array type object

const user = {
    username:'dasmann@gmail.com',
    userId:'3',
    getUser:function(fname,lname){
        return `user name is: ${this.username}, user id is :${this.userId}, name of user: ${fname} ${lname}`
    }
}

const userFromOtherAc = {
    username:'dasmann90@gmail.com',
    userId:'230'
}

const getUser = user.getUser.apply(userFromOtherAc,['Mangal','Das']);
console.log(getUser)