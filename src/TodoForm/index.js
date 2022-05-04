import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";
import { useForm } from "react-hook-form";

function TodoForm() {
  //Validación nulo
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = () => {
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
      //Validación
        {...register("textTareaRequired", { required: true })}
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escriba su tarea"
      />
      <div>
        {/*Se pinta el mensaje de la validación en caso de que sea nulo*/}
        {errors.textTareaRequired && <span className="error">No puede agregar una tarea vacia</span>}
      </div>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };