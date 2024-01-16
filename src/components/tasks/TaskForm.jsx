import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { Input, Button } from "@nextui-org/react";

import useTaskStore from "../../store/taskStore";

const TaskForm = () => {
  const { createTask, updateTask, taskActive, isLoading } = useTaskStore();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (taskActive) {
      setFormData({
        title: taskActive.title || "",
        description: taskActive.description || "",
      });
    }
  }, [taskActive]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      toast.error("Complete all required fields");
      return;
    }

    const { title, description, status } = formData;

    if (taskActive) {
      updateTask(taskActive.id, {
        id: taskActive.id,
        title,
        description,
      });
    } else {
      createTask({
        title,
        description,
        status: "pending",
      });
    }

    setFormData({
      title: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <Input type="text" label="Title" value={formData.title} onValueChange={(value) => setFormData({ ...formData, title: value })} isRequired />
      </div>
      <div className="mb-3">
        <Input
          type="text"
          label="Description"
          value={formData.description}
          onValueChange={(value) => setFormData({ ...formData, description: value })}
          isRequired
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" variant="solid" color="primary" isLoading={isLoading}>
          {taskActive ? "Update" : "Save"}
        </Button>
      </div>
    </form>
  );
};

export default TaskForm;
