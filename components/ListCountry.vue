<template>
  <div class="cart-item">
    <h3>{{ country.name.common }}</h3>
    <NuxtImg :src="country.flags.svg" width="20" :alt="country.flags.alt" />
    <p>population: {{ country.population }} peoples</p>
    <p>code cca3: {{ country.cca3 }}</p>
    <p>
      <nuxt-link
        class="underline"
        :to="{
          path: `/countries/${country.cca3}`,
        }"
        >Link to {{ country.name.common }}</nuxt-link
      >
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  country: {
    type: Object,
  },
});
</script>

<style lang="scss">
.cart-item {
  list-style-type: none;
  border: 1px solid red;
  border-radius: 4px;
  box-shadow: 3px 3px 3px 3px greenyellow;
  padding: 20px;
}
</style>
