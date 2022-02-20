import Home from './components/Home';
import Header from './components/Header';

/** подзагрузка компонентов через вебпак */
/** старая версия использования - новая через import */
const User = (resolve) => {
    require.ensure(['@user-components/User'], (require) => {
        resolve(require('@user-components/User'));
    }, 'user');
    // 'user' - аргумент, который сгруппирует бандлы в которых он указан в 1 бандл
};

const UserStart = (resolve) => {
    require.ensure(['@user-components/UserStart'], (require) => {
        resolve(require('@user-components/UserStart'));
    });
};

const UserDetail = (resolve) => {
    require.ensure(['@user-components/UserDetail'], (require) => {
        resolve(require('@user-components/UserDetail'));
    });
};

const UserEdit = (resolve) => {
    require.ensure(['@user-components/UserEdit'], (require) => {
        resolve(require('@user-components/UserEdit'));
    });
};
/** ===== */

const ROUTE_HOME = 'home';
const ROUTE_USERS = 'users';
const ROUTE_USER_DETAIL = 'userDetail';
const ROUTE_USER_EDIT = 'userEdit';

const routes = [
    {
        path: '/',
        name: ROUTE_HOME,
        components: {
            default: Home,
            'header-top': Header,
        },
    },
    {
        /**
         * для роутов, в которых есть чилдрены,
         * имя для корневого роута не прописываются
         */
        path: '/users',
        components: {
            default: User,
            'header-bottom': Header,
        },
        children: [
            {
                path: '/users',
                component: UserStart,
                name: ROUTE_USERS,
                // route middleware
                beforeEnter: (to, from, next) => {
                    console.log('route middleware');
                    next(); //вызывается всегда
                },
            },
            {
                path: ':id',
                component: UserDetail,
                name: ROUTE_USER_DETAIL,
            },
            {
                path: ':id/edit',
                component: UserEdit,
                name: ROUTE_USER_EDIT,
            },
        ],
    },
    {
        path: '/redirect-me',
        redirect: {
            name: ROUTE_USERS,
        },
    },
    {
        // как бросить 404
        path: '*',
        redirect: {
            name: ROUTE_HOME,
        }
    }
];

export {
    ROUTE_HOME,
    ROUTE_USERS,
    ROUTE_USER_DETAIL,
    ROUTE_USER_EDIT,
    routes,
};