import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import useTaskStore from "../../store/taskStore";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useTaskStore();

  const handleSubmit = (e) => {
    createTask({ title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <Input type="text" label="Title" onValueChange={setTitle} />
      </div>
      <div className="mb-5">
        <Input type="text" label="Description" onValueChange={setDescription} />
      </div>
      <div className="flex justify-end">
        <Button type="submit" variant="solid" color="primary">
          Save
        </Button>
      </div>
    </form>
  );
};

export default TaskForm;
