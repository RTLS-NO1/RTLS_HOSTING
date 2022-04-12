<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
// import { firebase } from 'firebase'
// import { firebaseui } from 'firebaseui'
// import { initializeApp } from 'firebase/app'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
// var firebaseui = require('firebaseui')

export default {
  name: 'LoginRtls',
  data() {
    return {}
  },
  methods: {},
  created() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBCR8wp6ybGJl17XcDifD9jbwveTKDx_8g',
      authDomain: 'rtls-694e3.firebaseapp.com',
      projectId: 'rtls-694e3',
      storageBucket: 'rtls-694e3.appspot.com',
      messagingSenderId: '868086717959',
      appId: '1:868086717959:web:64182e93149ab700c114a2',
    }
    firebase.initializeApp(firebaseConfig)

    var ui = new firebaseui.auth.AuthUI(firebase.auth())
    // ui.start('#firebaseui-auth-container', {
    //   signInOptions: [
    //     {
    //       provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    //       recaptchaParameters: {
    //         type: 'image', // 'audio'
    //         size: 'normal', // 'invisible' or 'compact'
    //         badge: 'bottomleft', //' bottomright' or 'inline' applies to invisible.
    //       },
    //       defaultCountry: 'KR', // Set default country to the United Kingdom (+44).
    //       // For prefilling the national number, set defaultNationNumber.
    //       // This will only be observed if only phone Auth provider is used since
    //       // for multiple providers, the NASCAR screen will always render first
    //       // with a 'sign in with phone number' button.
    //       defaultNationalNumber: '82',
    //       // You can also pass the full phone number string instead of the
    //       // 'defaultCountry' and 'defaultNationalNumber'. However, in this case,
    //       // the first country ID that matches the country code will be used to
    //       // populate the country selector. So for countries that share the same
    //       // country code, the selected country may not be the expected one.
    //       // In that case, pass the 'defaultCountry' instead to ensure the exact
    //       // country is selected. The 'defaultCountry' and 'defaultNationaNumber'
    //       // will always have higher priority than 'loginHint' which will be ignored
    //       // in their favor. In this case, the default country will be 'GB' even
    //       // though 'loginHint' specified the country code as '+1'.
    //       loginHint: '+82',
    //     },
    //   ],
    // })
  },
  mounted() {},
  computed: {},
  watch: {},
}
</script>

<style lang="scss" scoped></style>
