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
          <button class="btn btnPrimary">Log In!</button>
        </div>
      </form>
    </template>
    <template v-slot:footer>
      <a class="link" href="#" @click.prevent="$emit('changePopup')"
        >Мне нужен аккаунт</a
      >
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
    }
  },
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    }
  },
  watch: {
    isModalShown() {
      this.v$.$reset()
      this.email = ""
      this.password = ""
    },
  },
  methods: {
    onSubmit() {
      this.v$.$touch()

      if (!this.v$.$invalid) {
        let user = {
          email: this.email,
          password: this.password,
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
