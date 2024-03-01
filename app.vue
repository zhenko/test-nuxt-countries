<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "CountriesDirectory",
  meta: [
    {
      name: "CountriesDirectory description",
      content: "CountriesDirectory SPA SSR.",
    },
  ],
});
</script>
