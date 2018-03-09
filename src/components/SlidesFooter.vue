<template>
  <div class="SlidesFooter">
      {{prop}}
    <div class="pagination">{{ currentSlide }}/{{ slidesCount }}</div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'SlidesFooter',
    data() {
        return {
            prop: 'SlidesFooter',
        };
    },
    computed: mapState(['currentSlide', 'slidesCount']),
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SlidesFooter {
    position: fixed;
    bottom: 0;
    padding: 5px;
    width: 100%;
}
</style>