import { defineStore } from "pinia";

export const useModalStore = defineStore({
  id: "modal",
  state: () => ({
    showModal: false,
  }),
  actions: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
});
