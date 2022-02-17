import React from 'react';
import {Descriptions as AntDescriptions} from 'antd';
import { PFC } from '../typing';
import type {DescriptionsProps as AntDescriptionsProps} from 'antd';

interface DescriptionsColumnType {
  dataIndex?:string;
  title?:string;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  label?: React.ReactNode;
  labelStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  span?: number;
  render?:(data?:Record<string,any>,record?:Record<string,any>) => JSX.Element | null;
}

interface DescriptionsProps extends AntDescriptionsProps {
  dataSource?:Record<string,any>,
  columns?:DescriptionsColumnType[]
}

const Descriptions:PFC<DescriptionsProps> = (props) => {
  const {dataSource,columns,...params} = props;
  const renderItemValue = (dataIndex?:string,
    render?:(data?:Record<string,any>,record?:Record<string,any>) => (JSX.Element | null)) => {
    if(dataIndex){
      if(render){
        return render(dataSource?.[dataIndex],dataSource)
      }else{
        return dataSource?.[dataIndex]
      }
    }
    return '-';
  }
  return (
    <AntDescriptions {...params}>
      {
        columns?.map((column,index) => {
          const {dataIndex,title,render,...others} = column;
          return (
            <AntDescriptions.Item key={index} {...others} label={title}>
              {
                renderItemValue(dataIndex,render)
              }
            </AntDescriptions.Item>
          )
        })
      }
    </AntDescriptions>
  )
}

export default Descriptions;
export {
  DescriptionsProps,
  DescriptionsColumnType,
}