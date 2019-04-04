
<template>
  <table class="table table-bordered">
    <thead>
      <tr >
        <th>操作</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <GridTr :data="data" :pid="0" :display="true" />
    </tbody>
  </table>
</template>

<script>
import GridTr from "./GridTr.vue";
export default {
  components: {
    GridTr:GridTr
  },
  props: ["data"],
  // data() {
  //   return {
  //     data: this.data
  //   };
  // }

};
</script>