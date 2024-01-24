import { TaskResult } from '../../../class/TaskResult';
import { Validate } from '../../../types/Validate';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isPw: ValidateMethod = (
  data: string,
  option: Validate.IsPwOption
) => {
  const spaceRegExp = /\s/;
  const spaceCondition = spaceRegExp.test(data);
  if (spaceCondition) {
    return new TaskResult(false, data, 'Value must not contain any spaces');
  }

  const alphabetRegExp = /(?=.*[A-Za-z])/;
  const alphabetCondition = alphabetRegExp.test(data);
  if (!alphabetCondition) {
    return new TaskResult(
      false,
      data,
      'Value must include at least one alphabet'
    );
  }

  const numberRegExp = /(?=.*\d)/;
  if (option.number !== false) {
    const numberCondition = numberRegExp.test(data);

    if (!numberCondition) {
      return new TaskResult(
        false,
        data,
        'Value must include at least one number'
      );
    }
  }

  const specialSymbolRegExp = /(?=.*[~`!@#$%^&*()\-_=+[\]{};:'",.<>/?])/;
  if (option.strong) {
    const specialSymbolCondition = specialSymbolRegExp.test(data);

    if (!specialSymbolCondition) {
      return new TaskResult(
        false,
        data,
        'Value must include at least one special character'
      );
    }
  }

  const uppercaseRegExp = /(?=.*[a-z])(?=.*[A-Z])/;
  if (option.uppercase) {
    const uppercaseCondition = uppercaseRegExp.test(data);

    if (!uppercaseCondition) {
      return new TaskResult(
        false,
        data,
        'Value must include at least one uppercase letter'
      );
    }
  }

  return new TaskResult(true, data);
};
