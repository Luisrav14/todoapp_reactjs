import moment from "moment";
import { useEffect } from "react";
import { FaCalendarAlt, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Chip, Tooltip, useDisclosure } from "@nextui-org/react";

import TaskForm from "./TaskForm";
import { CustomModal } from "../ui";
import useTaskStore from "../../store/taskStore";
import TaskStatusBadge from "./TaskStatusBadge";

const TaskCard = ({ task }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { deleteTask, setTaskActive, clearTaskActive, taskActive } = useTaskStore();

  return (
    <>
      {taskActive ? (
        <CustomModal title={task.title} isOpen={isOpen} onClose={onClose}>
          <TaskForm />
        </CustomModal>
      ) : (
        <CustomModal title={task.title} isOpen={isOpen} onClose={onClose}>
          <div className="flex gap-4 mb-5">
            <span className="flex items-center gap-2 text-default-500">
              <FaCalendarAlt className="text-sm" />
              <span className="text-xs">{moment(task.createdAt).format("LLL")}</span>
            </span>
            <TaskStatusBadge task={task} />
          </div>
          {task.description}
        </CustomModal>
      )}

      <div
        className="p-5 h-52 bg-default-50 border-1 border-default-200 rounded-lg shadow-lg hover:shadow-default-50 cursor-pointer"
        onClick={() => {
          clearTaskActive();
          onOpen();
        }}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col">
            <p className="font-bold text-xl truncate mb-1">{task.title}</p>
            <small className="text-xs font-normal mb-2 text-default-500">{moment(task.createdAt).format("LLL")}</small>

            <p className="font-li text-sm line-clamp-2">{task.description}</p>
          </div>

          <div className="mt-auto">
            <div className="flex justify-between mt-2">
              <TaskStatusBadge task={task} />

              <div className="flex items-center gap-2">
                <Tooltip color="danger" content="Delete task" closeDelay={0}>
                  <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => deleteTask(task.id)}>
                    <FaTrashAlt />
                  </span>
                </Tooltip>
                <Tooltip color="warning" content="Edit task" className="text-white" closeDelay={0}>
                  <span
                    className="text-lg text-warning cursor-pointer active:opacity-50"
                    onClick={() => {
                      setTaskActive(task);
                      onOpen();
                    }}
                  >
                    <FaEdit />
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
