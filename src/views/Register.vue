<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
      <span class="card-title">
        Home accounting
      </span>

      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="['validate', { invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength) }]"
        >

        <label for="name">Name</label>

        <small class="helper-text invalid" v-if="$v.name.$dirty && !$v.name.required">
          This field should not be empty
        </small>

        <small class="helper-text invalid" v-else-if="$v.name.$dirty && !$v.name.minLength">
          Name must be at least {{ $v.name.$params.minLength.min }} characters, now {{ name.length }}
        </small>
      </div>

      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="['validate', { invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }]"
        >

        <label for="email">Email</label>

        <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.required">
          This field should not be empty
        </small>

        <small class="helper-text invalid" v-else-if="$v.email.$dirty && !$v.email.email">
          This email is not valid
        </small>
      </div>

      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="['validate', { invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength) }]"
        >

        <label for="password">Password</label>

        <small class="helper-text invalid" v-if="$v.password.$dirty && !$v.password.required">
          This field should not be empty
        </small>

        <small class="helper-text invalid" v-else-if="$v.password.$dirty && !$v.password.minLength">
          Password must be at least {{ $v.password.$params.minLength.min }} characters, now {{ password.length }}
        </small>
      </div>

      <p>
        <label>
          <input type="checkbox" v-model="agree">
          <span>I agree with the rules</span>
        </label>
      </p>
    </div>

    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Sign up
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Already have an account?
        <router-link to="/login">
          Sign in!
        </router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
name: 'Register',

  data() {
    return {
      name: '',
      email: '',
      password: '',
      agree: false
    }
  },

  validations: {
    name: { required, minLength: minLength(6) },
    email: { email, required },
    password: { required, minLength: minLength(6) },
    agree: { checked: v => v }
  },

  methods: {
    async onSubmit() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const formData = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('register', formData)
        this.$router.push('/')
      } catch (e) {}
    }
  }
}
</script>

<style scoped>

</style>
