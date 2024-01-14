import TaskCard from "./TaskCard";
import { CustomModal } from "../ui";
import { useDisclosure, Input, Button } from "@nextui-org/react";

const TasksContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            className="h-52 border-3 border-default-50 border-dashed hover:bg-default-50 hover:border-default-100 hover:shadow-lg rounded-lg cursor-pointer flex justify-center items-center"
            onClick={onOpen}
          >
            <p>+ Add new task</p>
          </div>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </div>

      <CustomModal title="New Task" isOpen={isOpen} onClose={onClose}>
        <div className="">
          <div className="mb-2">
            <Input type="text" label="Title" />
          </div>
          <div className="mb-5">
            <Input type="text" label="Description" />
          </div>
          <div className="flex justify-end">
            <Button type="submit" variant="solid" color="primary">
              Save
            </Button>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default TasksContainer;
