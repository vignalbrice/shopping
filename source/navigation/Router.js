import Cart from '../screens/Cart';
import CheckEmail from '../screens/CheckEmail';
import Explore from '../screens/Explore.js';
import Profile from '../screens/Profile';
import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';


const stack = [{
    key: 1,
    components: Welcome,
}, {
    key: 2,
    components: SignUp,
}, {
    key: 3,
    components: CheckEmail,
}];

const tabs = [{
    key: 1,
    components: Explore
}, {
    key: 2,
    components: Cart
}, {
    key: 1,
    components: Profile
}]

export { stack, tabs };