import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
const routes: Routes = [
  {path: '', redirectTo:'lista-obras',pathMatch:'full'}, 
  {path: 'lista-productos', component:ListarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
