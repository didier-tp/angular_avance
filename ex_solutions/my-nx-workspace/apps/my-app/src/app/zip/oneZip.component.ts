import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ZippopotamResponse } from '../common/data/Zippopotam';
import { ZipService } from '../common/service/zip.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-one-zip',
  imports: [FormsModule , JsonPipe],
  templateUrl: './oneZip.component.html',
  styleUrl: './oneZip.component.css',
})
export class OneZipComponent {
   zipService = inject(ZipService);
  changeDetector = inject(ChangeDetectorRef);
  zip:string = "75001";
  zippopotamData! : ZippopotamResponse ;

  onZipData(){
    this.zipService.getZippopotamData$(this.zip).subscribe({
      next: (zipResp : ZippopotamResponse)=>{this.zippopotamData = zipResp ; this.changeDetector.markForCheck();},
      error: (err )=>{console.log("erreur:" + JSON.stringify(err)) ; this.changeDetector.markForCheck();}
    });
  }

  constructor(){
    console.log("ZipComponent (constructor)")
  }
}
