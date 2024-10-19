<template>
    <div>
        <h1>Tao Mon AN</h1>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name:" class="form-label">name:</label>
                <input type="" class="form-control" v-model="monan.name" required>
            </div>
            <div class="form-group">
                <label for="price:" class="form-label">price</label>
                <input type="number" class="form-control" v-model="monan.price" required>
            </div>
            <div class="form-group">
                <label for="description:" class="form-label">description</label>
                <input type="text" class="form-control" v-model="monan.description" required>
            </div>
            <div class="form-group">
                <label for="image:" class="form-label">image:</label>
                <input type="" class="form-control" v-model="monan.image" required>
            </div>
            <button type="submit" class="btn btn-primary">Xac Nhan Them</button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import instanceAxios from '@/ultis/configAxios';
    import { useRouter } from 'vue-router';

    const monan = ref({
        name: '',
        price: '',
        description: '',
        image: '',
 })

 const router = useRouter()

 const handleSubmit = async () => {
     await instanceAxios.post('/monans', monan.value)
     router.push({name: 'home'})
 }
</script>

<style lang="scss" scoped>

</style>