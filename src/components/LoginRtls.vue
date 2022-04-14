<template>
  <div>
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
    <textarea
      class="id-token"
      v-model="idToken"
      v-if="idToken != ''"
    ></textarea>
    <v-btn v-on:click="logout()" v-if="idToken != ''">logout</v-btn>
  </div>
</template>

<script>
export default {
  name: 'LoginRtls',
  data() {
    return {
      idToken: '',
      uiConfig: null,
    }
  },
  methods: {
    setIdToken(idToken) {
      this.idToken = idToken
    },
    startUi() {
      window.fireUI.start('#firebaseui-auth-container', this.uiConfig)
    },
    logout() {
      window.firebase
        .auth()
        .signOut()
        .then(() => {
          alert('로그아웃')
          window.fireUI.start('#firebaseui-auth-container', this.uiConfig)
        })
        .catch(error => {
          alert('로그아웃 에러:' + error)
        })
    },
  },
  created() {},
  mounted() {
    // 로그인 ui 설정
    this.uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          console.log(authResult)
          console.log('redirectUrl : ' + redirectUrl)
          return false
        },
        signInSuccessUrl: '/',
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none'
        },
      },
      signInOptions: [
        {
          provider: window.firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          recaptchaParameters: {
            type: 'image', // 'audio'
            size: 'normal', // 'invisible' or 'compact'
            badge: 'bottomleft', //' bottomright' or 'inline' applies to invisible.
          },
          defaultCountry: 'KR', // Set default country to the United Kingdom (+44).
          // defaultNationalNumber: '1234567890',
          loginHint: '+8201041378670',
        },
      ],
    }

    // 로그인 상태 변경 이벤트
    const setIdToken = this.setIdToken
    const startUi = this.startUi
    window.firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        user.getIdToken().then(function (idToken) {
          setIdToken(idToken)
          // console.log(idToken)
        })

        console.log(user)
        user.providerData.forEach(function (profile) {
          console.log('Sign-in provider: ' + profile.providerId)
          console.log('	Provider-specific UID: ' + profile.uid)
          console.log('	Name: ' + profile.displayName)
          console.log('	Email: ' + profile.email)
          console.log('	Photo URL: ' + profile.photoURL)
        })
        // $('#logoutBtn').show()
      } else {
        startUi()
        setIdToken('')
        // $('#logoutBtn').hide()
      }
    })
  },
  computed: {},
  watch: {},
}
</script>

<style lang="scss" scoped>
.id-token {
  width: 800px;
  height: 200px;
}
</style>
