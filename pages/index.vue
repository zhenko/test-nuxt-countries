<template>
  <h1>Catalog page</h1>
  <div class="search">
    Field search:
    <v-text-field label="Search country" v-model="searchText" />
    <v-icon
      v-if="searchText.length"
      size="large"
      color="green-darken-2"
      icon="mdi-close"
      @click="closeSearch"
    ></v-icon>
  </div>
  <div class="cart-container">
    <ListCountry
      v-for="country in filteredCountries"
      :key="country.name.common"
      :country="country"
    />
  </div>
</template>

<script lang="ts" setup>
interface Country {
  name: {
    common: string;
  };
  flags: {
    svg: string;
    alt: string;
  };
  population: number;
  cca3: string;
}

import { ref, computed } from "vue";

const searchText = ref("");

const useAsyncData = async () => {
  const countries = ref<Country[]>([]);

  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    countries.value = data;
  } catch (error) {
    console.error("Error:", error);
  }

  return { countries };
};

const { countries } = await useAsyncData();

const filteredCountries = computed(() => {
  const trimmedSearchText = searchText.value.trim();
  return countries.value.filter((country) =>
    country.name.common.toLowerCase().includes(trimmedSearchText.toLowerCase())
  );
});

const closeSearch = () => {
  searchText.value = "";
};
</script>

<style lang="scss">
h1 {
  font-size: 30px;
}

.search {
  display: flex;
  align-items: center;

  input {
    border-bottom: 2px solid red;
  }
}

.cart-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.v-input__control,
.v-field__field {
  width: 100%;
}
</style>
