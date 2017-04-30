<template>
    <div>
        <button class="btn btn-primary" @click="increment(50)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations, mapActions} from 'vuex'; 
    export default {


        methods: {
            /*
            ...mapMutations([
                'increment',
                'decrement'
            ]) */
            ...mapActions([
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