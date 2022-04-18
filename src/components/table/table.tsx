import React from 'react';
import {FrownOutlined} from '@ant-design/icons';

interface ColumnType {
  dataIndex?:string,
  title?:string,
  width?:string | number,
  render?:(data?:any,record?:any) => string | number | null;
}

interface Props {
  columns?:ColumnType[],
  dataSource?:any,
}

const Table:React.FC<Props> = (props) => {
  const {dataSource,columns} = props;

  
  const renderEmpty = () => {

    if(!dataSource || dataSource?.length<=0){
      return (
        <div style={{textAlign:'center',color:'#CCC',fontSize:12,padding:8,border:'1px solid #ebebeb',borderTop:'none'}}>
          <FrownOutlined style={{marginRight:10}} />
          暂无数据~
        </div>
      )
    }
    return null;
  }


  const renderTh = () => {
    return columns?.map(item => {
      const {title,width} = item;
      return <div className='swords-table-th' style={{width}}>{title}</div>
    })
  }



  const renderTrWithTd = () => {
    return dataSource?.map((item:Record<string,any>,index:number) => {
      return (
        <div className='swords-table-tr' key={index}>
          {
            columns?.map((column,_index) => {
              const {dataIndex,render,width} = column;
              return (
                <div className='swords-table-td' key={_index} style={{width}}>
                  {dataIndex &&  (render?render(item[dataIndex],item):item[dataIndex])}
                </div>
              )
            })
          }
        </div>
      )
    })
  }
  return (
    <div className='swords-ui-table'>
      <div className="swords-table">
        <div className='swords-table-tr'>
          {renderTh()}
        </div>
        {renderTrWithTd()}
      </div>
      {renderEmpty()}
    </div>
  )
}

export default Table;