<template>
	<div class="items-wrap">
		<div class="show-search-bar">
		<mp-searchbar :isFocus=true :inputValue="inputValue" :placeholder="placeholder" @input="input" @blur="blur" @focus="focus" @confirm="confirm"></mp-searchbar>
		</div>
		  <ul class=" jithub-list">
		  	<li class="search-item" @click="enterRepo()">
                <div class="item-name">
                    <h3>代码：<span>11110</span> 金额：<span>100元</span> 计分：<span>12分</span></h3>
                </div>
		  		<div class="item-content">
		  			<p>内容：无有效机动车驾驶证驾驶摩托车、拖拉机、营运载客汽车以外的机动车的</p>
		  		</div>
		  	</li>
		  	<li class="search-item" @click = "getCodeList">
		  		<div class="item-name">
                    <h3>代码：<span>11110</span> 金额：<span>100元</span> 计分：<span>12分</span></h3>
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

export default {

  data () {
    return {
      placeholder: 'Hello World',
      input: 'iiiii',
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
    mpSearchbar
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
        this.$http.get('info.json').then(function(response){
            console.log(response.data.data)
            var resdata = response.data.data
            this.peps = resdata
        }).catch(function(response){
            console.log(response)
            console.log("居然没有弹窗")
        })
    }
  }
}
</script>