<template>
  <div class="page">
    <div class="page__bd">
      <div class="weui-search-bar">
        <div class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
            <input type="text" class="weui-search-bar__input" placeholder="搜索" v-model="inputVal" :focus="inputShowed" @input="inputTyping" />
            <div class="weui-icon-clear" v-if="inputVal.length > 0" @click="clearInput">
              <icon type="clear" size="14"></icon>
            </div>
          </div>
          <label class="weui-search-bar__label" :hidden="inputShowed" @click="showInput">
            <icon class="weui-icon-search" type="search" size="14"></icon>
            <div class="weui-search-bar__text">搜索</div>
          </label>
        </div>
        <div class="weui-search-bar__cancel-btn" :hidden="!inputShowed" @click="hideInput">取消</div>
      </div>
     <div class="weui-cells searchbar-result" v-for="item in items">
        <navigator :url="'../counter/main?'+item['代码']" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__ft weui-cell__ft_in-access">
            <div class="item-name">
              <h3>代码：<span>{{item['代码']}}</span> 金额：<span>{{item['金额']}}</span> 计分：<span>{{item['计分']}}</span></h3>
            </div>
            <div class="item-content">
              <h3>内容：</h3><p>{{item['内容']}}</p>
            </div>
          </div>
        </navigator>
      </div>     
    </div>
  </div>
</template>

<script>
import './index.less'
import items from '../../data/code.json'

export default {
  data () {
    return {
      inputShowed: false,
      inputVal: '',
      items: items
    }
  },
  methods: {
    showInput () {
      this.inputShowed = true
    },
    hideInput () {
      this.inputVal = ''
      this.inputShowed = false
    },
    clearInput () {
      this.inputVal = ''
    },
    inputTyping (e) {
      console.log(e)
      this.inputVal = e.mp.detail.value
      console.log('输入信息为：' + e.mp.detail.value)
    }
  }
}
</script>

<style scoped>
.searchbar-result {
  position: relative;
  margin-top: 0;
  font-size: 14px;
}
.searchbar-result:before {
  display: none;
}
.weui-cell {
  padding: 12px 15px 12px 35px;
}
</style>
