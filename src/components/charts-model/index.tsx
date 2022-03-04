import React from 'react';
import { PFC } from "../typing";
import {LineConfig,ColumnConfig,PieConfig,RadarConfig,DualAxesConfig} from '@ant-design/charts'
import {Line,Column,Pie,Radar,DualAxes} from '@ant-design/charts';

type ChartsModelType = 'line' | 'pie' | 'column' | 'radar' | 'dualaxes'

interface ChartsModelProps {
  modelType?:ChartsModelType,
  config:LineConfig | ColumnConfig | PieConfig | RadarConfig | DualAxesConfig,
  dataSource?:Record<string,any>[]
}

const ChartsmodelExample:Record<ChartsModelType,React.ElementType> = {
  line:Line,
  pie:Pie,
  column:Column,
  radar:Radar,
  dualaxes:DualAxes
}

const ChartsModel:PFC<ChartsModelProps> = (props) => {
  const {modelType,config,dataSource} = props;
  const Charts = modelType && ChartsmodelExample?.[modelType] || null;
  let _config = {
    ...config,
    data:config.data ? config.data : []
  };
  dataSource && (_config.data = dataSource);

  return (
    <div className='swords-ui-chart-model'>
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