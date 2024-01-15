import { HiPencilAlt, HiTrash } from "react-icons/hi";
import { Chip, Tooltip, useDisclosure } from "@nextui-org/react";

import { CustomModal } from "../ui";
import useTaskStore from "../../store/taskStore";

const TaskCard = ({ task }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { deleteTask } = useTaskStore();

  return (
    <>
      <CustomModal title={task.title} isOpen={isOpen} onClose={onClose}>
        {task.description}
      </CustomModal>

      <div
        className="p-5 h-52 bg-default-50 border-1 border-default-200 rounded-lg shadow-lg hover:shadow-default-50 cursor-pointer"
        onClick={onOpen}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col">
            <p className="font-bold text-xl truncate mb-1">{task.title}</p>
            <small className="text-xs font-normal mb-2 text-default-500"></small>

            <p className="font-li text-sm line-clamp-2">{task.description}</p>
          </div>

          <div className="mt-auto">
            <div className="flex justify-between mt-2">
              <Chip color="warning" variant="solid" className="text-white">
                {task.status}
              </Chip>
              <div className="flex items-center gap-2">
                <Tooltip color="danger" content="Delete task" closeDelay={0}>
                  <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => deleteTask(task.id)}>
                    <HiTrash />
                  </span>
                </Tooltip>
                <Tooltip color="warning" content="Edit task" className="text-white" closeDelay={0}>
                  <span className="text-lg text-warning cursor-pointer active:opacity-50" onClick={onOpen}>
                    <HiPencilAlt />
                  </span>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
