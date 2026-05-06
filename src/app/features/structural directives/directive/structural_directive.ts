import { Directive, input, Input, OnChanges, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[appStructuralDirectiveD]',
})

export class StructuralDirectiveD implements OnChanges {

constructor(
    private tempref:TemplateRef<any>,
    private viewref:ViewContainerRef
){}

myValueList:string[]=['Angular','React','Vue','Svelte']

ngOnChanges(changes:any){
    console.log(changes)
}

@Input ()
 set appStructuralDirectiveDValue(val:string){
    this.testConnection(val)
 }

@Input ()
 set appStructuralDirectiveD(val:string){
    this.testConnection(val)
}
    
testConnection(val:string){
    this.viewref.clear();
    if(val != ''){
        if(this.myValueList.includes(val)){
            this.viewref.createEmbeddedView(this.tempref,{$implicit:'value'+val+' is exist in the list'})
        }else{
            this.viewref.clear()
        }
    }else{
        this.viewref.clear()
    }
}
}