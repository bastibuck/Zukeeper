import { create } from 'zustand';
import { Store } from '../../types';

const useExtensionStore = create<Store>()((set, get) => ({
  // State and Reducer Logic for our Extension
  displayState: true,
  displayDiff: false,
  showState: () =>
    set({
      displayState: true,
      displayDiff: false,
    }),
  showTree: () =>
    set({
      displayState: false,
      displayDiff: false,
    }),
  showDiff: () =>
    set({
      displayState: false,
      displayDiff: true,
    }),

  // State and Reducer Logic for the Zustand Application
  initialState: '',
  setInitialState: (snapshot) => {
    set((state) => ({
      initialState: snapshot,
    }));
  },
  previousStates: [],
  addPreviousState: (snapshot) => {
    set((state) => ({
      previousStates: [...state.previousStates, snapshot],
    }));
  },

  actionsDispatched: [],
  addActionDispatched: (snapshot) =>
    set((state) => ({
      actionsDispatched: [...state.actionsDispatched, snapshot],
    })),
  resetState: () => {
    // const curr = get();
    // console.log('state is: ', curr.previousStates)
    // console.log('first is: ', curr.previousStates[0])
    set((state) => ({
      previousStates: [],
      actionsDispatched: [],
    }));
  },
}));

export default useExtensionStore;
