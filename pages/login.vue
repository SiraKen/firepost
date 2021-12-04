<template>
  <div class="h-screen flex flex-row justify-center items-center">
    <div class="bg-white shadow p-3">
      <div class="flex flex-col mb-3">
        <div>
          <p>メールアドレス</p>
          <input id="email" type="email" class="w-full border p-1" v-model="email" required>
        </div>
        <div>
          <p>パスワード</p>
          <input id="password" type="password" class="w-full border p-1" v-model="password" required>
        </div>
      </div>
      <button class="bg-green-500 text-white px-3 py-1 hover:bg-green-700" @click="login()">ログイン</button>
      <button class="bg-green-500 text-white px-3 py-1 hover:bg-green-700" @click="logout()">ログアウト</button>
      <button class="bg-green-500 text-white px-3 py-1 hover:bg-green-700" @click="create()">新規登録</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('Login')
      this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          console.log(res)
        })
    },
    logout () {
      console.log('Logout')
      this.$fire.auth.signOut()
        .then(() => {
          console.log('ログアウトしました')
        }).catch((error) => {
          // An error happened.
          console.log(error)
        })
    },
    create () {
      console.log('Create')
      this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          console.log(userCredential.user)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
input {
  outline: none;
}
</style>
