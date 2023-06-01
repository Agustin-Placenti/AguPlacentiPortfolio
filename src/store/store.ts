import { create } from "zustand";
import { PORTFOLIO } from "../utils/consts";
import { createJSONStorage, persist } from "zustand/middleware";

interface State {
    active: string,
    setActive: (item: string) => void,
    openMenu: boolean,
    setOpenMenu: (value: boolean) => void
}

export const useStore = create<State>()(
    persist(
        (set) => ({
            active: PORTFOLIO,
            setActive: (item: string) => set({ active: item }),
            openMenu: false,
            setOpenMenu: (value: boolean) => set({ openMenu: value }),
        }),
        {
            name: 'storage',
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
)
