<template>
  <div v-if="country">
    <v-card
      :title="country.name.common"
      :subtitle="`Population are ${country.population} peoples`"
      :text="`Code cca3: ${country.cca3}`"
      variant="tonal"
    >
      <v-img :src="country.flags.png" :aly="country.flags.alt" cover></v-img>
      <v-card-actions>
        <template v-if="country.borders">
          <div class="border-title">Сodes of bordering countries:</div>
          <div v-for="border in country.borders" :key="border">
            <v-btn @click="goToCountry(border)">{{ border }}</v-btn>
          </div>
        </template>
        <template v-else>No bordering countries</template>
      </v-card-actions>
      <a :href="country.maps.googleMaps" target="_blank" class="link-map"
        >Open in google map</a
      >
      <v-spacer />
    </v-card>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const props = defineProps({
  country: {
    type: Object,
  },
});

const goToCountry = (countryName: string) => {
  router.push(`/countries/${countryName}`);
};
</script>

<style lang="scss">
.v-card {
  max-width: 600px;
  margin: 0 auto;

  .v-card-actions {
    flex-wrap: wrap;
    padding: 20px;

    .border-title {
      flex-basis: 100%;
      min-width: 100%;
    }
  }

  .link-map {
    padding: 20px;
    text-decoration: underline;
  }

  .v-spacer {
    height: 20px;
  }
}
</style>
