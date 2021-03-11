<template>
  <modal title="modal with form">
    <template v-slot:body>
      <form @submit.prevent="onSubmit">
        <div class="row">
          <div class="form-item" :class="{ errorInput: v$.email.$error }">
            <label>
              Email:
              <p
                class="errorText"
                v-if="v$.email.required.$invalid && v$.email.$error"
              >
                Field is required!
              </p>
              <p class="errorText" v-if="v$.email.email.$invalid">
                Email is not correct!
              </p>
              <!-- email -->
              <input
                class="input"
                v-model="email"
                :class="{ error: v$.email.$error }"
                @change="v$.email.$touch"
              />
            </label>
          </div>
        </div>
        <div class="row">
          <div class="form-item" :class="{ errorInput: v$.password.$error }">
            <label>
              Password:
              <p
                class="errorText"
                v-if="v$.password.required.$invalid && v$.password.$error"
              >
                Field is required!
              </p>
              <p class="errorText" v-if="v$.password.minLength.$invalid">
                Password must have at least
                {{ v$.password.minLength.$params.min }}!
              </p>
              <!-- Password -->
              <input
                type="password"
                class="input"
                v-model.trim="v$.password.$model"
                :class="{ error: v$.password.$error }"
                @change="v$.password.$touch"
                autocomplete="off"
              />
            </label>
          </div>
        </div>
        <div class="row">
          <button class="btn btnPrimary">submit form!</button>
        </div>
      </form>
    </template>
  </modal>
</template>

<script>
import modal from "@/components/UI/Modal.vue"
import { required, minLength, email } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

export default {
  components: { modal },
  props: {
    isModalShown: {
      type: Boolean,
    },
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    }
  },
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      name: {
        required,
        minLength: minLength(4),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      repeatPassword: {
        sameAs: sameAs(this.password),
      },
    }
  },
  watch: {
    isModalShown() {
      this.v$.$reset()
      this.name = ""
      this.email = ""
      this.email = ""
      this.password = ""
      this.repeatPassword = ""
    },
  },
  methods: {
    onSubmit() {
      this.v$.$touch()

      if (!this.v$.$invalid) {
        let user = {
          name: this.name,
          email: this.email,
          password: this.password,
          repeatPassword: this.repeatPassword,
        }
        console.log(user)
        this.$emit("close")
      }
    },
  },
}
</script>

<style lang="scss">
.form-item .errorText {
  margin-bottom: 8px;
  font-size: 13.4px;
  color: #de4040;
}

input.error {
  border: 1px solid #de4040;
}
</style>
