import { CreateTodoDto } from "./create-todo.dto";

export class UpdateTodoDto extends CreateTodoDto {
  task: string;
  isDone: number;
}
