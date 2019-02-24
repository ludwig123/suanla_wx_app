<template>
  <li v-on:click.native="detail()">
  <div class="search-item" >
	<div class="item-name">
	<h3>代码：<span>{{code}}</span> 金额：<span>{{money}}</span> 计分：<span>{{score}}</span></h3>
	</div>
	<div class="item-content">
	<p>内容：{{content}}</p>
	</div>
  </div>
  </li>
</template>

<script>
export default {
  props: ['code', 'money', 'content', 'score'],

  data: function () {
    return {
      counter: 9
    }
  },

  methods: {
    detail: function () {
      console.log('dddddd')
      this.counter += 1
      this.$emit('increment')
    }
  }
}
</script>

