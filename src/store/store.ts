import { create } from "zustand";
import { PORTFOLIO } from "utils/consts";
import { createJSONStorage, persist } from "zustand/middleware";
export type MenuStateProps = 'open' | 'closed' | 'loading';

interface State {
    active: string,
    setActive: (item: string) => void,
    menuState: MenuStateProps,
    setMenuState: (value: MenuStateProps) => void,
    darkMode: boolean,
    setDarkMode: (value: boolean) => void
}

export const useStore = create<State>()(
    persist(
        (set) => ({
            active: PORTFOLIO,
            setActive: (item: string) => set({ active: item }),
            menuState: 'loading',
            setMenuState: (value: MenuStateProps) => set({ menuState: value }),
            darkMode: true,
            setDarkMode: (value: boolean) => set({ darkMode: value})
        }),
        {
            name: 'storage',
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
)
