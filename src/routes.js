import Home from './components/Home'
// import Works from './components/Works'
import About from './components/About'
// import Login from './components/Login'
// import MapDisplay from './components/MapDisplay'

const routes = [
    {
        path: '/',
        exact: true,
        label: 'Home',
        component: Home
    },

    {
        path: '/about',
        exact: false,
        label: 'About',
        component: About
    }
    // ,
    // {
    //     path: '/private',
    //     exact: false,
    //     label: null,
    //     component: Login
    // }

]

export default routes