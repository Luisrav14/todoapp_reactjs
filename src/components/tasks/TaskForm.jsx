import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import useTaskStore from "../../store/taskStore";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useTaskStore();

  const handleSubmit = () => {
    createTask({
      title,
      description,
      status: "pending", // status: pending | progress | completed
    });
  };

  return (
    <>
      <div className="mb-2">
        <Input type="text" label="Title" onValueChange={setTitle} />
      </div>
      <div className="mb-5">
        <Input type="text" label="Description" onValueChange={setDescription} />
      </div>
      <div className="flex justify-end">
        <Button type="submit" variant="solid" color="primary" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </>
  );
};

export default TaskForm;
