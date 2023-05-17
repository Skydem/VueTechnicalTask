<template>
  <v-card>
    <slot name="image"></slot>
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

    <v-card-actions v-if="isFrontPage">
      <v-btn variant="flat" color="info" @click="saveFox(singleFox)">
        Select fox!
      </v-btn>
      <v-btn @click="rollFox(singleFox)"> Next fox please! </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import router from "@/router";
import axios from "axios";
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
