<template>
	<div class="items-wrap">
		<div class="show-search-bar">
		<mp-searchbar :isFocus=true :inputValue="inputValue" :placeholder="placeholder" @input="input" @blur="blur" @focus="focus" @confirm="confirm"></mp-searchbar>
		</div>

		  <ul class="jithub-list">
		  	<div>{{count}}</div>
		  	<button v-on:click="count +=1">jiayi</button>
		  	<item 
		  	  v-on:detail="count +=1" 
		  	  v-for="item in items" 
		  	  v-bind:code="item['代码']"
		  	  v-bind:money="item['金额']"
		  	  v-bind:score="item['计分']"
		  	  v-bind:content="item['内容']"
		  	  >
		  	 </item>


		  	<li class="search-item" @click="enterRepo()">
                <div class="item-name">
                    <h3>代码：<span>11111</span> 金额：<span>100元</span> 计分：<span>12分</span></h3>
                </div>
		  		<div class="item-content">
		  			<p>内容：无有效机动车驾驶证驾驶摩托车、拖拉机、营运载客汽车以外的机动车的</p>
		  		</div>
		  	</li>
		  	<li class="search-item" @click = "getCodeList">
		  		<div class="item-name">
                    <h3>代码：<span>11112</span> 金额：<span>130元</span> 计分：<span>12分</span></h3>
                </div>
		  		<div class="item-content">
		  			<p>内容：无有效机动车驾驶证驾驶摩托车、拖拉机、营运载客汽车以外的机动车的</p>
		  		</div>
		  	</li>
		  	<li class="search-item">
		  		<div class="item-content">
		  			<span>代码：11110</span>
		  			<span>金额：100元</span>s
		  			<p>内容：无有效机动车驾驶证驾驶摩托车、拖拉机、营运载客汽车以外的机动车的</p>
		  		</div>
		  	</li>
		  	<li class="search-item">
		  		<div class="item-content">
		  			<span>代码：11110</span>
		  			<span>金额：100元</span>s
		  			<p>内容：无有效机动车驾驶证驾驶摩托车、拖拉机、营运载客汽车以外的机动车的</p>
		  		</div>
		  	</li>
		  	<li class="search-item">
		  		<div class="item-content">
		  			<span>代码：11110</span>
		  			<span>金额：100元</span>s
		  			<p>内容：无有效机动车驾驶证驾驶摩托车、拖拉机、营运载客汽车以外的机动车的</p>
		  		</div>
		  	</li>
		  	<li class="search-item">
		  		<div class="item-content">
		  			<span>代码：11110</span>
		  			<span>金额：100元</span>s
		  			<p>内容：无有效机动车驾驶证驾驶摩托车、拖拉机、营运载客汽车以外的机动车的</p>
		  		</div>
		  	</li>
		  	<li class="search-item">
		  		<div class="item-content">
		  			<span>代码：11110</span>
		  			<span>金额：100元</span>s
		  			<p>内容：无有效机动车驾驶证驾驶摩托车、拖拉机、营运载客汽车以外的机动车的</p>
		  		</div>
		  	</li>
		  	<li class="search-item">
		  		<div class="item-content">
		  			<span>代码：11110</span>
		  			<span>金额：100元</span>s
		  			<p>内容：无有效机动车驾驶证驾驶摩托车、拖拉机、营运载客汽车以外的机动车的</p>
		  		</div>
		  	</li>
		  	<li class="search-item">
		  		<div class="item-content">
		  			<span>代码：11110</span>
		  			<span>金额：100元</span>s
		  			<p>内容：无有效机动车驾驶证驾驶摩托车、拖拉机、营运载客汽车以外的机动车的</p>
		  		</div>
		  	</li>
		  	<li class="search-item">
		  		<div class="item-content">
		  			<span>代码：11110</span>
		  			<span>金额：100元</span>s
		  			<p>内容：无有效机动车驾驶证驾驶摩托车、拖拉机、营运载客汽车以外的机动车的</p>
		  		</div>
		  	</li>		  	
		  </ul>		  
	</div>

</template>




<script>
import './index.less'
import mpSearchbar from 'mpvue-weui/src/searchbar'
import item from '@/components/item'
import data from '../../data/code.json'

export default {

  data () {
    return {
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
    mpSearchbar,
    item
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
  }
}
</script>