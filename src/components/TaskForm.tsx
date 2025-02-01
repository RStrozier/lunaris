import { useForm } from "react-hook-form";
import { TaskFormData } from "../data/Types";

const TaskForm = () => {
      // Pass TaskFormData to useForm and initialize overwrites the default useForm data
  const { register, handleSubmit } = useForm<TaskFormData>();

    // Get the current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split("T")[0];

    const onSubmit = (data: TaskFormData) => {
        console.log(data);
    };

    return (
        <>
            <div className="container-lg mt-3">
                {/* react-hook-form to register the input on submit function on submit of form*/}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text"
                        placeholder="Enter task"
                        id="task"
                        //   register spread operator using useForm
                        {...register("task", { required: "Task is required" })} />

                    {/* Task created date input */}
                    <div className="mb-3">
                        <label htmlFor="taskCreatedDate" className="form-label">
                            Task Created Date:
                        </label>
                        <input
                            id="taskCreatedDate"
                            type="date"
                        // form constrol is a type of bootstrap styling
                            className="form-control"
                            // Set default value to current date
                            defaultValue={currentDate} 
                            {...register("taskCreatedDate", { required: "Date is required" })}
                        />
                    </div>
                        {/* submit button */}
                    <button type="submit">Submit Task</button>
                </form>

            </div>
        </>
    )
}

export default TaskForm