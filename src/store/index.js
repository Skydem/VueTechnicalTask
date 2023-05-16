// Utilities
import { createStore } from "vuex";

export default createStore({
  state: {
    fox: {
      title: "John Doe",
      img: "https://randomfox.ca/images/37.jpg",
      stats: {
        attack: 1,
        health: 1,
      },
    },
  },
  actions: {
    saveFox({ commit }, foxArray) {
      console.log("Got fox?", foxArray);
      console.log(foxArray);
      this.state.fox = foxArray;
    },
  },
  getters: {
    choosenFox: (state) => {
      return state.fox;
    },
  },
});
