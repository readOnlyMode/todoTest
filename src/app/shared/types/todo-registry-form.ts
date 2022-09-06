import { FormControl } from "@angular/forms";
import { TodoPriority } from "../enums/todo-priority";

export type TodoRegistryForm = {
  title: FormControl<string | null>;
  date: FormControl<string | null>;
  priority: FormControl<TodoPriority | null>;
};
