<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const fetchData = ref();

onMounted(async () => {
  const res = await axios.get('/api/posts');
  fetchData.value = res;
});

</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />

    {{ fetchData }}
  </div>
</template>
