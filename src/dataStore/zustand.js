import { create } from 'zustand';

const useStore = create((set) => ({
    location: null,
    setLocation: (loc) => set({ location: loc })
}));

export default useStore;