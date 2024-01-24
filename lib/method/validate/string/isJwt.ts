import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';

export const isJwt: ValidateMethod<string> = (value) => {
  const [header, payload, signature] = value.split('.');

  try {
    const decodedHeader = atob(header);
    const decodedPayload = atob(payload);

    JSON.parse(decodedHeader);
    JSON.parse(decodedPayload);
  } catch (err) {
    return new TaskResult(false, value, 'Value is not jwt');
  }

  if (!signature) {
    return new TaskResult(false, value, 'Value is not jwt');
  }

  return new TaskResult(true, value);
};
