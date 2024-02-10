import { TaskResult } from '../../../class/TaskResult';
import { Validate } from '../../../../types/Validate';
import { ValidateMethod } from '../../../../types/ValidateMethod';

export const isHangeul: ValidateMethod<string> = (
  value,
  option?: Validate.String.IsHanguelOption
) => {
  let completeOption = option?.complete ? option.complete : true;
  let spaceOption = option?.space ? option.space : false;

  const hanguelRegExp = new RegExp(
    completeOption
      ? `^[가-힣${spaceOption ? '\\s' : ''}]+$`
      : `^[ㄱ-ㅎㅏ-ㅣ가-힣${spaceOption ? '\\s' : ''}]*$`
  );

  const hangeulCondition = hanguelRegExp.test(value);
  if (!hangeulCondition) {
    return new TaskResult(
      false,
      value,
      `Value is not ${completeOption ? 'complete' : ''} hanguel`
    );
  }

  return new TaskResult(true, value);
};
