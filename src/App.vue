<template>
  <div id="app" style="height:100%;">
    <router-view></router-view>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
  name: 'app',
  components: {
    Group,
    Cell
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
