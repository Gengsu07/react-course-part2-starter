import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/apiClient";

interface AddTodoContext {
  previousTodos: Todo[];
}

const apiClient = new APIClient<Todo>("/todos");

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: apiClient.post()
    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>([CACHE_KEY_TODOS]) || []; //context sebeleum mutate
      queryClient.setQueryData<Todo[]>([CACHE_KEY_TODOS], (todos) => [
        newTodo,
        ...(todos || []),
      ]);

      onAdd();
      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      //ada 2 APPROACH
      //APPROACH1 : Invalidate the cache, jadi nnti react-query akan ngefetch lagi trs dpt data baru yg udah terupdate
      // queryClient.invalidateQueries({
      //   queryKey:['todos'] // invalidate cache yg keynya todos
      // })
      //APPROACH 2: Update data manual yg tersimpan di cache
      queryClient.setQueryData<Todo[]>([CACHE_KEY_TODOS], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      // cek dlu contextnys undefined atau engga
      if (!context) return;
      queryClient.setQueryData<Todo[]>(
        [CACHE_KEY_TODOS],
        context.previousTodos
      );
    },
  });
};
export default useAddTodo;
