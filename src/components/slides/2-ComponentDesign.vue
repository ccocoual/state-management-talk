<template>
<eg-transition :enter='enter' :leave='leave' v-if='active'>
    <div id="ComponentDesign">
        ComponentDesign
        <ComponentPrinciple></ComponentPrinciple>
    </div>
</eg-transition>
</template>

<script>
import eagle from 'eagle.js';

import ComponentPrinciple from '@/components/viz/ComponentPrinciple.vue';

export default {
    name: 'ComponentDesign',
    mixins: [eagle.slide],
    props: {
        enter: { default: 'fadeInRight' },
        leave: { default: 'fadeOutLeft' },
    },
    components: {
        ComponentPrinciple,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
