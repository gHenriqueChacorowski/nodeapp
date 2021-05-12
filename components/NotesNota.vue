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
          <li v-for="(item, index) of nota.checklists" :key="index">
            <notes-checklist
              :concluida="item.concluida"
              :descricao="item.descricao"
            ></notes-checklist>
          </li>
          <li>
            <notes-checklist
              :concluida="checklist.concluida"
              :descricao="checklist.descricao"
            ></notes-checklist>
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
  name: "notes-nota",
  props: {
    id: Number
  },
  data() {
    return {
      nota: {
        titulo: null,
        descricao: null,
        // checklists: [
        //   {
        //     descricao: "Teste 1",
        //     concluida: 1,
        //   },
        //   {
        //     descricao: "Teste 2",
        //     concluida: 0,
        //   },
        // ],
        // tags: ["Tag 1", "Tag 2"],
      },
      checklist: {
        descricao: null,
        concluida: 0,
      },
    };
  },
  // asyncData({ store }) {

  // },
  methods: {
    async adicionar() {
      const notaSaved = await this.$store.dispatch("nota/add", this.nota);

      this.$router.push(`/nota/edit/${notaSaved.id}`);
    },
    async carregar() {
      const { data } = await this.$axios.get(`nota/${this.id}`);
      
      this.nota = data;
    }
  },
  async mounted() {
    if (this.id) {
      await this.carregar();
    }
  }
};
</script>

<style>
.titulo {
  font-weight: 600;
}
</style>