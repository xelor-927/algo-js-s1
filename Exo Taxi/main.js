class Caracter {
    constructor(name,sanity){
        this.name = name 
        this.sanity = sanity
    }

    trajet (sons){
        let NbrChangTaxi = 0
        let RedLightsNumbers = 0 

        while (NbrChangTaxi < 30 && this.sanity > 0){
        
            console.log("Le taxi s'arrete devant " + RedLightsNumbers + " feu rouge, la musique change")
            let result = Math.floor(Math.random() *Musics.length) 

            if (Musics[0] === " Wejdene- Anissa ") {
                this.sanity -= 1
                NbrChangTaxi += 1
                console.log(this.name + " il perd 1 point de santé ")
            }
            
                RedLightsNumbers++
                console.log(this.name + " a passé un feu rouge ")
                console.log(this.name + " ecoute de la musique dans le taxi ")

            if (this.sanity === 0) {
                console.log(this.name + " Explose ")
                break   

            }
          
            
             if (RedLightsNumbers=== 0 ){
            console.log (" John rentre a la maison")
            break
            }  
        }
        
    }

}

let John = new Caracter(" John", 10 )
let Musics = [" Ninho - binks to binks7", " Wejdene- Anissa", " Landy-medusa" , " Kln93-Every day", " 1plike140- Tiekson "]
console.log(John)
console.log(this.Musics) 
John.trajet(Musics)
