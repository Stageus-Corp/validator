import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isJwt: ValidateMethod<string> = (data) => {
  const [header, payload, signature] = data.split('.');

  try {
    const decodedHeader = atob(header);
    const decodedPayload = atob(payload);

    JSON.parse(decodedHeader);
    JSON.parse(decodedPayload);
  } catch (err) {
    return new TaskResult(false, data, 'Value is not jwt');
  }

  if (!signature) {
    return new TaskResult(false, data, 'Value is not jwt');
  }

  return new TaskResult(true, data);
};
