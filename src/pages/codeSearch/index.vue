<template>
	<div>
		<mp-searchbar :isFocus=true :inputValue="inputValue" :placeholder="placeholder" @input="input" @blur="blur" @focus="focus" @confirm="confirm"></mp-searchbar>
	</div>
</template>


<script>

import mpSearchbar from 'mpvue-weui/src/searchbar'

export default {

  data () {
    return {
      placeholder: 'Hello World',
      input: 'iiiii'
    }
  },
  components: {
    mpSearchbar
  }
}
</script>