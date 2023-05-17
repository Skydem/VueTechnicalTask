<template>
  <FightColumn>
    <FoxCard :class="yourFoxCardClass">
      <template #image>
        <v-img :src="choosenFox.img" cover height="30vh"></v-img>
      </template>
      <template #title>
        {{ choosenFox.title }}
      </template>
      <template #attack>
        {{ choosenFox.stats.attack }}
      </template>
      <template #health>
        {{ choosenFox.stats.health }}
      </template>
    </FoxCard>
  </FightColumn>
</template>

<script>
import FightColumn from "./FightColumn.vue";
import FoxCard from "../FoxCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "FightYourFox",
  components: { FightColumn, FoxCard },
  computed: {
    ...mapGetters(["choosenFox", "yourFoxCardClass"]),
  },
};
</script>
