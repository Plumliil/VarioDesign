---
category: Components
title: Button 按钮 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 基础组件 # 所在分组的名称
  order: 1 # 分组排序，值越小越靠前
---

# Button 按钮

## 介绍

基础的按钮组件 Button。

## 示例

<code src="./demo/base.tsx">基础用法</code>

## APi

<!-- 会生成api表格 -->

| 参数     | 说明                           | 类型                                         | 默认值   | 必填 |
| -------- | ------------------------------ | -------------------------------------------- | -------- | ---- |
| size     | 按钮大小                       | `small`,`middle`,`large`                     | `middle` | 否   |
| type     | 设置按钮类型                   | `main`,`secondary`,`link`                    | `main`   | 否   |
| state    | 按钮状态                       | `normal`,`danger`,`warning`,`info`,`success` | `normal` | 否   |
| ghost    | 幽灵属性，使按钮背景透明       | `boolean`                                    | `false`  | 否   |
| block    | 将按钮宽度调整为其父宽度的选项 | `boolean`                                    | `false`  | 否   |
| disabled | 按钮失效状态                   | `boolean`                                    | `false`  | 否   |
| style    | 配置按钮的样式                 | `CSSProperties`                              | `{}`     | 否   |
| onClick  | 点击按钮时的回调               | `function`                                   | -        | 否   |
