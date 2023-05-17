<template>
  <v-dialog v-model="showOverlay" persistent maxWidth="300">
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ overlayText }}</span>
      </v-card-title>
      <v-card-actions>
        <v-btn color="primary" text @click="hideOverlay">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import router from "@/router";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ResultOverlay",
  computed: {
    ...mapGetters(["showOverlay", "overlayText"]),
  },
  methods: {
    ...mapMutations(["toggleOverlay"]),
    hideOverlay() {
      router.push({ name: "frontPage" });
      this.toggleOverlay();
    },
  },
};
</script>
