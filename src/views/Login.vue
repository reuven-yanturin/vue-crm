<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
      <span class="card-title">
        Home accounting
      </span>

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
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Login
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        No account?
        <router-link to="/register">
          Sign up
        </router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
import messages from '@/utils/messages'

export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: ''
    }
  },

  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },

  methods: {
    async onSubmit() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const formData = {
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
      } catch (e) {}
    }
  },

  mounted() {
    if(messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  }

}
</script>

<style scoped>

</style>
