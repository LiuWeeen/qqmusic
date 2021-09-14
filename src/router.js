import Vue from "vue";
import VueRouter from "vue-router";
import Recommend from "./components/recommend/recommend";
import Singer from "./components/singer/singer";
import Rank from "./components/rank/rank";
import Search from "./components/search/search";
import SingerDetail from "./components/singer/singerDetail";
import RecommDetail from "./components/recommend/recommDetail";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/recommend"
    },
    {
      path: "/recommend",
      component: Recommend,
      children: [
        {
          path: ":dissid",
          component: RecommDetail
        }
      ]
    },
    {
      path: "/singer",
      component: Singer,
      children: [
        {
          path: ":fid",
          component: SingerDetail
        }
      ]
    },
    {
      path: "/rank",
      component: Rank
    },
    {
      path: "/search",
      component: Search
    }
  ]
})