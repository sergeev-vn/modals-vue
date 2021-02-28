<template>
  <modal title="modal with form" @close="$emit('close')">
    <template v-slot:body>
      <form @submit.prevent="">
        <div class="row">
          <!-- name -->
          <div class="form-item" :class="{ errorInput: v$.name.$error }">
            <label>
              Name:
              <p class="errorText" v-if="v$.name.required.$invalid">
                Field is required!
              </p>
              <p class="errorText" v-if="v$.name.minLength.$invalid">
                Name must have at least {{ v$.name.minLength.$params.min }}!
              </p>
              <!-- <pre>{{ v$.name.$touch }}</pre> -->
              <!-- email -->
              <input
                class="input"
                v-model="name"
                :class="{ error: v$.name.$error }"
                @change="v$.name.$touch"
              />
            </label>
          </div>
        </div>
        <div class="row">
          <label>
            Email:
            <input class="input" />
          </label>
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
  data() {
    return {
      name: "",
      email: "",
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
    }
  },
}
</script>

<style lang="scss">
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13.4px;
  color: #de4040;
}
.form-item {
  &.errorInput .errorText {
    display: block;
  }
}
input.error {
  border: 1px solid #de4040;
}
</style>
