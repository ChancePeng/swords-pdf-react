import React from 'react';
import { PFC } from "../typing";
import {LineConfig,ColumnConfig,PieConfig,RadarConfig} from '@ant-design/charts'
import {Line,Column,Pie,Radar} from '@ant-design/charts';

type ChartsModelType = 'line' | 'pie' | 'column' | 'radar'

interface ChartsModelProps {
  modelType?:ChartsModelType,
  config:LineConfig | ColumnConfig | PieConfig | RadarConfig,
  dataSource?:Record<string,any>[]
}

const ChartsModalExample:Record<ChartsModelType,React.ElementType> = {
  line:Line,
  pie:Pie,
  column:Column,
  radar:Radar,
}

const ChartsModel:PFC<ChartsModelProps> = (props) => {
  const {modelType,config,dataSource} = props;
  const Charts = modelType && ChartsModalExample?.[modelType] || null;
  let _config = {
    ...config,
    data:dataSource,
  }

  return (
    <div>
      {Charts && <Charts {..._config} />}
    </div>
  )
}

export default ChartsModel;

export {
  ChartsModelProps,
  LineConfig,
  RadarConfig,
  ColumnConfig,
  PieConfig,
}