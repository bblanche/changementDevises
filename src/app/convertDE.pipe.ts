import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'conversionDE'
})
export class ConvertPipeDE implements PipeTransform {
  
    transform(montant:string, typeMonnaie:String): any {
        let nombre=parseFloat(montant)
        let k=3
        
        if (parseFloat(montant)<0){
          return "Erreur, le montant doit être positif"
        }
    
        if(typeMonnaie=="EURO")
        {
          return parseFloat((nombre*650).toPrecision(k)) ;
        } 
        if(typeMonnaie == "USD")
        {
          return parseFloat((nombre*500).toPrecision(k)) ;
          
        }else
        {
          return parseFloat((nombre).toPrecision(k)) ;
          
        }
    }
}
