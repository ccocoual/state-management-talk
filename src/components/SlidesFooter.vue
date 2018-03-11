<template>
  <div class="SlidesFooter">
    <a class="tagname" @click="openLink()" href="https://www.twitter.com/ccocoual" target="_blank">@ccocoual</a>
    <div class="pagination">{{ getPagination }}</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'SlidesFooter',
    computed: mapGetters(['getPagination']),
    methods: {
        openLink() {
            window.open('https://www.twitter.com/ccocoual', '_blank');
        },
    },
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
        text-decoration: none;
        font-weight: bold;
        &:visited,
        &:hover,
        &:active {
            color: inherit;
        }
    }
}
</style>
