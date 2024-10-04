<template>
<div class="container">
    <HospitalTop></HospitalTop>
    <div class="content"></div>
    <HospitalBottom></HospitalBottom>
</div>
</template>

<script lang="ts" setup name="App">
import HospitalBottom from './components/HospitalBottom.vue';
import HospitalTop from './components/HospitalTop.vue';
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
        width: 1200px;
        height: 2000px;
        background-color: pink;
        margin-top: 70px;
    }
}
</style>
