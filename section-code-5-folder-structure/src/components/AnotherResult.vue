<template>
<div>
    <p>Counter is: {{ doubleCounter }}</p>


    <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters }from 'vuex';

    export default {
        //below we map all the getters instead of defining each one as a function
        computed: {
            //the 3 dots (spread operator)means pull out all the key value pairs of each computed property. this will allow us to create our own computed properties
            //remember to  install babel-preset-stage-2 and then add stage-2 to the .babelrc
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ])
        }
        /*
        counter() {
            return this.$store.getters.doubleCounter;
        }, 
        clicks() {
            return this.$store.getters.clicks;
        }  
        */
    }
</script>