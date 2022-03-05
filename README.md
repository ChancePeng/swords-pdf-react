# @swords-pdf/react(based Antd)
  搭配`@swords-pdf/render`使用的UI库，基于antd UI库，当然也可以单独导入使用

# 使用

当前未发布到npm,建议下载源码,并link @swords/tools库，使用link方式导入其他项目


# 注意事项

## table 表格
table的使用与antd的table几乎没有差别,但columns的配置发生些许变化

### dataIndex
> antd的dataIndex可配置数组，按数组记录向下查询相对应数据
例:查找顺序 a->b
```jsx
import {Table} from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
const dataSource = [
  {
    a:{
      b:'hello'
    }
  }
]

const columns = [
  {
    dataIndex:['a','b']
  }
]
const Demo = () => {
  return <Table columns={columns} dataSource={dataSource}>
}

ReactDOM.render(<Demo />,document.querySelector('#root))
```

> @swords-pdf/react中,dataIndex也可配置数组，但通过类js对象的.方式向下取值，而数组的配置是查找数据中key数组匹配的字段进行渲染，且数组左方优先
```jsx
import {Table} from '@swords-pdf/react';
import React from 'react';
import ReactDOM from 'react-dom';
const dataSource = [
  {
    a:{
      b:'hello'
    },
    c:{
      d:'word'
    }
  }
]

const columns = [
  {
    dataIndex:['a.b','c']
  }
]
const Demo = () => {
  return <Table columns={columns} dataSource={dataSource}>
}

ReactDOM.render(<Demo />,document.querySelector('#root))
```

## Descriptions 描述列表
> @swords-pdf/react中的Descriptions组件，可通过类Table组件的配置方式配置实现
例：
```jsx
import {Descriptions} from '@swords-pdf/react';

const columns = [
  {
    dataIndex:'a',
    title:'a',
  },
  {
    dataIndex:'b',
    title:'b',
  }
]

const dataSource = {
  a:'hello',
  b:'word',
}

const Demo = () => {
  // 当然，此处的Descriptios的属性完全继承antd的属性，比如column
  return <Descriptions columns={columns} column={2} dataSource={dataSource}>
}
```

## TableColumn 纵向表格
> 纵向表。顾名思义，渲染方式以列为优先，配置方式与antd Table相同

# 关于构建
构建工具使用`@swords/tool`库，详细查看webpack配置


