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
    <h3>Test</h3>

    <NuxtRouteAnnouncer />
    <NuxtWelcome />

    {{ fetchData }}
  </div>
</template>
