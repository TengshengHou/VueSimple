<template  >
  <div>
    <div v-for="item in data" :key="item.id">
      <div v-if="item.pid==pid" v-show="pid==0||(pid!=0&&trDisplay)">
        <tr>
          <td>
            {{item.id}}-{{item.pid}}- {{trDisplay}}
            <span
              @click="expandNode()"
              class="glyphicon"
              :class="{'glyphicon-minus':trDisplay,'glyphicon-plus':!trDisplay}"
            ></span>
          </td>
        </tr>
        <GridTr :data="trdata" :pid="item.id" ></GridTr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridTr",
  props: ["data", "pid"],
  data() {
    return {
      trdata: this.data,
      trDisplay: false
    };
  },
  methods: {
    expandNode: function() {
      this.trDisplay = !this.trDisplay;
    },
    HaveChildNode: function(id) {
      var boolRet = false;
      for (var item in this.data) {
        if (item.pid === id) {
          boolRet = true;
        }
      }
      return boolRet;
    }
    
  }
};
</script>