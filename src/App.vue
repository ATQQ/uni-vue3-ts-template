<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  onLaunch() {
    console.log('App Launch');
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
});
</script>
<style>
/*每个页面公共css */
/* vant - weapp */
@import '/wxcomponents/@vant/weapp/dist/common/index.wxss';

/* tailwindcss */
@import 'tailwindcss/tailwind.css';
</style>
