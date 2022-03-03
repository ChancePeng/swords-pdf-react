import { FC } from "react";
import { TableProps } from "./table";
import { DescriptionsProps } from "./descriptions";
import { ChartsModelProps } from './charts-model';
import { TableColumnProps } from './table-column'

type PFCProps<T> = TableProps<T> | DescriptionsProps | ChartsModelProps | TableColumnProps

export type DefaultProps<T = {}, D = {}> = PFCProps<D> &  T;

export type PFC<T={}> = FC<T> & {
  height?: ((props?: Record<string, any>, options?: Record<string, any>) => number) | number,
}

export * from './descriptions';

export * from './table';

export * from './charts-model';

export * from './table-column';