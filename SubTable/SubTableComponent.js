//<script type="text/x-template" id="template-my-table">
//注册Table组件
Vue.component('my-table', {
  props: ['tableData', 'pIsShow'],
  //template: "#template-my-table",
  template: `<table class="table table-bordered"  >
  <thead>
      <slot name="head"></slot>
  </thead>
  <tbody>
    <slot name="row" v-for="(item,index) in tableData"  v-bind:item="item" v-bind:index="index" ></slot>
  </tbody>
</table>`,
});
//注册subTable组件
Vue.component('sub-table', {
  props: ['data'],
  //template: "#template-sub-table",
  template:`<my-table v-bind:tableData="data.bodyData">
  <template v-slot:head>
    <tr>
      <th>操作</th>
      <th v-for="(headName,index) in data.headData" >{{headName}}</th>
    </tr>
  </template>
  <template v-slot:row="slotProps">
    <tr>
      <td><span class="glyphicon"
          v-bind:class="{'glyphicon-minus':slotProps.item.isShow,'glyphicon-plus':!slotProps.item.isShow}"
          @click='clickA(slotProps.index)'></span></td>
       <!--你也可以用 v-for 通过一个对象的属性来迭代。-->
      <template  v-for="(value,key) in slotProps.item" >
          <!--不显示details isShow 属性。-->
          <td v-if="key!='details' && key!='isShow'">{{value}}</td>
      </template>
    </tr>
    <tr v-if="slotProps.item.details">
      <td colspan="3" v-show="slotProps.item.isShow">
        <my-table v-bind:tableData="slotProps.item.details">
          <template v-slot:head>
    <tr>
      <th v-for="(subHeadName,index) in data.subHeadData" >{{subHeadName}}</th>
    </tr>
  </template>
  <template v-slot:row="slotProps">
    <tr>
      <!--你也可以用 v-for 通过一个对象的属性来迭代。-->
      <td v-for="(value) in slotProps.item">{{value}}</td>
    </tr>
  </template>
</my-table>
</td>
</tr>
</template>
</my-table>`,
  methods: {
    clickA: function (index) {
      Vue.set(this.data.bodyData[index], 'isShow', !this.data.bodyData[index].isShow)
    }
  }
});