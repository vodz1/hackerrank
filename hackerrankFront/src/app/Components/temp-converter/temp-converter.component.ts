import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temp-converter.component.html',
  styleUrl: './temp-converter.component.css'
})
export class TempConverterComponent {
  celsius : number | null = null
  fahrenheit : number | null = null

  celsiusConverter(e : any){
    console.log("e" , e);
    
    if(e !==null){
      this.fahrenheit = (e.target.value * 9/5) +32
    }else{
      this.fahrenheit = null
    }
  }

  fahrenheitConverter(e : any){
    if(e !==null){
      this.celsius = (e.target.value - 32) * 5/9
    }else{
      this.celsius = null
    }

  }


}
