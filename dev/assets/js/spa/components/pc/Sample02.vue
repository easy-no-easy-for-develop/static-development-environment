<template>
    <div>
        <p>{{ msg }}</p>
        <router-link to="sample01">sample01</router-link>
    </div>
</template>

<script>
export default {
    name: 'Sample02',
    data () {
        return {
            msg: 'sample02'
        }
    }
}
</script>
