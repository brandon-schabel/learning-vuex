import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        },
        value: state => {
            return state.value;
        }
    },
    mutations: {
        //mutations happen synchronously
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        },
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions: {
        //actions can be used in mutations so you can run async code within mutations if you need
        /*
        increment: context => {
            //this would run the mutation increment, but if we needed to we could add a delay or 
            //something along those lines to make it async
            context.commit('increment');
        } */

        //with es6, and you only want to use the commit method in the context
        // payload is data you can pass in to the state, so for example we could 
        // change the value to increase by 100 on each click of the button
        increment: ({ commit }, payload) => {
            commit('increment', payload);
        },
        decrement: ({ commit }, payload) => {
            commit('decrement', payload);
        },
        //below it would set a delay of 1 second before calling increment
        asyncIncrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('increment', payload.by);
            }, payload.duration);
        },

        asyncDecrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by);
            }, payload.duration);
            //.duration and .by are in an object that we can pass in, they're optional parameters
        },
        updateValue: ({ commit }, payload) => {
            commit('updateValue', payload)
        }
    }
});