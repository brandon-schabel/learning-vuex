<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'; 
    export default {


        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ])
            /*
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