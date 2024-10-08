<template>
  <div class="search-container">
    <input type="text" placeholder="请你输入医院名称">
    <button>
      搜索
    </button>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.search-container {
  display: flex;
  justify-content: center;
  height: 40px;
  margin-top: 20px;

  input {
    width: 800px;
    background-color: white;
    padding-left: 15px;
    margin-right: 10px;
    border: 2px solid white;
    border-radius: 10px;
    font-size: 14px;
    box-shadow: 0px 0px 2px 2px rgba($color: #b2b2b247, $alpha: 0.3);

    &::placeholder {
      color: #bbb;
    }

    &:focus {
      outline: none;
      border: 2px solid #55a6fe;
    }
  }

  button {
    width: 100px;
    color: white;
    background-color: #55a6fe;
    border-radius: 10px;
    box-shadow: 0px 0px 2px 2px rgba($color: #b2b2b247, $alpha: 0.3);
  }
}
</style>