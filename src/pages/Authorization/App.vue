<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- modal w/  authorization-->
          <button
            class="btn btnPrimary"
            @click="modalValidate = !modalValidate"
          >
            Аuthorization
          </button>
          <modalAuthorizaion
            v-show="modalValidate"
            @close="modalValidate = false"
            title="Аuthorization"
            :isModalShown="modalValidate"
          >
          </modalAuthorizaion>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import modals from "@/components/UI/Modal.vue"
import modalAuthorizaion from "@/components/ModalAuthorizaion.vue"

export default {
  components: { modals, modalAuthorizaion },
  data() {
    return {
      firstModal: false,
      secondModal: {
        show: false,
        name: "",
        email: "",
      },
      modalValidate: false,
    }
  },
  methods: {
    submitSecondForm() {
      console.log({
        name: this.secondModal.name,
        email: this.secondModal.email,
      })

      this.secondModal.name = ""
      this.secondModal.email = ""
      this.secondModal.show = false
    },
  },
}
</script>

<style></style>
