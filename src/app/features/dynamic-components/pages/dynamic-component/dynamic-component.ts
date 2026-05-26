import { Component, signal, ViewChild, viewChild, ViewContainerRef } from '@angular/core';
import { AttachingComponent } from '../../components/attaching-component/attaching-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-component',
  imports: [FormsModule],
  templateUrl: './dynamic-component.html',
  styleUrl: './dynamic-component.scss',
})
export class DynamicComponent {
  title = 'Dynamic Component (default title from dynamic component)';
  greeting = signal<string>('');
  @ViewChild('container',{read:ViewContainerRef}) container!:ViewContainerRef;
  
  
  onClick(){
    this.container.clear();
    const componentRef = this.container.createComponent(AttachingComponent)
    componentRef.setInput('title', this.title); 
    let greetingSubscription = componentRef.instance.greeting.subscribe((greeting:string)=>{
      this.greeting.set(greeting);
      componentRef.destroy();
      greetingSubscription.unsubscribe();
    })
  }
}
