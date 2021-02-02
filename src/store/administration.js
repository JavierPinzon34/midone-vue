//store para usuario
import axios from "axios";
//import Vuex from "vuex";
/* export default {
  state: {
    floors: [], //seguiminetos
    allRow: 0
  },
  mutations: {
    setFloors(state, data) {
      state.floors = data;
      state.allRow = data.length;
    }
  },
  actions: {
    getTracing: async function({ commit }, param) {
      const data = await axios.get("/buildings", { params: { type: param } });
      commit("setFloors", data.data);
    }
  },
  getters: {}
}; */
// state
const state = () => {
  return {
    floors: [],
    allRow: 0
  };
};

// mutations
const mutations = {
  setFloors(state, data) {
    state.floors = data;
    state.allRow = data.length;
  }
};

// actions
const actions = {
  getFloors: async function({ commit }, param) {
    const data = await axios.get("/divisions", { params: { type: param } });
    commit("setFloors", data.data);
  }
};

const getters = {
  allFloors: state => {
    return state.floors.content;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
