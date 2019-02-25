<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Input</div>
      <div class="page__desc">表单输入</div>
    </div>

    <div class="page__bd">
      <div class="weui-cells__title">表单</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">qq</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入qq" />
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