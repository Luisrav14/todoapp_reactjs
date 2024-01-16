import { Toaster } from "react-hot-toast";

import { DashboardContainer } from "../components";
import TasksContainer from "../components/tasks/TasksContainer";

const App = () => {
  return (
    <DashboardContainer>
      <Toaster position="top-center" reverseOrder={false} />
      <TasksContainer />
    </DashboardContainer>
  );
};

export default App;
