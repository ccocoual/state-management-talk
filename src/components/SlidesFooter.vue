<template>
  <div class="SlidesFooter">
      <div class="tagname">
          <a href="https://www.twitter.com/ccocoual" target="_blank">@ccocoual</a>
      </div>
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
<style lang="less" scoped>
.SlidesFooter {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    .tagname {
    }
    .pagination {
    }
}
</style>
