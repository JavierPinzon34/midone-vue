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
    parkings: [],
    deposits: [],
    allRow: 0
  };
};

// mutations
const mutations = {
  setFloors(state, data) {
    state.floors = data;
    state.allRow = data.length;
  },
  setParkings(state, data) {
    state.parkings = data;
  },
  setDeposits(state, data) {
    state.deposits = data;
  }
};

// actions
const actions = {
  getFloors: async function({ commit }, param) {
    const data = await axios.get("/divisions", { params: { type: param } });
    commit("setFloors", data.data);
  },
  getParkings: async function({ commit }, param) {
    const data = await axios.get("/divisions", {
      params: {
        type: param.type,
        buildings_id: param.buildings_id
      }
    });
    commit("setParkings", data.data);
  },
  getDeposits: async function({ commit }, param) {
    const data = await axios.get("/divisions", {
      params: {
        type: param.type,
        buildings_id: param.buildings_id
      }
    });
    commit("setDeposits", data.data);
  }
};

const getters = {
  allFloors: state => {
    return state.floors.content;
  },
  allParkings: state => {
    return state.parkings.content;
  },
  allDeposits: state => {
    return state.deposits.content;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
