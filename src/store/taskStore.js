import { create } from "zustand";
import toast from "react-hot-toast";

import { firestore } from "../config/firebase";
import { collection, doc, addDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import moment from "moment";

const useTaskStore = create((set, get) => ({
  tasks: [],
  isLoading: false,
  taskActive: false,

  getTasks: async () => {
    set({ isLoading: true });

    try {
      const tasksRef = collection(firestore, "tasks");
      const { docs } = await getDocs(tasksRef);

      const tasks = docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      set({ tasks });
    } catch (error) {
      console.error(error);
    }

    set({ isLoading: false });
  },

  createTask: async (newTask) => {
    set({ isLoading: true });

    const tasksRef = collection(firestore, "tasks");

    try {
      newTask = {
        ...newTask,
        //status: "pending", // status: pending | progress | completed
        createdAt: moment().format(),
      };

      const saveTask = await addDoc(tasksRef, newTask);

      set((state) => ({ tasks: [{ ...newTask, id: saveTask.id }, ...state.tasks] }));

      toast.success("Task created");
    } catch (error) {
      console.error("Error saving task:", error);

      toast.error(`Error saving task: ${error}`);
    }

    set({ isLoading: false });
  },

  updateTask: async (taskId, updatedTask) => {
    set({ isLoading: true });

    try {
      const taskDocRef = doc(firestore, "tasks", taskId);

      await updateDoc(taskDocRef, updatedTask);

      const updatedTasksSnapshot = await getDocs(collection(firestore, "tasks"));
      const updatedTasks = updatedTasksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      set({ tasks: updatedTasks });

      toast.success("Task updated");
    } catch (error) {
      console.log(error);
      toast.error("Error updating task");
    }

    set({ isLoading: false });
  },

  deleteTask: async (taskId) => {
    set({ isLoading: true });

    try {
      const taskDocRef = doc(firestore, "tasks", taskId);
      await deleteDoc(taskDocRef);

      set((state) => ({ tasks: state.tasks.filter((t) => t.id != taskId) }));

      toast.success("Task deleted");
    } catch (error) {
      toast.error("Error deleting");
    }

    set({ isLoading: false });
  },

  setTaskActive: (task) => {
    set({ taskActive: task });
  },

  clearTaskActive: () => {
    set({ taskActive: false });
  },
}));

export default useTaskStore;
