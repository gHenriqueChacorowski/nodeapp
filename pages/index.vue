<template>
  <div class="container">
    <p v-if="$fetchState.pending" class="text-center">Carregando ...</p>
    <p v-else-if="$fetchState.error" class="text-center">Ocorreu um erro :</p>
    <div v-else class="row">
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
      notas: []
    };
  },
  async fetch() {
    this.notas = await this.$axios
      .get("nota/usuario/1")
  }
}
</script>

<style>
.card {
  min-height: 15rem;
}
</style>
