import { ListaTrabajosComponent } from "./lista-trabajos/lista-trabajos.component";
import { FormComponent } from "./form/form.component";
import { TrabajoInfoComponent } from "./trabajo-info/trabajo-info.component";
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'trabajo', pathMatch: 'full' },
    { path: 'trabajos', component: ListaTrabajosComponent },
    { path: 'form', component: FormComponent },
    { path: 'trabajo/id', component: TrabajoInfoComponent },



]

export const routing = RouterModule.forRoot(APP_ROUTES);