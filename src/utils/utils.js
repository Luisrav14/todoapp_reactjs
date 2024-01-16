export const getTaskStatusVariables = (status) => {
  let color, text;

  switch (status) {
    case "pending":
      color = "danger";
      text = "Pending";
      break;
    case "progress":
      color = "warning";
      text = "In Progress";
      break;
    case "completed":
      color = "success";
      text = "Completed";
      break;
    default:
      color = "default";
      text = "";
      break;
  }

  return { color, text };
};
