<template>
  <div class="card bg-warning my-5">
    <div class="card-body">
      <b-form @submit.prevent="adicionar" autocomplete="off">
        <b-form-group>
          <b-form-input
            class="bg-warning border-0 titulo text-dark"
            v-model="nota.titulo"
            type="text"
            size="lg"
            placeholder="Título"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-textarea
            class="bg-warning border-0 text-dark"
            v-model="nota.descricao"
            placeholder="Descrição"
            rows="10"
            size="lg"
            required
            :autofocus="true"
          ></b-form-textarea>
        </b-form-group>

        <ul class="list-unstyled">
          <li v-for="(checklist, index) of nota.checklists" :key="index">
            <b-input-group class="mb2">
              <b-input-group-prepend is-text>
                <b-form-checkbox
                  class="mr-n2"
                  size="lg"
                  v-model="nota.checklists[index]['concluida']"
                />
              </b-input-group-prepend>
              <b-input
                class="bg-warning border-0 text-dark"
                v-model="nota.checklists[index]['descricao']"
                placeholder="Novo Item"
              />
            </b-input-group>
          </li>
        </ul>

        <b-input-group>
          <b-form-tags
            class="bg-warning border-0 text-dark"
            input-id="tags-basic"
            v-model="nota.tags"
          ></b-form-tags>
        </b-input-group>

        <b-button type="button" variant="warning">
          <b-icon icon="check2-square" />
        </b-button>
        <b-button type="button" variant="warning">
          <b-icon icon="tag" />
        </b-button>
        <b-button type="submit" variant="dark">Adicionar</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "home",
  data() {
    return {
      nota: {
        titulo: null,
        descricao: null,
        checklists: [
          {
            descricao: "Teste 1",
            concluida: true,
          },
          {
            descricao: "Teste 2",
            concluida: false,
          },
        ],
        tags: ["Tag 1", "Tag 2"],
      },
      checklist: {
        descricao: null,
        concluida: false,
      },
    };
  },
  methods: {
    async adicionar() {
      this.$store.dispatch("nota/add", this.nota);
    },
  },
};
</script>

<style>
.titulo {
  font-weight: 600;
}

.input-group-text {
  background-color: #ffc107;
  border-color: #ffc107;
}

.custom-control-input:checked ~ .custom-control-label::before {
  border-color: #343a40;
  background-color: #343a40;
}
</style>