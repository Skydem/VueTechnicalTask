import { createStore } from "vuex";

const state = {
  fox: {
    title: "John Doe",
    img: "https://randomfox.ca/images/37.jpg",
    stats: {
      attack: 1,
      health: 1,
    },
  },
};

const actions = {
  saveFox({ commit }, foxArray) {
    console.log("Got fox?", foxArray);
    console.log(foxArray);
    this.state.fox = foxArray;
  },
};

const getters = {
    choosenFox: (state) => {
      return state.fox;
    },
};

export default createStore({
  state,
  actions,
  getters,
});
