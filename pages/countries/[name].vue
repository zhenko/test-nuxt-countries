<template>
  <h1>Country page</h1>
  <Country v-if="country !== null" :country="country" />
</template>
<script setup lang="ts">
interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
    alt: string;
  };
  population: number;
  cca3: string;
  borders: string[];
  maps: {
    googleMaps: string;
  };
}

const router = useRouter();

const { params } = router.currentRoute.value;

const useAsyncData = async () => {
  const country = ref<Country | null>(null);
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${params.name}`
    );
    const data = await response.json();
    country.value = data[0];
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
  console.log("country", country);
  return { country };
};

const { country } = await useAsyncData();
</script>

<style lang="scss">
h1 {
  font-size: 30px;
}
</style>
