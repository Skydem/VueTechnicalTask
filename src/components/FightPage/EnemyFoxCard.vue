<template>
  <FightColumn>
    <FoxCard :class="enemyFoxCardClass">
      <template #image>
        <v-img :src="enemyFox.img" cover height="30vh"></v-img>
      </template>
      <template #title>
        {{ enemyFox.title }}
      </template>
      <template #attack>
        {{ enemyFox.stats.attack }}
      </template>
      <template #health>
        {{ enemyFox.stats.health }}
      </template>
    </FoxCard>
  </FightColumn>
</template>

<script>
import FightColumn from "./FightColumn.vue";
import FoxCard from "../FoxCard.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "EnemyFoxCard",
  components: { FightColumn, FoxCard },
  computed: {
    ...mapGetters(["enemyFox", "enemyFoxCardClass"]),
  },
  data() {
    return {
      enemyFox: {
        title: "Michael",
        img: "https://randomfox.ca/images/4.jpg",
        stats: {
          attack: 5,
          health: 4,
        },
      },
    };
  },
  methods: {
    ...mapActions(["rollFox"]),
    ...mapMutations(["saveEnemyFox"]),
  },
  beforeMount() {
    this.rollFox(this.enemyFox);
    this.saveEnemyFox(this.enemyFox);
  },
};
</script>
