import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from 'app/services/api.service';
import { SetupService } from 'app/services/setup.service';
@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    title = 'app';

  constructor(private router: Router , private api: ApiService,
    private setup: SetupService, private activatedRoute: ActivatedRoute) {
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.router.navigate([path]);
    }
  }
}
