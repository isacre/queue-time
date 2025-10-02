import { create } from "zustand";
import type { UserType } from "../types";

interface UserStore {
  user: Omit<UserType, "token"> | null;
  setUser: (user: UserType) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => {
    set({ user: { id: user.id, name: user.name } });
  },
}));
