import { TaskResult } from '../class/TaskResult';

export type ValidateMethod<T = any> = (data: T) => TaskResult;
