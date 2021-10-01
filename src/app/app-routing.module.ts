import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { DashComponent } from './components/dash/dash.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: DashComponent
  },
  {
    path: "cadastrarTarefa",
    component: CadastrarComponent
  },
  {
    path: "tasks/listar",
    component: DashComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
