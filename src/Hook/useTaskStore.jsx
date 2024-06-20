import { create } from "zustand";
import { list } from "../data/db";

export const useTaskStore = create((set) => ({
  list: list,
  updateTaskList: (tasklist) => set(() => ({ list: tasklist })),
}));
