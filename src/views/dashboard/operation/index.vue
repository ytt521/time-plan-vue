<template>
  <div class="menu-container">
    <div class="menu">
      <ul>
        <li>
          <button
            :class="focusIndex == 1 ? 'task-active' : ''"
            @click="focusIndex = 1"
          >
            <Svg
              name="calendar1"
              width="16.5px"
              height="15px"
              fill="#6D6F75"
            ></Svg>
            <div class="btn-content">
              <span style="font-size: 14px">今天</span>
              <span class="task-count">2</span>
            </div>
          </button>
        </li>
        <li>
          <button
            :class="focusIndex == 2 ? 'task-active' : ''"
            @click="focusIndex = 2"
          >
            <Svg
              name="calendar7"
              width="16.5px"
              height="15px"
              fill="#6D6F75"
            ></Svg>
            <div class="btn-content">
              <span style="font-size: 14px">最近7天</span>
              <span class="task-count">2</span>
            </div>
          </button>
        </li>
        <li>
          <button
            :class="focusIndex == 3 ? 'task-active' : ''"
            @click="focusIndex = 3"
          >
            <Svg name="box" width="16.5px" height="15px" fill="#6D6F75"></Svg>
            <div class="btn-content">
              <span style="font-size: 14px">收集箱</span>
              <span class="task-count">2</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
    <div class="categoty">
      <el-tree :data="data" :props="defaultProps" />
    </div>
    <div class="completed">
      <ul>
        <li>
          <button
            :class="focusIndex == 4 ? 'task-active' : ''"
            @click="focusIndex = 4"
          >
            <CircleCheck
              class="sidebar-icon"
              color="#C2C2C2"
              height="18px"
              width="18px"
            ></CircleCheck>
            <div class="btn-content">
              <span style="font-size: 14px">已完成</span>
            </div>
          </button>
        </li>
        <li>
          <button
            :class="focusIndex == 5 ? 'task-active' : ''"
            @click="focusIndex = 5"
          >
            <Delete
              class="sidebar-icon"
              color="#C2C2C2"
              height="18px"
              width="18px"
            ></Delete>
            <div class="btn-content">
              <span style="font-size: 14px">垃圾箱</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts" name="Operation">
import { ref } from 'vue'
let focusIndex = ref<number>(0)

interface Tree {
  label: string
  children?: Tree[]
}
const data: Tree[] = [
  {
    label: '清单',
    children: [],
  },
  {
    label: '过滤器',
    children: [],
  },
  {
    label: '标签',
    children: [
      {
        label: '必要',
      },
    ],
  },
]

const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>

<style scoped lang="scss">
.menu {
  padding-top: 8px;
}
.menu,
.completed {
  ul {
    li {
      width: 213px;
      height: 42px;
      padding: 0 10px;
      button {
        display: flex;
        align-items: center;
        width: 190px;
        height: 40px;
        border: none;
        background-color: white;
        padding: 0 12px 0 14px;
        .btn-content {
          display: flex;
          margin-left: 8px;
          width: 100%;
          justify-content: space-between;
        }
        .task-count {
          font-size: 14px;
          color: #989ba2;
        }
      }
    }
  }
}
.menu::after,
.categoty::after {
  content: '';
  width: 180px;
  height: 1px;
  background-color: #f3f3f3;
  border-radius: 1px;
  position: absolute;
  left: 18px;
}
.categoty {
  margin-top: 20px;
  padding: 5px 10px;
}
.completed {
  margin-top: 20px;
}
.task-active {
  background-color: #ecf1fe !important;
  border-radius: 5px;
}
</style>
