import { Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';
import { AboutComponent } from './about/about.component';
import { ProtofolioComponent } from './protofolio/protofolio.component';

import { NotfoundComponent } from './notfound/notfound.component';
import path from 'path';
import { ContactComponent } from './contacts/contacts.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:StartpageComponent,title:'home page!'},
    {path:'about',component:AboutComponent,title:'about page!'},
    {path:'protofolio',component:ProtofolioComponent,title:'protofolio'},
    {path:'contacts',component:ContactComponent,title:'contacts'},
    {path:'**',component:NotfoundComponent,title:'not found'}
];

