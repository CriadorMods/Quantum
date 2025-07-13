import { create } from "zustand"

type OffersStore = {
  OfferIndex: number
  
  setOfferIndex: (index: number) => void
  incrementOfferIndex: () => void;
}

export const useOffersStore = create<OffersStore>((set) => ({
  OfferIndex: 0,

  setOfferIndex: (index) => set({ OfferIndex: index }),
  incrementOfferIndex: () =>
    set((state) => ({
      OfferIndex: state.OfferIndex >= 5 ? 0 : state.OfferIndex + 1,
    })),
}));