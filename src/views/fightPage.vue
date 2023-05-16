<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row class="card-group">
          <v-col cols="4">
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Karta</h3>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card class="empty-card">
              <p>Pusto</p>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Karta</h3>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Karta</h3>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Karta</h3>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Karta</h3>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Karta</h3>
                </div>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.card-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  justify-items: center;
  align-items: center;
}

.empty-card {
  height: 200px; /* Ustaw odpowiednią wysokość dla pustej karty */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
}
</style>
