let a = "Jean"
let b = "Paul"

function checkName(Jean1, Paul2) {
    if(Jean1 === Paul2){
        return true 
    }
    else{
        return false
    }
}

let result = checkName(a,b)
console.log(result)


//////////////


function calcul( nombre1, nombre2){
    return nombre1 - nombre2
}

let resultat = calcul(4,102)
console.log(resultat)


//////////////


let names=[]
names.push ("Vincent", "Paul", "Arthur")
console.log(names.length)
for (let i =0;i<names.length;i++){
    names[i]=names[i]+ "va a la peche"
    console.log(names[i])
}


//////////////


let user ={
    firstname : "Vlad ",
    lastname : "Daraiche" ,
    age : 18,
    passion : "football",

}
let history = user.firstname + user.lastname + " a " + user.age + "  et aime le " + user.passion 
console.log (history)


//////////////























