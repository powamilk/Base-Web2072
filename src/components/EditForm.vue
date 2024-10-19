<template>
    <div>
        <h1>Tao Mon AN</h1>
        <form @submit.prevent="handleUpdate">
            <div class="form-group">
                <label for="name" class="form-label">name:</label>
                <input type="" class="form-control" v-model="monan.name" required>
            </div>
            <div class="form-group">
                <label for="price" class="form-label">price</label>
                <input type="number" class="form-control" v-model="monan.price" required>
            </div>
            <div class="form-group">
                <label for="description" class="form-label">description</label>
                <input type="text" class="form-control" v-model="monan.description" required>
            </div>
            <div class="form-group">
                <label for="image" class="form-label">image</label>
                <input type="" class="form-control" v-model="monan.image" required>
            </div>
            <button type="submit" class="btn btn-primary">Xac Nhan Them</button>
        </form>
    </div>
</template>

<script setup>
   import { ref, onMounted } from 'vue'
  import instanceAxios from '@/ultis/configAxios'
  import { useRoute, useRouter } from 'vue-router'


 const route = useRoute()
 const router = useRouter()
 const monan = ref({})

 const fetchMonAn = async () => {
    const response = await instanceAxios.get(`/monans/${route.params.id}`)
    monan.value = response.data
 }

 const handleUpdate = async () => {
    await instanceAxios.put(`/monans/${monan.value.id}`, monan.value)
    router.push({name: 'home'})
 }

 onMounted(fetchMonAn)


</script>

<style lang="scss" scoped>

</style>