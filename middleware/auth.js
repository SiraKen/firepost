export default ({ store, redirect }) => {
  if (!store.state.isLoggingIn) {
    console.log('ログインしていません。リダイレクトします。')
    // return redirect('/login')
  }
}
