import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isDate: ValidateMethod = (data: string) => {
  const regExp =
    /^(((\d{4})(-)(0[13578]|10|12)(-)(0[1-9]|[12][0-9]|3[01]))|((\d{4})(-)(0[469]|11)(-)([0][1-9]|[12][0-9]|30))|((\d{4})(-)(02)(-)(0[1-9]|1[0-9]|2[0-8]))|(([02468][048]00)(-)(02)(-)(29))|(([13579][26]00)(-)(02)(-)(29))|(([0-9][0-9][0][48])(-)(02)(-)(29))|(([0-9][0-9][2468][048])(-)(02)(-)(29))|(([0-9][0-9][13579][26])(-)(02)(-)(29)))$/;

  const condition = regExp.test(data);

  if (!condition) {
    return new TaskResult(
      false,
      data,
      '"Value is not a valid date format. (e.g. YYYY-MM-DD)"'
    );
  }

  return new TaskResult(true, data);
};