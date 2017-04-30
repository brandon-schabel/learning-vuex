<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <app-another-counter></app-another-counter>

                <hr>
                <input type="text" :value="value" @input="updateValue">
                <p> {{value}} </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import AnotherCounter from './components/AnotherCounter.vue';

    export default {
        data() {
            return {
                counter: 0
            }
        },
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult: AnotherResult,
            appAnotherCounter: AnotherCounter,
        },
        computed: {
            /*value() {
                //this will get the value of "value" in our state
                return this.$store.getters.value;
            } */
            //instead of using the long way of getting and updating the value, we can use a getter and setter
            value: {
                get() {
                    return this.$store.getters.value;
                },
                set() {
                    this.$store.dispatch('updateValue',value);
                }
            }
        },
        methods: {
            updateValue(event) {
                // when we call this method and we update value it will also update in the state
                this.$store.dispatch('updateValue', event.target.value);
            }
        }
    }
</script>

