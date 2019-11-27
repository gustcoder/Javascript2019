Array.prototype.MyMap = function(callback){
    const NewArray = []
    for(let i=0; i < this.length; i++) {
        NewArray.push(callback(this[i],i,this))
    }
    return NewArray
}

const nums = [1,2,3,4]
const Dobro = num => num*2

let resultadoDorbro = nums.MyMap(Dobro)
console.log(resultadoDorbro)