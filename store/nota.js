export const state = () => ({
  list: []
});

export const mutations = {
  SET_LIST(state, notas) {
    state.list = notas;
  },
  ADD(state, nota) {
    state.list.push(nota);
  },
  SET(state, nota) {
    const notaFind = state.list.findIndex(n => n.id == nota.id);

    state.list[notaFind] = nota;
  }
};

export const actions = {
  async list({ commit }, usuarioId) {
    try {
      const { data } = await this.$axios.get(`nota/usuario/${usuarioId}`);

      commit("SET_LIST", data);

      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async add({ commit }, nota) {
    try {
      const { data } = await this.$axios.post(`nota`, nota);

      commit("ADD", data);

      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async edit({ commit }, dados) {
    try {
      if (dados.isOnline) {
        const { data } = await this.$axios.put(`nota/${dados.nota.id}`, dados.nota);
        
        commit("SET", data);
  
        return data;
      } else {
        commit("SET", dados.nota);

        return dados.nota;
      }

    } catch (e) {
      console.log(e);
    }
  }
};