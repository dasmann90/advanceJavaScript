class User {
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }

   get fullName(){
    return `${this.fname} ${this.lname}`
   }

   set fullName(newName){
    const [fname,lname]= newName.split(" ");
    this.fname = fname;
    this.lname = lname;
   }
}

const user = new User('Mangal','Das');
console.log(user.fullName);
user.fullName = 'Mangal Kumar';
console.log(user.fullName);

