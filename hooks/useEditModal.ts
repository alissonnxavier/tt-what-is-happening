import { create } from 'zustand';

interface EditModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useEditModal = create<EditModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => ({ isOpen: false }),
}));

export default useEditModal;