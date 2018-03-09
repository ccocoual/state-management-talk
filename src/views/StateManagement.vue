<template>
  <div id="StateManagement">
			<introduction></introduction>
			<component-design></component-design>
  </div>
</template>
<script>
import eagle from 'eagle.js';

import { Introduction, ComponentDesign } from '@/components';

export default {
    mixins: [eagle.slideshow],
    infos: {
        title: 'Frontend state management',
        description: 'Introduction to frontend state management',
        path: 'introduction',
    },
    components: {
        Introduction,
        ComponentDesign,
    },
    methods: {
        updateSlides: function() {
            this.currentSlideIndex = +this.$store.state.route.params.slide;
            this.$nextTick(() => {
                this.step = +this.$store.state.route.params.step;
            });
            this.$store.dispatch('setCurrentSlide', this.currentSlideIndex);
        },
        updateURL: function() {
            this.$router.push(`/${this.$store.state.route.path.split('/')[1]}/${this.currentSlideIndex}/${this.step}`);
        },
    },
    watch: {
        $route: 'updateSlides',
        step: 'updateURL',
        currentSlideIndex: 'updateURL',
    },
    created() {
        this.$store.dispatch('setCurrentSlide', +this.$store.state.route.params.slide);
    },
    mounted() {
        this.$store.dispatch('setSlidesCount', this.slides.length);
    },
};
</script>
<style scoped lang="less">
#StateManagement {
}
</style>