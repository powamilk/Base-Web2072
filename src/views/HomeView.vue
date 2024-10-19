<template>
  <main class="table-group">
     <RouterLink to="/create" class="btn btn-primary">Tao mon an</RouterLink>
     <table class="table">
     <thead>
       <tr>
          <td>Id</td>
          <td>Ten Mon an</td>
          <td>Gia</td>
          <td>Mo ta</td>
          <td>Image</td>
       </tr>
     </thead>
     <tbody>
      <tr v-for="monan in monans" :key="monan.id">
        <td>{{ monan.id }}</td>
        <td>{{ monan.name }}</td>
        <td>{{ monan.price }}</td>
        <td>{{ monan.description }}</td>
        <td>{{ monan.image }}</td>
        <td>
          <RouterLink :to="{name: 'detail', params: { id: monan.id}}" class="btn btn-info">View</RouterLink>
          <RouterLink :to="{name: 'edit', params: { id: monan.id}}" class="btn btn-warning">Edit</RouterLink> 
          <button class="btn btn-danger" @click="handleDelete(monan.id)">Delete</button>
        </td>
      </tr>
     </tbody>
    </table>
  </main>
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    import instanceAxios from '@/ultis/configAxios';

    const monans = ref([])

    const fetchMonAns = async () => {
      const response = await instanceAxios.get('/monans')
       monans.value = response.data
    }

    const handleDelete = async (id) => {
       const isConfirm = confirm('Bạn có muốn xóa')
       if(!isConfirm) return
       await instanceAxios.delete(`/monans/${id}`)
       fetchMonAns()
     }

     onMounted(fetchMonAns)
</script>

<style lang="scss" scoped>

</style>