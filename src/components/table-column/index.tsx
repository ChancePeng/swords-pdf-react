import React from 'react';
import { PFC } from "../typing";

interface ColumnType {
  dataIndex?:string,
  title?:string,
  render?:(data:any,records:Record<string,any>,str?:string)=>JSX.Element,
  align?:'center'|'left'|'right'
}


interface Props {
  dataSource?:Record<string,any>[],
  columns:ColumnType[],
  tableTitle?:string,
}

const TableColumn:PFC<Props> = (props) => {
  const {columns=[],dataSource=[],tableTitle} = props;

  const renderEachColumn = (key:string|undefined,column:ColumnType) => {
    const {render,align='left'} = column;
    return dataSource?.map((item,index) => {
      let _data = key?item?.[key]:undefined;
      let str:string = '';
      if(index===0){
        str = 'start'
      }
      if(index===dataSource.length-1){
        str = 'end'
      }
      if(render){
        _data = render(_data,item,str);
      }
      return (
        <div 
          className='table-column-td' 
          style={{textAlign:align}} 
          key={`td-${index}`}
        >
          {_data || '-'}
        </div>
      )
    })
  }

  const renderEachRow = () => {
    return columns?.map((item,index) => {
      const {dataIndex,title} = item;
      
      return (
        <div className='table-column-tr' key={`tr-${index}`}>
          <div className="table-column-th">{title}</div>
          {renderEachColumn(dataIndex,item)}
        </div>
      )
    })
  }
  return (
    <div className='pdf-table-column'>
      <div className='table-column'>
        {
          renderEachRow()
        }
      </div>
    </div>
    
  )
}

export default TableColumn;
export {
  Props as TableColumnProps,
  ColumnType as TableColumnColumnType,
}