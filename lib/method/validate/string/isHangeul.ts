import { TaskResult } from '../../../class/TaskResult';
import { Validate } from '../../../../types/Validate';
import { ValidateMethod } from '../../../../types/ValidateMethod';

export const isHangeul: ValidateMethod<string> = (
  value,
  option: Validate.String.IsHanguelOption
) => {
  const hanguelRegExp = new RegExp(
    option.complete
      ? `^[가-힣${option.space ? '\\s' : ''}]+$`
      : `^[ㄱ-ㅎㅏ-ㅣ가-힣${option.space ? '\\s' : ''}]*$`
  );

  const hangeulCondition = hanguelRegExp.test(value);
  if (!hangeulCondition) {
    return new TaskResult(
      false,
      value,
      `Value is not ${option.complete ? 'complete' : ''} hanguel`
    );
  }

  return new TaskResult(true, value);
};
