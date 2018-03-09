<template>
  <div id="app">
    <router-view/>
    <slides-footer></slides-footer>
  </div>
</template>

<script>
import { SlidesFooter } from '@/components';

export default {
    name: 'App',
    components: {
        SlidesFooter,
    },
};
</script>

<style lang="less">
body {
    overflow-x: hidden;
    overflow-y: hidden;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
