class calculator{
    constructor(){
        console.log("calculator started ");
    }

    added(...str){
        let sum=0;
        for (const i of str){
         sum+=i;
        }
        return sum;
    }
    subed(...str){
        let sum=0;
        for (const i of str){
         sum-=i;
        }
        return sum;
    }
    multiply(...str){
        let sum=1;
        for (const i of str){
         sum*=i;
        }
        return sum;
    }
    divide(...str){
        let sum =str[0]/str[1];
        return sum;
    }
}
let combination1= new calculator();
console.log(combination1.added(1,2,3,4))
console.log(combination1.multiply(3,4))
