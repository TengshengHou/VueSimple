<template>
  <div id="app">
    <treeGrid v-bind:data="treeData"></treeGrid>
  </div>
</template>

<script>
import TreeGrid from "./TreeGrid.vue";
var data = [
  //第一集数据
  {
    pid: 0,
    id: 1,
    name: "houts",
    age: "27"
  },
  {
    pid: 0,
    id: 2,
    name: "houts",
    age: "27"
  },
  {
    pid: 0,
    id: 3,
    name: "houts",
    age: "27"
  },
  {
    pid: 0,
    id: 4,
    name: "houts",
    age: "27"
  },
  ///第一行第二级数据
  {
    pid: 1,
    id: 5,
    name: "houts",
    age: "27"
  },
  ///第一行第三级数据
  {
    pid: 2,
    id: 6,
    name: "houts",
    age: "27"
  },
  //第二行第二级数据
  {
    pid: 3,
    id: 7,
    name: "houts",
    age: "27"
  }
];

export default {
  name: "app",
  data: function() {
    return {
      treeData: data
    };
  },
  components: {
    treeGrid: TreeGrid
  }
};
</script>