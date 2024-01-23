<template>
  <div>
    <div class="title">智能清单</div>
    <div class="category">
      <div class="content">
        <div class="config">
          <Setting color="#A7A7A7" height="15px" width="15px" />
          <span style="margin-left: 5px">所有</span>
        </div>
        <div class="right">
          <span style="color: #a7a7a7">隐藏</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
      <div class="content">
        <div class="config">
          <Setting color="#A7A7A7" height="15px" width="15px" />
          <span style="margin-left: 5px">今天</span>
        </div>
        <div class="right">
          <span style="color: #a7a7a7">显示</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
      <div class="content">
        <div class="config">
          <Setting color="#A7A7A7" height="15px" width="15px" />
          <span style="margin-left: 5px">明天</span>
        </div>
        <div class="right">
          <span style="color: #a7a7a7">显示</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
      <div class="content">
        <div class="config">
          <Setting color="#A7A7A7" height="15px" width="15px" />
          <span style="margin-left: 5px">最近7天</span>
        </div>
        <div class="right">
          <span style="color: #a7a7a7">显示</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
      <div class="content">
        <div class="config">
          <Setting color="#A7A7A7" height="15px" width="15px" />
          <span style="margin-left: 5px">指派给我</span>
        </div>
        <div class="right">
          <span style="color: #a7a7a7">显示</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
      <div class="content">
        <div class="config">
          <Setting color="#A7A7A7" height="15px" width="15px" />
          <span style="margin-left: 5px">收集箱</span>
        </div>
        <div class="right">
          <span style="color: #a7a7a7">显示</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
      <div class="content">
        <div class="config">
          <Setting color="#A7A7A7" height="15px" width="15px" />
          <span style="margin-left: 5px">摘要</span>
        </div>
        <div class="right">
          <span style="color: #a7a7a7">显示</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
    </div>
    <div class="category">
      <div class="content">
        <div class="config">
          <Setting color="#A7A7A7" height="15px" width="15px" />
          <span style="margin-left: 5px">标签</span>
        </div>
        <div class="right">
          <span style="color: #a7a7a7">显示</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
      <div class="content">
        <div class="config">
          <Setting color="#A7A7A7" height="15px" width="15px" />
          <span style="margin-left: 5px">过滤器</span>
        </div>
        <div class="right">
          <span style="color: #a7a7a7">显示</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
    </div>
    <div class="category">
      <div class="content">
        <div class="config">
          <Setting color="#A7A7A7" height="15px" width="15px" />
          <span style="margin-left: 5px">已完成</span>
        </div>
        <div class="right">
          <span style="color: #a7a7a7">显示</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
      <div class="content">
        <div class="config">
          <Setting color="#A7A7A7" height="15px" width="15px" />
          <span style="margin-left: 5px">已废弃</span>
        </div>
        <div class="right">
          <span style="color: #a7a7a7">有内容时显示</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
      <div class="content">
        <div class="config">
          <Setting color="#A7A7A7" height="15px" width="15px" />
          <span style="margin-left: 5px">垃圾桶</span>
        </div>
        <div class="right">
          <span style="color: #a7a7a7">显示</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.title {
  width: 451px;
  margin: 20px auto;
  font-size: 15px;
}
.category {
  width: 475px;
  margin: 15px auto;
  background-color: #fcfcfc;
  border-radius: 8px;
  .content {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 8px 10px;
    .config {
      display: flex;
    }
    .right {
      display: flex;
      height: 20px;
      padding: 3px 5px;
    }
    .right:hover {
      background-color: #efefef;
      border-radius: 4px;
    }
  }
}
</style>
