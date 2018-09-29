<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import Sample01 from './components/pc/Sample01.vue'
export default {
    name: 'app',
    components: {
        Sample01
    }
}
</script>