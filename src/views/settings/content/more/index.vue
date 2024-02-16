<template>
  <div>
    <div class="language">
      <span>语言</span>
      <div>
        <span>简体中文</span>
        <DCaret color="#A7A7A7" height="15px" width="15px" />
      </div>
    </div>
    <span class="config-title">智能识别</span>
    <div class="config">
      <div class="date-config">
        <div class="open">
          <span>日期识别</span>
          <el-switch v-model="value1" size="small" />
        </div>
        <span class="tip">添加任务时，识别日期和时间信息并自动设置提醒。</span>
        <div class="check">
          <input type="checkbox" style="margin: 0 5px 0 0" />
          <span>移除文本中的日期</span>
        </div>
      </div>
      <div class="label-config">
        <div class="open">
          <span>标签识别</span>
          <el-switch v-model="value1" size="small" />
        </div>
        <span class="tip">
          添加任务时，你可以选择在任务标题中保留或移除标签文本。
        </span>
        <div class="check">
          <input type="checkbox" style="margin: 0 5px 0 0" />
          <span>移除任务标题中的标签</span>
        </div>
      </div>
      <div class="web-config">
        <div class="open">
          <span>网址解析</span>
          <el-switch v-model="value1" size="small" />
        </div>
        <span class="tip">当任务标题为网址时，将识别为网页标题以便查看。</span>
      </div>
    </div>
    <span class="config-title">任务默认值</span>
    <div class="default">
      <div class="title">
        <span>默认日期</span>
        <div class="default-config">
          <span>无</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
      <div class="title">
        <span>默认提醒（有时间的任务）</span>
        <div class="default-config">
          <span>准时</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
      <div class="title">
        <span>默认提醒（全天任务）</span>
        <div class="default-config">
          <span>无</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
      <div class="title">
        <span>默认优先级</span>
        <div class="default-config">
          <span>无</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
      <div class="title">
        <span>默认标签</span>
        <div class="default-config">
          <span>无</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
      <div class="title">
        <span>默认清单</span>
        <div class="default-config">
          <span>收集箱</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
    </div>
    <div class="position">
      <div class="position-default">
        <span>默认添加到</span>
        <div class="default-config">
          <span>清单顶部</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
      <div class="position-default">
        <span>已过期任务位置</span>
        <div class="default-config">
          <span>清单顶部</span>
          <DCaret color="#A7A7A7" height="15px" width="15px" />
        </div>
      </div>
    </div>
    <span class="reset-title">重置任务默认值</span>
    <div class="calendar-title">Mini日历</div>
    <div class="calendar">
      <span>在侧边栏显示Mini日历</span>
      <el-switch v-model="value1" size="small" />
    </div>
    <span class="task-title">任务模板</span>
    <div class="template-config">
      <div class="item">
        <span class="title">每天工作前要做的几件事</span>
        <ul>
          <li>简单回顾昨天的...</li>
          <li>简单回顾昨天的...</li>
          <li>简单回顾昨天的...</li>
        </ul>
      </div>
      <div class="item middle">
        <span class="title">每天工作前要做的几件事</span>
        <ul>
          <li>简单回顾昨天的...</li>
          <li>简单回顾昨天的...</li>
          <li>简单回顾昨天的...</li>
        </ul>
      </div>
      <div class="item">
        <span class="title">每天工作前要做的几件事</span>
        <ul>
          <li>简单回顾昨天的...</li>
          <li>简单回顾昨天的...</li>
          <li>简单回顾昨天的...</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let value1 = ref(true)
</script>

<style scoped lang="scss">
.language {
  margin: 15px 18px 20px 18px;
  padding: 15px 18px;
  border-radius: 8px;
  background-color: #fcfcfc;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  div {
    display: flex;
    span {
      color: #a7a7a7;
    }
  }
}
.config-title {
  font-size: 15px;
  margin: 36px;
}
.config {
  margin: 15px 18px;
  padding: 15px 18px;
  border-radius: 8px;
  background-color: #fcfcfc;
  .date-config,
  .web-config,
  .label-config {
    .open {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .tip {
      font-size: 12px;
      color: #a1a1a1;
    }
    .check {
      display: flex;
      margin-top: 12px;
      font-size: 14px;
    }
  }
  .label-config,
  .web-config {
    margin-top: 30px;
  }
}
.default {
  margin: 2px 18px 20px 18px;
  padding: 10px 18px;
  border-radius: 8px;
  background-color: #fcfcfc;
  font-size: 14px;
  .title {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    .default-config {
      display: flex;
      color: #a7a7a7;
    }
  }
}
.position {
  margin: 5px 18px;
  padding: 4px 18px;
  border-radius: 8px;
  background-color: #fcfcfc;
  font-size: 14px;
  .position-default {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    .default-config {
      display: flex;
      color: #a7a7a7;
    }
  }
}
.reset-title {
  color: #4772fa;
  font-size: 14px;
  margin-left: 36px;
}
.calendar-title {
  font-size: 15px;
  margin: 30px 36px 10px 36px;
}
.calendar {
  margin: 0 18px 10px 18px;
  padding: 12px 18px;
  border-radius: 8px;
  background-color: #fcfcfc;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.task-title {
  margin: 36px;
}
.template-config {
  display: flex;
  margin: 0 18px 10px 18px;
  padding: 12px 18px;
  .middle {
    margin: 0 25px;
  }
  .item {
    width: 140px;
    height: 108px;
    background-color: #fcfcfc;
    .title {
      font-size: 13px;
      font-weight: 600;
    }
    ul {
      li {
        font-size: 12px;
        color: #434343;
        margin: 5px 0;
      }
    }
  }
}
</style>
