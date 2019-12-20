import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    imagePath: "/img/",
}

const getter = {
    getImagePath() {
        console.log(this.imagePath)
        return this.imagePath;
    }
}

export default {
    state,
    getter,
}
