<template>
  <div class="flex flex-col min-h-screen">
    <header class="text-2xl bg-red-500">
      <div class="container">
        <div>Header</div>
        <nav>
          <button type="button" class="button" @click="toMain">
            <v-icon
              size="large"
              color="green-darken-2"
              icon="mdi-home"
            ></v-icon>
            Main
          </button>
          <button type="button" class="button" @click="toBack">
            <v-icon
              size="large"
              color="green-darken-2"
              icon="mdi-arrow-left"
            ></v-icon>
            Back
          </button>
        </nav>
      </div>
    </header>
    <main class="flex-grow">
      <div class="container">
        <slot />
      </div>
    </main>
    <footer>
      <div class="container">
        <div>Footer</div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const toBack = () => {
  router.go(-1);
};

const toMain = () => {
  router.push("/");
};
</script>

<style lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
}

footer {
  height: 50px;
  background-color: pink;
}
main {
  margin-bottom: 20px;

  h1 {
    text-align: left;
    width: -webkit-fill-available;
  }
}

.button {
  font-size: 24px;
  display: inline-flex;
  align-items: baseline;
  column-gap: 10px;
  margin-right: 20px;

  i {
    font-size: 24px;
  }
}
</style>
