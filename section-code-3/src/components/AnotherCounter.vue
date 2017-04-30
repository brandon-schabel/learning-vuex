<template>
    <div>
        <!-- below the increment(100), the (100) is the payload that we want to pass, the seocnd argument is the duration 
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>-->
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations, mapActions} from 'vuex'; 
    export default {


        methods: {
            //the only reason to use actions instead of mutations directly is if you need
            // to run async code
            /*
            ...mapMutations([
                'increment',
                'decrement'
            ])*/

            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ]),

            /*
            // 
            increment(by) {
                this.$store.dispatch('increment', by);
            },
            increment() {
                //this.$store gives us access to the central store
                //this.$store.state.counter++;
                //instead of using code inside here we can do it using mutations from the state
                this.$store.commit('increment');
            },
            decrement() {
                //this.$store.state.counter--;
                this.$store.commit('decrement');
            }
            */
        }
    }
</script>