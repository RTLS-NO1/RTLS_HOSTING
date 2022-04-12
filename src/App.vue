<template>
  <v-app>
    <!-- 컨텐츠 영역 start -->
    <button v-on:click="$router.push('/login-rtls')">login</button>
    <router-view></router-view>
    <!-- 컨텐츠 영역 end -->
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  watch: {},
  methods: {},
}
</script>
