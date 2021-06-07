<template>
  <b-input-group>
    <b-form-tags
      class="bg-warning border-0 text-dark"
      tag-variant="dark"
      placeholder="Adicione tags"
      v-model="tag.nome"
    ></b-form-tags>
  </b-input-group>
</template>

<script>
export default {
  name: "n-tag",
  props: {
    value: Array
  },
  data() {
    return {
      tag: {
        nome: null,
      },
    };
  },
  watch: {
    tag: {
      handler(value, oldValue) {
        this.$emit("tagConfirmada", this.tag);
      },
      deep: true
    }
  },
};
</script>

<style></style>