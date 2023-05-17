import { createStore } from "vuex";
import axios from "axios";
import Card from "@/models/Card";
import Stats from "@/models/Stats";
import StatsGeneratingService from "@/services/StatsGeneratingService";
import router from "@/router";

const statsGeneratingService = new StatsGeneratingService();

const state = {
  fox: new Card(
    "John Doe",
    "https://randomfox.ca/images/37.jpg",
    new Stats(1, 1)
  ),
  enemyFox: new Card(
    "Lorem żapsum",
    "https://randomfox.ca/images/21.jpg",
    new Stats(1, 1)
  ),
  enemyFoxCardClass: "",
  yourFoxCardClass: "",
  showOverlay: false,
  overlayText: "You win! 🏆",
};

const getters = {
  choosenFox: (state) => {
    return state.fox;
  },
  enemyFox: (state) => {
    return state.enemyFox;
  },
  enemyFoxCardClass: (state) => {
    return state.enemyFoxCardClass;
  },
  yourFoxCardClass: (state) => {
    return state.yourFoxCardClass;
  },
  showOverlay: (state) => {
    return state.showOverlay;
  },
  overlayText: (state) => {
    return state.overlayText;
  },
};

const mutations = {
  saveFox({ commit }, foxArray) {
    this.state.fox = foxArray;
    router.push({ name: "fightPage" });
  },
  saveEnemyFox({ commit }, foxArray) {
    this.state.enemyFox = foxArray;
  },
  changeEnemyFoxCardClass({ commit }, newClass) {
    this.state.enemyFoxCardClass = newClass;
  },
  changeYourFoxCardClass({ commit }, newClass) {
    this.state.yourFoxCardClass = newClass;
  },
  toggleOverlay({ commit }, newText = "You win! 🏆") {
    this.state.showOverlay = !this.state.showOverlay;
    this.state.overlayText = newText;
  },
};

const actions = {
  async getPic() {
    try {
      const getResponse = await axios.get("https://randomfox.ca/floof/");
      return getResponse.data.image;
    } catch (e) {
      console.error(`getPic error: ${e}`);
      return "";
    }
  },
  async getName() {
    try {
      const getResponse = await axios.get(
        "https://random-data-api.com/api/v2/users"
      );
      return getResponse.data.first_name;
    } catch (e) {
      console.error(`getName error: ${e}`);
      return "";
    }
  },
  async rollFox({ dispatch }, card) {
    const newPic = await dispatch("getPic");
    const newName = await dispatch("getName");
    const getStats = statsGeneratingService.generate();
    card.img = newPic;
    card.title = newName;
    card.stats.attack = getStats.newAttack;
    card.stats.health = getStats.newHp;
  },
};

export default createStore({
  state,
  getters,
  mutations,
  actions,
});
