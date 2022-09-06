import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";
import { AppService } from "src/app/app.service";
import { Todo } from "src/app/shared/interfaces/todo";
import { TodoRegistryForm } from "src/app/shared/types/todo-registry-form";
import { TodoPriority } from "../../../shared/enums/todo-priority";

@Component({
  selector: "app-todo-register",
  templateUrl: "./todo-register.component.html",
  styleUrls: ["./todo-register.component.scss"],
})
export class TodoRegisterComponent implements OnInit, OnDestroy {
  protected todoPriority: typeof TodoPriority = TodoPriority;

  private unsubscriber: Subject<null> = new Subject();

  public showErrorMessage = false;

  protected formGroup: FormGroup<TodoRegistryForm> = new FormGroup({
    title: new FormControl<string | null>(null, Validators.required),
    date: new FormControl<string | null>(null, Validators.required),
    priority: new FormControl<TodoPriority | null>(null, Validators.required),
  });

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.formGroup.valueChanges
      .pipe(takeUntil(this.unsubscriber))
      .subscribe(() => {
        this.showErrorMessage = Object.values(this.formGroup.controls).some(
          (control) => control.errors !== null
        );
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next(null);
  }

  create(): void {
    const todo: Partial<Todo> = {
      ...(this.formGroup.value as Partial<Todo>),
      date: Date.parse(this.formGroup.value.date as string),
      done: false,
    };

    this.appService.save(todo as Todo);
  }
}
