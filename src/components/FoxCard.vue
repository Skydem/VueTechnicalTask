<template>
  <v-card class="justify-self-end">
    <div class="d-flex flex-no-wrap justify-space-start">
      <slot name="image"></slot>
      <div class="px-4 my-auto">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              <slot name="title"></slot>
            </h3>
          </div>
        </v-card-title>

        <v-card-text>
          <p>
            Attack:
            <slot name="attack"></slot>
          </p>
          <p>
            Health:
            <slot name="health"></slot>
          </p>
        </v-card-text>

        <v-card-actions v-if="isFrontPage" class="flex-wrap">
          <v-btn @click="rollFox(singleFox)"> Next! </v-btn>
          <v-btn variant="flat" color="info" @click="saveFox(singleFox)">
            Select!
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
// import router from "@/router";
// import axios from "axios";
import { mapActions } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "FoxCard",
  props: {
    singleFox: {
      type: Object,
      required: true,
    },
    isFrontPage: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions(["rollFox"]),
    ...mapMutations(["saveFox"]),
  },
};
</script>
