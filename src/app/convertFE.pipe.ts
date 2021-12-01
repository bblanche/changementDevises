import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'conversionFE'
})
export class ConvertPipeFE implements PipeTransform {
  
    transform(montant:string, typeMonnaie:String): any {
        let nombre=parseFloat(montant)
        let k=3
        
        if (parseFloat(montant)<0){
          return "Erreur, le montant doit être positif"
        }
    
        if(typeMonnaie=="FCFA")
        {
          return parseFloat((nombre/650).toPrecision(k)) ;
        } 
        if(typeMonnaie == "USD")
        {
          return parseFloat(((nombre*88275)/100000).toPrecision(k)) ;
          
        }else
        {
          return parseFloat((nombre).toPrecision(k)) ;
          
        }
    }
}
