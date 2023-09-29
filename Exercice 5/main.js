

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





class Pokemon{
    constructor(name,def , atk,pv ){
        this.name = name
        this.def = def
        this.atk = atk
        this.pv = pv
        this.luck = luck

    }

    isLucky () {
        if (Math.random()<=this.luck){
            return true 
        } else {
            return false
        }
            
        }
    

    attackPokemon(Pokemon){
        let damage=this.atk - Pokemon.def
        Pokemon.pv -= damage 
        console.log(this.name + " a attaque " + Pokemon.name + ", il lui reste " + Pokemon.pv )
    }
}

let bulbizar = new Pokemon(" bulbizar", 15, 30, 120)

let salameche = new Pokemon(" salameche", 28, 22, 100)

bulbizar.attackPokemon(salameche)
console.log(salameche.pv)

while(bulbizar.pv>0 && salameche.pv >0){
    bulbizar.attackPokemon(salameche)

if (salameche.pv<=0) {
console.log(salameche.name + " est mort")
break
}

bulbizar
}













