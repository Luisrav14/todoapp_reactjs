import { create } from "zustand";
import { firestore } from "../config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const useTaskStore = create((set) => ({
  tasks: [],
  isLoading: false,

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
      const saveTask = await addDoc(tasksRef, newTask);

      set((state) => ({ tasks: [{ ...newTask, id: saveTask.id }, ...state.tasks] }));

      alert("Task saved");
    } catch (error) {
      console.error("Error saving task:", error);
      alert("Error al guardar la tarea");
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
      const taskDocRef = doc(firestore, "tasks", taskId);
      await deleteDoc(taskDocRef);

      alert("Task deleted");
    } catch (error) {
      alert(error.message);
    }

    set({ isLoading: false });
  },
}));

export default useTaskStore;
