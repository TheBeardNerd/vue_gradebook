import Home from './components/Home.vue';
import allStudents from './components/allStudents.vue';
import allAssignments from './components/allAssignments.vue';

const routes = [
    { path: '/', component: Home},
    { path: '/all-students', component: allStudents},
    { path: '/all-assignments', component: allAssignments}
];

export default routes;