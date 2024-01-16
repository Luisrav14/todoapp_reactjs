import { useEffect } from "react";
import { useDisclosure } from "@nextui-org/react";

import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import { CustomModal, Loader } from "../ui";
import useTaskStore from "../../store/taskStore";

const TasksContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { tasks, isLoading, getTasks, clearTaskActive } = useTaskStore();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-7">All Tasks</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              className="h-52 border-3 border-default-50 border-dashed hover:bg-default-50 hover:border-default-100 hover:shadow-lg rounded-lg cursor-pointer flex justify-center items-center"
              onClick={() => {
                onOpen();
                clearTaskActive();
              }}
            >
              <p>+ Add new task</p>
            </div>

            {tasks.map((task, index) => (
              <TaskCard task={task} key={index} />
            ))}
          </div>
        )}
      </div>

      <CustomModal title="New Task" isOpen={isOpen} onClose={onClose}>
        <TaskForm />
      </CustomModal>
    </>
  );
};

export default TasksContainer;
