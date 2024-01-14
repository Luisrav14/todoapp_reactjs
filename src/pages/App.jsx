import { DashboardContainer } from "../components";
import TasksContainer from "../components/tasks/TasksContainer";

const App = () => {
  return (
    <DashboardContainer>
      <h1 className="text-3xl font-bold mb-7">All Tasks</h1>

      <TasksContainer />
    </DashboardContainer>
  );
};

export default App;
