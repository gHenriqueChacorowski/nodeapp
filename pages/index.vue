<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3" v-for="nota of notas" :key="nota.id">
        <div class="card bg-warning my-3">
          <div class="card-body">
            <h5 class="card-title">{{ nota.titulo }}</h5>
            <p v-if="nota.descricao" class="card-text">
              {{ nota.descricao }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notas: [
        {
          id: 1,
          titulo: "Título da nota",
          descricao: "Descrição da nota"
        },
        {
          id: 2,
          titulo: "Título da nota 2",
          descricao: null
        }
      ]
    }
  }
}
</script>

<style>
.card {
  min-height: 15rem;
}
</style>
