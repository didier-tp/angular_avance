import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ZipService } from '../common/service/zip.service';
import { ZippopotamResponse } from '../common/data/zippopotam';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-zip-currency',
  imports: [FormsModule,JsonPipe],
  templateUrl: './zipCurrency.component.html',
  styleUrl: './zipCurrency.component.css',
})
export class ZipCurrencyComponent {
  private zipService=inject(ZipService);
  private changeDetectorRef = inject(ChangeDetectorRef);

  zip : string = "75001";
  zippopotamData : ZippopotamResponse | null=null;

  onGetZippotpotamData(){
      this.zipService.getZipppotamData$(this.zip).subscribe({
        next:(data)=>{this.zippopotamData=data; this.changeDetectorRef.markForCheck();},
        error:(err)=>{console.log(err);}
      })
  }

}
