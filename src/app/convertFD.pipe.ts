import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'conversionFD'
})
export class ConvertPipe implements PipeTransform {
  
  transform(montant:string, typeMonnaie:String): any {
    let nombre=parseFloat(montant)
    let k=3
    
    if (parseFloat(montant)<0){
      return "Erreur, le montant doit être positif"
    }

    if(typeMonnaie=="FCFA")
    {
      return parseFloat((nombre/500).toPrecision(k)) ;
    } 
    if(typeMonnaie == "EURO")
    {
      return parseFloat(((nombre*113)/100).toPrecision(k)) ;
      
    }else
    {
      return parseFloat((nombre).toPrecision(k)) ;
      
    }

    
  }

  

  
  
  

  
}