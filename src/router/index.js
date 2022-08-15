import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import LabelsView from "../views/Labels/LabelsView.vue";
import AddLabelView from "../views/Labels/AddLabelView.vue";
import EditLabelView from "../views/Labels/EditLabelView.vue";

import TasksView from "../views/Tasks/TasksView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/labels",
    name: "labels",
    component: LabelsView,
  },
  {
    path: "/labels/add-label",
    name: "add-label",
    component: AddLabelView,
  },
  {
    path: "/labels/edit-label/:labelId",
    name: "edit-label",
    component: EditLabelView,
    props: true,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
