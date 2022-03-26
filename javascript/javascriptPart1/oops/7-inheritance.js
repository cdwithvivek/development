class Animal {
    constructor(name,age){
        this.name = name
        this.age = age
    }
    eat(){
        return `${this.name} is eating`
    }
    isSuperCute(){
        return this.age<=1
    }
    isCute(){
        return true
    }
}

class Cat extends Animal {
    constructor(name,age){
        super(name,age)
    }
    canWalk(){
        return 'is Walking'
    }
}


const jipzzy = new Cat('jipzzy',2)
console.log(jipzzy)
console.log(jipzzy.canWalk())
console.log(jipzzy.eat())