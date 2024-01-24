import { TaskResult } from '../class/TaskResult';

export type ValidateMethod<T = any> = (value: T, ...arg: any[]) => TaskResult;
