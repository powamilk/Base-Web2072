<template>
     <div v-if="monan">
        <h2>Chi tiết Monan</h2>
        <p>Id: {{ monan.id }}</p>
        <p>Name: {{ monan.name }}</p>
        <p>Price: {{ monan.price }}</p>
        <p>description: {{ monan.description }}</p>
        <p>image:{{ monan.image }}</p>
        <p></p>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    import instanceAxios from '@/ultis/configAxios';
    import { useRoute } from 'vue-router';

 const route = useRoute()
 const monan = ref([])

 const fetchMonAn = async () => {
     const response = await instanceAxios.get(`/monans/${route.params.id}`)
     monan.value = response.data
 }

 onMounted(fetchMonAn)
</script>

<style lang="scss" scoped>

</style>