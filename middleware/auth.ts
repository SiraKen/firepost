export default ({ store, redirect }: any) => {
  if (!store.state.isLoggingIn) {
    console.log('ログインしていません。リダイレクトします。')
    // return redirect('/login')
  }
}
