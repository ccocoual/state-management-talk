<template>
<eg-transition :enter='enter' :leave='leave' v-if='active'>
    <div id="StoreSolution">
        StoreSolution
    </div>
</eg-transition>
</template>

<script>
import eagle from 'eagle.js';

export default {
    name: 'StoreSolution',
    mixins: [eagle.slide],
    props: {
        enter: { default: 'fadeInRight' },
        leave: { default: 'fadeOutLeft' },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
