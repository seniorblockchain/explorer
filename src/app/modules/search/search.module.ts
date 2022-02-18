import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { SearchComponent } from 'app/modules/search/search.component';
import { MatInputModule  } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        MatIconModule,
        SharedModule,
        MatInputModule,
        MatSnackBarModule,
     ],exports :[
        SearchComponent
     ]
})
export class SearchModule {
}

