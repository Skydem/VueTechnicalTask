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
};

const getters = {
  choosenFox: (state) => {
    return state.fox;
  },
};

const mutations = {
  saveFox({ commit }, foxArray) {
    this.state.fox = foxArray;
    router.push({ name: "fightPage" });
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
