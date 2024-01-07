import TaskCard from "./TaskCard";

const TasksContainer = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />

        <div className="border-3 border-default-50 border-dashed hover:bg-default-50 hover:border-default-100 hover:shadow-lg p-20 rounded-lg cursor-pointer">
          <p>+ Add new task</p>
        </div>
      </div>
    </div>
  );
};

export default TasksContainer;
