<script setup lang="ts" name="App">
import {ref} from 'vue'
import { RouterView ,RouterLink} from 'vue-router';

const myText=ref('')


</script>

<template>
<RouterLink :to="{path:'/a'}" active-class="test">111</RouterLink>
  <RouterView>
  </RouterView>
</template>

<style>
.test{
  width: 100px;
  height: 100px;
  background-color: pink;
}
</style>