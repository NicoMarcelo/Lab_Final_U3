import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { EgresoComponent } from './componentes/egreso/egreso.component';
import { VerUsuariosComponent } from './componentes/ver-usuarios/ver-usuarios.component';
import { VerEgresosComponent } from './componentes/ver-egresos/ver-egresos.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EgresoComponent,
    VerUsuariosComponent,
    VerEgresosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
