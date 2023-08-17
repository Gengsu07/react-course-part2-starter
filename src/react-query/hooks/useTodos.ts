import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import TodoServices, { Todo } from "../services/TodoServices";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: [CACHE_KEY_TODOS],
    queryFn: TodoServices.getAll,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
