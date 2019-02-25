<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">固定资产</div>
      <div class="page__desc">计算固定资产收益的工具</div>
    </div>

    <div class="page__bd">
<div class="weui-toptips weui-toptips_warn" v-if="showTopTips">错误提示</div>
      <div class="weui-cells__title">表单</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">面积（m2）</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入总面积" />
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">单价(元)</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入每平方单价" />
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">租金(元)</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入每平方租金" />
          </div>
        </div>
        <div class="weui-cell weui-cell_input weui-cell_vcode">
          <div class="weui-cell__hd">
            <div class="weui-label">手机号</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入手机号" />
          </div>
          <div class="weui-cell__ft">
            <div class="weui-vcode-btn">获取验证码</div>
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">日期</div>
          </div>
          <div class="weui-cell__bd">
            <picker mode="date" value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
              <div class="weui-input">{{date}}</div>
            </picker>
          </div>
        </div>
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">时间</div>
          </div>
          <div class="weui-cell__bd">
            <picker mode="time" value="time" start="09:01" end="21:01" @change="bindTimeChange">
              <div class="weui-input">{{time}}</div>
            </picker>
          </div>
        </div>
        <div class="weui-cell weui-cell_input weui-cell_vcode">
          <div class="weui-cell__hd">
            <div class="weui-label">验证码</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入验证码" />
          </div>
          <div class="weui-cell__ft">
            <image class="weui-vcode-img" src="/static/images/vcode.jpg" style="width: 108px" />
          </div>
        </div>
      </div>

      <div class="weui-cells__tips">底部说明文字底部说明文字</div>

      <div class="weui-btn-area">
        <button class="weui-btn" type="primary" @click="showTopTipsFun">确定</button>
      </div>
      
    </div>
</div>
</template>


<script>
export default {
  data () {
    return {
      showTopTips: false,
      time: '09:01',
      date: '2015-09-01',
      countryCodes: ['+86', '+80', '+84', '+87'],
      countryCodesIndex: 0,
      countries: ['中国', '美国', '英国'],
      countryIndex: 0,
      accounts: ['微信号', 'QQ', 'Email'],
      accountsIndex: 0,

      radioItems: [
        { name: 'cell standard', value: '0' },
        { name: 'cell standard', value: '1', checked: true }
      ],
      checkboxItems: [
        { name: 'standard is dealt for u.', value: '0', checked: true },
        { name: 'standard is dealicient for u.', value: '1', checked: false }
      ],

      isAgree: false
    }
  },
  methods: {
    checkboxChange (e) {
      console.log('checkbox发生change事件，携带value值为：' + e.mp.detail.value)
      var checkboxItems = this.checkboxItems
      var values = e.mp.detail.value
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false

        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value === values[j]) {
            checkboxItems[i].checked = true
            break
          }
        }
      }
      this.checkboxItems = checkboxItems
    },
    radioChange (e) {
      console.log('radio发生change事件，携带value值为：' + e.mp.detail.value)
      let radioItems = this.radioItems
      for (let i = 0; i < radioItems.length; ++i) {
        radioItems[i].checked = radioItems[i].value === e.mp.detail.value
      }
      this.radioItems = radioItems
    },
    switchChange (e) {
      console.log('switch发生change事件，携带value值为：' + e.mp.detail.value)
    },
    bindDateChange (e) {
      this.date = e.mp.detail.value
      console.log(e.mp.detail.value)
    },
    bindTimeChange (e) {
      this.time = e.mp.detail.value
      console.log(e.mp.detail.value)
    },
    showTopTipsFun () {
      this.showTopTips = true
      setTimeout(() => {
        this.showTopTips = false
      }, 2000)
    },

    bindCountryChange (e) {
      this.countryIndex = e.mp.detail.value
    },
    bindAccountChange (e) {
      this.accountsIndex = e.mp.detail.value
    },
    bindCountryCodeChange (e) {
      this.countryCodesIndex = e.mp.detail.value
    },
    bindAgreeChange (e) {
      this.isAgree = !this.isAgree
    }
  }
}
</script>