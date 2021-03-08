<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- firest modal -->
          <button class="btn btnPrimary" @click="firstModal = !firstModal">
            show modal #1
          </button>
          <modals
            title="first modal"
            v-show="firstModal"
            @close="firstModal = false"
          >
            <template v-slot:body>
              Содержимое заголовка
            </template>
          </modals>

          <br /><br />
          <!-- second modal -->
          <button
            class="btn btnPrimary"
            @click="secondModal.show = !secondModal.show"
          >
            show modal w/ form
          </button>
          
          <modals
            title="modal with form"
            v-show="secondModal.show"
            @close="secondModal.show = false"
          >
            <template v-slot:body>
              <form @submit.prevent="submitSecondForm">
                <div class="row">
                  <label>
                    Name:
                    <input
                      type="text"
                      class="input"
                      v-model="secondModal.name"
                    />
                  </label>
                </div>
                <div class="row">
                  <label>
                    Email:
                    <input
                      type="email"
                      class="input"
                      v-model="secondModal.email"
                    />
                  </label>
                </div>
                <div class="row">
                  <button class="btn btnPrimary">submit form!</button>
                </div>
              </form>
            </template>
          </modals>
          <br /><br />
          <!-- modal w/ validate -->
          <button
            class="btn btnPrimary"
            @click="modalValidate = !modalValidate"
          >
            show modal w/ validate
          </button>
          <modalValidate
            v-show="modalValidate"
            @close="modalValidate = false"
            title="Modal Form + Validate"
          >
          </modalValidate>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import modals from "@/components/UI/Modal.vue";
import modalValidate from "@/components/ModalValidate.vue";

export default {
  components: { modals, modalValidate },
  data() {
    return {
      firstModal: false,
      secondModal: {
        show: false,
        name: "",
        email: "",
      },
      modalValidate: false,
    };
  },
  methods: {
    submitSecondForm() {
      console.log({
        name: this.secondModal.name,
        email: this.secondModal.email,
      });

      this.secondModal.name = "";
      this.secondModal.email = "";
      this.secondModal.show = false;
    },
  },
};
</script>

<style></style>
