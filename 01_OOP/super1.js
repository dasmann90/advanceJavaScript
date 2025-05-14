// super class use

class Book {
    constructor(author,title){
        this.author = author;
        this.title = title;
    }
}

class Ebook extends Book {
    constructor(author,title,fileSize){
        super(author,title);
        this.fileSize =fileSize;
    }

    download(){
        return `The title of this ebook is : ${this.title} and file size is : ${this.fileSize}`
    }
}

const ebook = new Ebook('Mangal','HP','100MB');
console.log(ebook.download())