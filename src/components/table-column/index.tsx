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
  columns?:ColumnType[] | ((data?:Record<string,any>[],record?:Record<string,any>) => ColumnType[]),
  bordered?:boolean,
  $data?:any
}

const TableColumn:PFC<Props> = (props) => {
  const {columns=[],dataSource=[],bordered=false,$data} = props;

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
          className='swords-ui-table-column-td'
          style={{textAlign:align}} 
          key={`td-${index}`}
        >
          {_data || '-'}
        </div>
      )
    })
  }

  const renderEachRow = () => {
    let _columns = columns;
    if(_columns instanceof Function){
      _columns = _columns(dataSource,$data)
    }
    return _columns?.map((item,index) => {
      const {dataIndex,title} = item;
      return (
        <div className='swords-ui-table-column-tr' key={`tr-${index}`}>
          <div className="swords-ui-table-column-th">{title}</div>
          {renderEachColumn(dataIndex,item)}
        </div>
      )
    })
  }
  return (
    <div className={`swords-ui-table-column ${bordered ? 'swords-ui-table-column-bordered':''}`}>
      {
        renderEachRow()
      }
    </div>
  )
}

export default TableColumn;
export {
  Props as TableColumnProps,
  ColumnType as TableColumnColumnType,
}