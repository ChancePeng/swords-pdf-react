import React from 'react';
import { PFC } from "../typing";
import {Table as AntTable,ConfigProvider} from 'antd';
import type {TableProps as AntTableProps,TableColumnType as AntTableColumnType} from 'antd';
import {FrownOutlined} from '@ant-design/icons';
import {get} from 'lodash';
import SwordsTable from './table'

const renderEmpty = () => {
  return (
    <div>
      <FrownOutlined style={{marginRight:10}} />暂无数据~
    </div>
  )
}

interface TableColumnType<T> extends AntTableColumnType<T>{
  dataIndex?:string|string[]
}
interface TableProps<T> extends AntTableProps<T>{
  columns?:TableColumnType<T>[]
}

const Table:PFC<TableProps<{}>> = (props) => {
  let {dataSource,rowKey,pagination=false,columns,...others} = props;
  if(dataSource){
    dataSource = dataSource.map((item,index) => ({__index:index+1,...item}))
  }
  if(!rowKey){
    rowKey = '__index'
  }
  const _columns:any = columns?.map(item => {
    const {render,dataIndex,...others} = item;
    if(!render && (typeof dataIndex !== 'string')){
      return {
        ...others,
        dataIndex:dataIndex?.[0],
        render:(_:any,record:Record<string,any>)=>{
          let result = null;
          if(dataIndex){
            for(const _name of dataIndex){
              const _result = get(record,_name);
              if(_result){
                result = _result;
                break;
              }
            }
          }
          return result;
        }
      }
    }
    return item;
  }) || []
  return (
    // <ConfigProvider renderEmpty={renderEmpty}>
    //   <AntTable
    //     {...others} 
    //     dataSource={dataSource}
    //     rowKey={rowKey}
    //     columns={_columns}
    //     pagination={pagination}
    //     className='swords-ui-table'
    //   />
    // </ConfigProvider>
    <SwordsTable dataSource={dataSource} columns={_columns} />
    
  )
}

export default Table;
export {
  TableProps
}