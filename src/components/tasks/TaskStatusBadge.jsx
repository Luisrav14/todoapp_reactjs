import { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

import useTaskStore from "../../store/taskStore";
import { getTaskStatusVariables } from "../../utils/utils";

const TaskStatusBadge = ({ task }) => {
  const { updateTask } = useTaskStore();

  const [currStatus, setCurrStatus] = useState(task.status);

  const { color } = getTaskStatusVariables(currStatus);

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="flat" className="capitalize" size="sm" color={color}>
            {currStatus}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Status"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={currStatus}
          onSelectionChange={(e) => {
            setCurrStatus(e.currentKey);
            updateTask(task.id, { ...task, status: e.currentKey });
          }}
        >
          <DropdownItem key="pending" color="danger">
            Pending
          </DropdownItem>
          <DropdownItem key="progress" color="warning">
            In Progress
          </DropdownItem>
          <DropdownItem key="completed" color="success">
            Completed
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default TaskStatusBadge;
