import Vue from "vue";
import Vuex from "vuex";
import cookieparser from "cookieparser"; // thêm cái này để parse cookie

import {
  state as state1,
  mutations as mutations1,
  actions as actions1,
} from "./modules/users";

import {
  state as state2,
  mutations as mutations2,
  actions as actions2,
} from "./modules/danhmucs";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      // state gốc nếu cần
    },
    mutations: {
      // mutation gốc nếu cần
    },
    actions: {
      async nuxtServerInit({ dispatch, commit }, { req }) {
        console.log("nuxtServerInit chạy trên server...");

        // if (req.headers.cookie) {
        //   const parsed = cookieparser.parse(req.headers.cookie);
        //   const token = parsed.token;

        //   if (token) {
        //     // Gọi action từ users module để fetch user info nếu cần
        //     await dispatch("users/fetchUserFromToken", token);
        //   }
        // }
      },
    },
    modules: {
      users: {
        namespaced: true,
        state: state1,
        mutations: mutations1,
        actions: actions1,
      },
      danhmucs: {
        namespaced: true,
        state: state2,
        mutations: mutations2,
        actions: actions2,
      },
    },
  });

export default store;
