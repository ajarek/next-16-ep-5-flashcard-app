import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export type Item = {
  id: number
  question: string
  answer: string
  category: string
  progress: number
}

type ItemState = {
  items: Item[]
  addFlashcard: (item: Item) => void
  removeFlashcard: (id: number) => void
  removeAllFlashcards: () => void
}

export const useFlashcardStore = create<ItemState>()(
  persist(
    (set) => ({
      items: [],

      addFlashcard: (item: Item) =>
        set((state) => ({
          items: [item, ...state.items],
        })),

      removeFlashcard: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      removeAllFlashcards: () => set({ items: [] }),
    }),

    { name: "flashcardStore", storage: createJSONStorage(() => localStorage) }
  )
)
