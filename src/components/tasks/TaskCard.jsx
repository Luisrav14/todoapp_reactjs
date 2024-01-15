import { Chip, Tooltip, useDisclosure } from "@nextui-org/react";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import { CustomModal } from "../ui";

const TaskCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <CustomModal title="Task Info" isOpen={isOpen} onClose={onClose}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, cum asperiores ad repudiandae laudantium ipsam fuga. Quis facilis vero
        repellat quam quasi delectus iusto sint, culpa, quas laudantium, dolores vel?
      </CustomModal>

      <div
        className="p-5 h-52 bg-default-50 border-1 border-default-200 rounded-lg shadow-lg hover:shadow-default-50 cursor-pointer"
        onClick={onOpen}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col">
            <p className="font-bold text-xl truncate mb-1">Lorem, ipsum dolor.</p>
            <small className="text-xs font-normal mb-2 text-default-500">27/10/2023</small>

            <p className="font-li text-sm line-clamp-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dolore, adipisci, harum odio distinctio iste, error quidem illum
              corporis natus velit magnam esse non assumenda! Dolor totam ipsum excepturi cumque!
            </p>
          </div>

          <div className="mt-auto">
            <div className="flex justify-between mt-2">
              <Chip color="warning" variant="solid" className="text-white">
                In Progress
              </Chip>
              <div className="flex items-center gap-2">
                <Tooltip color="danger" content="Delete task" closeDelay={0}>
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
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
