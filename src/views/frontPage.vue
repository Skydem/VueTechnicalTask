<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-sheet class="section" v-scroll-snap="{ mandatory: true }">
          <v-row align="center" justify="center">
            <v-col cols="12">
              <h1 class="title">Tomasz Torbus Technical Task</h1>
            </v-col>
          </v-row>
        </v-sheet>
        <v-sheet class="section" v-scroll-snap="{ mandatory: true }">
          <v-row align="center" justify="center">
            <v-col cols="12" md="4" v-for="(card, index) in cards" :key="index">
              <v-card>
                <v-img height="300" :src="card.img" cover></v-img>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{ card.title }}</h3>
                  </div>
                </v-card-title>
                <v-card-text>
                  <p>{{ card.content }}</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn variant="flat" color="info"> Select fox! </v-btn>
                  <v-btn @click="test(card)"> Roll the fox. </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
        <v-sheet class="section" v-scroll-snap="{ mandatory: true }">
          <v-row align="center" justify="center">
            <v-col cols="12">
              <h1 class="title">SEKCJA 3</h1>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      cards: [
        {
          title: "title1",
          content: "simple content",
          img: "https://randomfox.ca/images/4.jpg",
        },
        {
          title: "title2",
          content: "simple content",
          img: "https://randomfox.ca/images/21.jpg",
        },
        {
          title: "title3",
          content: "simple content",
          img: "https://randomfox.ca/images/37.jpg",
        },
        // {
        //   title: "title4",
        //   content: "simple content",
        // },
      ],
    };
  },
  methods: {
    async getPic() {
      const getResponse = await axios.get("https://randomfox.ca/floof/");
      const newPic = getResponse.data.image;
      console.log("Got new floof", newPic);
      return newPic;
    },
    async test(key) {
      console.log(`Got card! ${key}`);
      const newPic = await this.getPic();
      console.log("New pic!", newPic);
      key.img = newPic;
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

.section {
  height: 100vh;
  scroll-snap-align: start;
}
.title {
  font-size: 32px;
  text-align: center;
  margin-top: 50vh;
  transform: translateY(-50%);
}
.card-group {
  /* height: 100%; */
  justify-content: center;
  align-items: center;
  margin-top: 50vh;
  transform: translateY(-50%);
}
</style>
