<template>
  <div class="search-item" >
  	<button v-on:click="counter++">fff{{counter}}</button>
	<div class="item-name">
	<h3>代码：<span>{{code}}</span> 金额：<span>{{money}}</span> 计分：<span>{{score}}</span></h3>
	</div>
	<div class="item-content">
	<p>内容：{{content}}</p>
	</div>
  </div>
</template>

<script>
export default {
  props: ['code', 'money', 'content', 'score'],

  data: function () {
    return {
      counter: 0
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

<style lang="less">
.item-name {
    width: 75%;
    margin-bottom: 8rpx;
    h3 {
        font-weight: 400;
    }
    span {
        color: #0366d6;
        display: inline-block;
        margin-right: 16rpx;
        &.jifen {
            float: right;
        }
    }
}

.item-content {
    color: #586069;
    margin-top: 8rpx;
    font-size: 22rpx;
    span {
        display: inline-block;
        margin-right: 16rpx;
        &.repo-stars-text {
            float: right;
        }
    }
}

.search-item {
    position: relative;
    padding: 24rpx;
    margin: 4rpx;
    font-size: 28rpx;
    border-bottom: 5rpx #e1e4e8 solid;
}
</style>