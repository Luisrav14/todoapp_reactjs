import { create } from "zustand";
import { firestore } from "../config/firebase";

const useTaskStore = create((set) => ({
  tasks: [],
  isLoading: false,

  createTask: async (newTask) => {
    set({ isLoading: true });

    try {
      await firestore.collection("tasks").add({
        title: newTask.title,
        description: newTask.description,
        status: "pending", // pending | progress | completed
      });

      alert("Task saved");
    } catch (error) {
      alert(error);
    }

    set({ isLoading: false });
  },

  updateTask: async (taskId, updatedTask) => {
    set({ isLoading: true });

    try {
      await firestore.collection("tasks").doc(taskId).update(updatedTask);

      alert("Task updated");
    } catch (error) {
      alert(error);
    }

    set({ isLoading: false });
  },

  deleteTask: async (taskId) => {
    set({ isLoading: true });

    try {
      await firestore.collection("tasks").doc(taskId).delete();

      alert("Task deleted");
    } catch (error) {
      alert(error);
    }

    set({ isLoading: false });
  },
}));

export default useTaskStore;
