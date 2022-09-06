import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TodoRegisterComponent } from "./components/todo-register/todo-register.component";

const routes: Route[] = [{ path: "", component: TodoRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRouterModule {}
