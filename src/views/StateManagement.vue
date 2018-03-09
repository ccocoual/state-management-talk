<template>
  <div id="home">
      <slide steps="1">
          <introduction></introduction>
      </slide>
      <slide steps="2">
          <component-design></component-design>
      </slide>
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
};
</script>