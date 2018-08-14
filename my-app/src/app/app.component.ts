import { Component } from '@angular/core';
import { PetsService } from 'my-test-lib';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private petsSrv: PetsService) {
    petsSrv.listPets().pipe(tap());
  }
}
