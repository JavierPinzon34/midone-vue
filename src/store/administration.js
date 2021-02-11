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
    amenities: [],
    building: [],
    blogTypes: [],
    blogs: [],
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
  },
  setAmenities(state, data) {
    state.amenities = data;
  },
  setBuilding(state, data) {
    state.building = data;
  },
  setBlogType(state, data) {
    state.blogTypes = data;
  },
  setBlogs(state, data) {
    state.blogs = data;
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
  },
  getAmenities: async function({ commit }, param) {
    const data = await axios.get("/divisions", {
      params: {
        type: param.type,
        buildings_id: param.buildings_id
      }
    });
    commit("setAmenities", data.data);
  },
  getBuilding: async function({ commit }) {
    const data = await axios.get("/buildings");
    commit("setBuilding", data.data);
  },
  getBlogTypes: async function({ commit }) {
    const data = await axios.get("/blog-type");
    commit("setBlogType", data.data);
  },
  getBlogs: async function({ commit }) {
    const data = await axios.get("/blogs");
    commit("setBlogs", data.data);
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
  },
  allAmenities: state => {
    return state.amenities.content;
  },
  building: state => {
    return state.building.content;
  },
  blogTypes: state => {
    return state.blogTypes.content;
  },
  blogs: state => {
    return state.blogs.content;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
