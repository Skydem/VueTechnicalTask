// Utilities
import { createStore } from "vuex";

export default createStore({
  state: {
    fox: [],
  },
  actions: {
    saveFox({ commit }, foxArray) {
      console.log("Got fox?", foxArray);
      console.log(foxArray);
      this.state.fox = foxArray;
    },
  },
});
