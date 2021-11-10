const state = {
    user: JSON.parse(sessionStorage.getItem('USER')),
    isConnected: sessionStorage.getItem('USER') != null
}

const getters = {
    user(state) {
        return state.user;
    },
    isConnected(state) {
        return state.isConnected;
    }
}

const mutations = {
    loginMut(state, payload) {
        state.user = payload;
        state.isConnected = true;
    },
    logoutMut(state) {
        state.user = null;
        state.isConnected = false;
    }
}

const actions = {
    login(context, login, password) {
        //appel serveur auth
        const user = { name: 'Bob', login: login, token: 'DSGSQ56EZ6YZETGS', role: 'admin' };
        context.commit('loginMut', user);
        sessionStorage.setItem('USER', JSON.stringify(user));
    },
    logout(context) {
        context.commit('logoutMut');
        sessionStorage.removeItem('USER');
    }
}

export default { state, getters, mutations, actions };