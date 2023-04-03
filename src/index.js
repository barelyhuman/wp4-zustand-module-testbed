import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import * as React from "react";
import { createRoot } from "react-dom/client";

const useFishStore = create(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: "food-storage", // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

const Main = () => {
  const st = useFishStore((x) => x.fishes);
  return <>{st}</>;
};

const root = createRoot(document.getElementById("app"));
root.render(<Main />);
