import { ReactElement } from 'react';

export type NonEmptyArray<T> = [T, ...T[]]; // toss Array util
export type TabType = Readonly<NonEmptyArray<string>>;

export interface TabNavProps<Tab extends TabType> {
  children?: Array<ReactElement<TabProps<TabType>>> | ReactElement<TabProps<TabType>>;
  tabs: Tab;
  initialTab?: Tab[number];
}

export interface TabProps<Tab extends TabType> {
  name: Tab[number];
  children: React.ReactNode | undefined;
}
