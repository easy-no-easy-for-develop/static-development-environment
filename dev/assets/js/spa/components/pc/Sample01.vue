<template>
     <div>
        <p>{{ msg }}</p>
        <router-link to="sample02">sample02</router-link>
    </div>
</template>

<script>
export default {
    name: 'Sample01',
    data () {
        return {
            msg: 'sample01'
        }
    }
}
</script>
