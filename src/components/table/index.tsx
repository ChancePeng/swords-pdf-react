import React from 'react';
import { PFC } from "../typing";
import {Table as AntTable,ConfigProvider} from 'antd';
import type {TableProps} from 'antd';
import {FrownOutlined} from '@ant-design/icons';

const renderEmpty = () => {
  return (
    <div>
      <FrownOutlined style={{marginRight:10}} />哎呀卧槽,数据又跑丢了~
    </div>
  )
}

const Table:PFC<TableProps<{}>> = (props) => {
  let {dataSource,rowKey,pagination=false,...others} = props;
  if(dataSource){
    dataSource = dataSource.map((item,index) => ({__index:index+1,...item}))
  }
  if(!rowKey){
    rowKey = '__index'
  }
  return (
    <ConfigProvider renderEmpty={renderEmpty}>
      <AntTable
        {...others} 
        dataSource={dataSource}
        rowKey={rowKey} 
        pagination={pagination}
      />
    </ConfigProvider>
    
  )
}

Table.height = 200;

export default Table;
export {
  TableProps
}