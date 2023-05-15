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
          <!-- <v-row align="center" justify="center" class="card-group">
              <v-col cols="12" md="4">
                <h1>SEKCJA 2</h1>
              </v-col>
            </v-row> -->
          <v-row align="center" justify="center">
            <v-col cols="12" md="4">
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Karta 1</h3>
                  </div>
                </v-card-title>
                <v-card-text>
                  <p>Treść karty 1.</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn> CLICK ME PLEASE! </v-btn>
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
export default {
  name: "App",
  data() {
    return {
      test: "kappa",
    };
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
