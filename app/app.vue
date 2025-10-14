<script setup lang="ts">
import { onMounted } from 'vue';
import axios from 'axios';

onMounted(async () => {
  const res = await axios.get('/api/helloWorld');
  console.log(res);
});

</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
