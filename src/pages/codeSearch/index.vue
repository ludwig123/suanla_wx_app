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
      <div class="weui-cells searchbar-result">
        <navigator url="../counter/main?title=navigate" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__ft weui-cell__ft_in-access">
            <div class="item-name">
              <h3>代码：<span>11111</span> 金额：<span>100元</span> 计分：<span>12分</span></h3>
            </div>
            <div class="item-content">
              <p>内容：无有效机动车驾驶证驾驶摩托车、拖拉机、营运载客汽车以外的机动车的</p>
            </div>
          </div>
        </navigator>
        <navigator url="../counter/main?title=navigate" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__ft weui-cell__ft_in-access">
            <div class="item-name">
              <h3>代码：<span>11111</span> 金额：<span>100元</span> 计分：<span>12分</span></h3>
            </div>
            <div class="item-content">
              <p>内容：无有效机动车驾驶证驾驶摩托车、拖拉机、营运载客汽车以外的机动车的</p>
            </div>
          </div>
        </navigator>
        <navigator url="../counter/main?title=navigate" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__ft weui-cell__ft_in-access">
            <div class="item-name">
              <h3>代码：<span>11111</span> 金额：<span>100元</span> 计分：<span>12分</span></h3>
            </div>
            <div class="item-content">
              <p>内容：无有效机动车驾驶证驾驶摩托车、拖拉机、营运载客汽车以外的机动车的</p>
            </div>
          </div>
        </navigator>
        <navigator url="../counter/main?title=navigate" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__ft weui-cell__ft_in-access">
            <div class="item-name">
              <h3>代码：<span>11111</span> 金额：<span>100元</span> 计分：<span>12分</span></h3>
            </div>
            <div class="item-content">
              <p>内容：无有效机动车驾驶证驾驶摩托车、拖拉机、营运载客汽车以外的机动车的</p>
            </div>
          </div>
        </navigator>
        <navigator url="../counter/main?title=navigate" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__ft weui-cell__ft_in-access">
            <div class="item-name">
              <h3>代码：<span>11111</span> 金额：<span>100元</span> 计分：<span>12分</span></h3>
            </div>
            <div class="item-content">
              <p>内容：无有效机动车驾驶证驾驶摩托车、拖拉机、营运载客汽车以外的机动车的</p>
            </div>
          </div>
        </navigator>
      </div>
    </div>
  </div>
</template>


<script>
import './index.less'

// 导入本地json数据文件
import data from '../../data/code.json'

export default {

  data () {
    return {
      inputShowed: false,
      inputVal: '',
      count: 0,
      placeholder: data['0']['金额'],
      input: 'iiiii',
      items: data,
      code: data['0']['代码'],
      money: data['0']['金额'],
      score: data['0']['计分'],
      content: data['0']['内容'],
      nodes: [{
        name: 'div',
        attrs: {
          class: 'div_class',
          style: 'line-height: 60px; color: red;'
        },
        children: [{
          type: 'text',
          text: 'Hello&nbsp;World!'
        }]
      }]
    }
  },

  components: {

  },

  methods: {
    enterRepo () {
      console.log('clickHandle:')
      // const { username, reponame } = repo
      wx.navigateTo({
        url: '../counter/main'
      })
    },

    getCodeList: function () {
      console.log('id_getCodeList')
      console.log(data)
      this.$http.get('../code.json').then(function (response) {
        console.log(response.data.data)
        var resdata = response.data.data
        this.peps = resdata
      }).catch(function (response) {
        console.log(response)
        console.log('居然没有弹窗')
      })
    }
  },

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
</script>

<style scoped>
.searchbar-result {
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