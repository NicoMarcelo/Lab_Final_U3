import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgresoComponent } from './componentes/egreso/egreso.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { VerEgresosComponent } from './componentes/ver-egresos/ver-egresos.component';
import { VerUsuariosComponent } from './componentes/ver-usuarios/ver-usuarios.component';

const routes: Routes = [
  {
    path:"usuario",
    component: UsuarioComponent
  },
  {
    path:"egreso",
    component: EgresoComponent
  },
  {
    path:"ver-egresos",
    component: VerEgresosComponent
  },
  {
    path: "ver-usuarios",
    component: VerUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
