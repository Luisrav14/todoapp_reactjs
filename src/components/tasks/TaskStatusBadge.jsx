import { useMemo, useState } from "react";
import { Chip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import useTaskStore from "../../store/taskStore";

const TaskStatusBadge = ({ task }) => {
  const { updateTask } = useTaskStore();

  const [currStatus, setCurrStatus] = useState(task.status);

  let chipText = "Pending";
  let chipColor = "default";

  switch (task.status) {
    case "pending":
      chipColor = "danger";
      chipText = "Pending";
      break;
    case "progress":
      chipColor = "warning";
      chipText = "Progress";
      break;
    case "completed":
      chipColor = "success";
      chipText = "Completed";
      break;
    default:
      chipColor = "default";
      break;
  }

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="flat" className="capitalize" size="sm" color={chipColor}>
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
