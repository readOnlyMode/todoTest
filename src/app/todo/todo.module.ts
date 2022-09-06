import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoRouterModule } from "./todo-routing.module";
import { TodoRegisterComponent } from "./components/todo-register/todo-register.component";

@NgModule({
  declarations: [TodoRegisterComponent],
  imports: [CommonModule, FormsModule, TodoRouterModule, ReactiveFormsModule],
})
export class TodoModule {}
