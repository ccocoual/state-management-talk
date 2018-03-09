import { SET_SLIDES_COUNT, SET_CURRENT_SLIDE } from './types';

export default {
    [SET_SLIDES_COUNT](state, slidesCount) {
        state.slidesCount = slidesCount;
    },
    [SET_CURRENT_SLIDE](state, currentSlide) {
        state.currentSlide = currentSlide;
    },
};
