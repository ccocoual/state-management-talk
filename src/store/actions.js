import { SET_SLIDES_COUNT, SET_CURRENT_SLIDE } from './types';

export function setSlidesCount({ commit }, slidesCount) {
    commit(SET_SLIDES_COUNT, slidesCount);
}

export function setCurrentSlide({ commit }, currentSlide) {
    commit(SET_CURRENT_SLIDE, currentSlide);
}
