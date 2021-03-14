<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- modal w/  authorization-->
          <button class="btn btnPrimary" @click="modalLogIn = !modalLogIn">
            Log In
          </button>
          <modalLogIn
            v-show="modalLogIn"
            @close="modalLogIn = false"
            title="Login"
            :isModalShown="modalLogIn"
            @change-popup="changePopup"
          >
          </modalLogIn>
          <br /><br />
          <!-- modal w/  registration-->
          <button
            class="btn btnPrimary"
            @click="modalRegistration = !modalRegistration"
          >
            Registration
          </button>
          <modalRegistration
            v-show="modalRegistration"
            @close="modalRegistration = false"
            title="Registration"
            :isModalShown="modalRegistration"
            @change-popup="changePopup"
          >
          </modalRegistration>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import modalLogIn from "@/components/ModalLogIn.vue"
import modalRegistration from "@/components/ModalRegistration.vue"

export default {
  components: { modalLogIn, modalRegistration },
  data() {
    return {
      modalLogIn: false,
      modalRegistration: false,
    }
  },
  methods: {
    changePopup() {
      this.modalLogIn = !this.modalLogIn
      this.modalRegistration = !this.modalRegistration
    },
  },
}
</script>

<style></style>
