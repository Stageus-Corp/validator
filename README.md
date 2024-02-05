# 🚀 @stagues/validator

You can use @stageus/validator to validate different types of data.

@stagues/valdiator allows you to transform or validate not only string type but also various types of data.

# Installation

```
npm install @stageus/validator
```

# ✏️ Usage

This library provides validation for Type as well as Boolean, Date, Number, String, Array, NumberArray, and StringArray types.

Firstly, a function called 'message' provides Type validation. Here, you can validate the type and use the basic utility method for validation. Once the type of data to be validated is confirmed, you can define and use the method to validate the type through each type validation method in a chaining manner.

```typescript
import { message } from '@stageus/validator';

const emailValdiator = message().isString().isEmail();

const result = emailValdiator.run('abc123@xx.xx');

result.valid; // true
result.message; // null
result.value; // abc123@xx.xx

const result2 = emailValidator.run('abc123');
result.valid; // false
result.message; // Value is not email format
result.value; // abc123
```

# 📄 Document

### Function

You can use the "Type" validation method through the function named 'message'. The Type validation method can be confirmed through the document below.

```typescript
message(). // then you can use Type method
```

## 🔧 Type Method

| Method Name      | Return  | Description                                                                                                                                                                           |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| optional()       | Type    | In case of null or undefined, the chaining method is ignored and the validation result is set to true.                                                                                |
| default(value)   | Type    | If the value is null or undefined, it is validated with the value put as the first parameter.                                                                                         |
| isNumber(option) | Number  | It checks if the input value is of type number. By default, numbers entered as a string are also allowed, but if the `strict` option is set to true, all strings fail the validation. |
| isArray()        | Array   | It checks if it is an array type.                                                                                                                                                     |
| isString(option) | String  | It checks if it is a string type. By default, only strings are allowed, but if `allowNumber` is set to true, it also converts numbers to strings and passes the validation.           |
| isBoolean()      | Boolean | It checks if it is a boolean type. By default, only true or false pass the validation, but if the strict option is set to true, "true", "false", 0, and 1 also pass the validation.   |
| isDate()         | Date    | It checks whether the input value can be converted to a Date object. If the input value is a string, it should basically follow the ISO8061 format.                                   |
| isEmpty()        |         | It checks if it is empty. Since this method only checks whether it is empty, you cannot use more validation method chaining.                                                          |

## 🔧 Number Method

| Method Name         | Return  | Description                                                                                                                                                                                                |
| ------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| range(option)       | Number  | It checks whether the input value falls within the range received as a parameter. The first parameter must have a min or max property. If not entered, it is basically evaluated as Infinite or -Infinite. |
| isIn(numberList)    | Number  | It checks whether the input value exists within the first parameter array.                                                                                                                                 |
| isNotIn(numberList) | Number  | It checks whether the input value does not exist within the first parameter array.                                                                                                                         |
| isInt()             | Number  | It checks if it is an Integer.                                                                                                                                                                             |
| isPort()            | Number  | It checks if it can be used as a port number.                                                                                                                                                              |
| toInt()             | Number  | It converts to an integer. In the process, decimal places are discarded.                                                                                                                                   |
| toString()          | String  | The value is changed to a string type, and now you can use the String method.                                                                                                                              |
| toBoolean()         | Boolean | The value is changed to a Boolean type, and now you can use the Boolean method.                                                                                                                            |

## 🔧 String Method

| Method Name           | Return       | Description                                                                                                                                                                                                                                                                                                                                                       |
| --------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isEmail()             | String       | Validates whether the input follows the standard email format.                                                                                                                                                                                                                                                                                                    |
| isJson()              | String       | Checks if the input can be parsed into a valid JSON object.                                                                                                                                                                                                                                                                                                       |
| isHanguel(option)     | String       | This is a method to check if the string is composed of Korean characters. The `complete` option is false by default, and if set to true, only completed Korean characters are allowed. The `space` option is false by default, and if set to true, spaces are allowed.                                                                                            |
| length(option)        | String       | This is a method to check the length of a string. The first parameter option must include the min or max property, and by default, it checks for -Infinity or Infinity.                                                                                                                                                                                           |
| match(regExp)         | String       | This is a method to check if the input value satisfies the regular expression.                                                                                                                                                                                                                                                                                    |
| isOnlyAlphabet()      | String       | This is a method to check if the string is composed only of alphabets.                                                                                                                                                                                                                                                                                            |
| isDate()              | String       | This is a method to check if the format is a date. e.g. YYYY-MM-DD                                                                                                                                                                                                                                                                                                |
| isDateTime()          | String       | This is a method to check if the format is a date with time. e.g. YYYY-MM-DDTHH:MI:SS                                                                                                                                                                                                                                                                             |
| isPw(option)          | String       | This is a method to check if the format is a password. The `number` option is true by default, and if set to false, you can prevent the string from including numbers. The `uppercase` option is false by default, and if set to true, uppercase letters must be included. `Strong` is false by default, and if set to true, special characters must be included. |
| isJwt()               | String       | This is a method to check if the string is in JWT format.                                                                                                                                                                                                                                                                                                         |
| isEndWith(endStr)     | String       | This is a method to check if the string ends with the string received as the first parameter.                                                                                                                                                                                                                                                                     |
| isStartWith(startStr) | String       | This is a method to check if the string starts with the string received as the first parameter.                                                                                                                                                                                                                                                                   |
| include(includeStr)   | String       | This is a method to check if the string includes the string received as the first parameter.                                                                                                                                                                                                                                                                      |
| toNumber()            | Number       | This is a method that changes it to a number type. Now you can use the Number method. If the string cannot be changed to a number, the validation fails and the value does not change.                                                                                                                                                                            |
| toInt()               | Number       | This is a method that converts the string to an integer. Now you can use the Number method. If the string cannot be changed to a integer, the validation fails and the value does not change.                                                                                                                                                                     |
| toDate()              | Date         | This is a method that changes it to a Date type. Now you can use the Date method. If the string cannot be changed to a date, the validation fails and the value does not change.                                                                                                                                                                                  |
| toBoolean()           | Boolean      | This is a method that changes it to a Boolean type. Now you can use the Boolean method. If the string cannot be changed to a Boolean, the validation fails and the value does not change.                                                                                                                                                                         |
| split()               | String Array | This is a method that splits the string by the character received as the first parameter. Now you can use the String Array method.                                                                                                                                                                                                                                |
| trim()                | String       | This is a method that removes the whitespace from both ends of the string.                                                                                                                                                                                                                                                                                        |
| rTrim()               | String       | This is a method that removes the whitespace from the left end of the string.                                                                                                                                                                                                                                                                                     |
| lTrim()               | String       | This is a method that removes the whitespace from the right end of the string.                                                                                                                                                                                                                                                                                    |

## 🔧 Date Method

| Method Name    | Return | Description                                                                                        |
| -------------- | ------ | -------------------------------------------------------------------------------------------------- |
| isBefore(date) | Date   | This is a method that checks if the date is earlier than the date received as the first parameter. |
| isAfter(date)  | Date   | This is a method that checks if the date is later than the date received as the first parameter.   |

## 🔧 Array Method

| Method Name    | Return       | Description                                                                                                                                                                      |
| -------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| length(option) | Array        | This is a method to check the length of an array. The first parameter option must include the `min` or `max` property, and by default, it is evaluated as Infinity or -Infinity. |
| isAllNotNull() | Array        | This is a method to check if all elements of the array are not Null or Undefined.                                                                                                |
| isALlIf(func)  | Array        | This is a method that evaluates all values in the array with a custom function that returns a boolean type.                                                                      |
| isAllString()  | String Array | This is a method that checks if all values in the array are of String Type. Now you can use the String Array method.                                                             |
| isAllNumber()  | Number Array | This is a method that checks if all values in the array are of Number Type. Now you can use the Number Array method.                                                             |

## 🔧 Number Array Method

| Method Name            | Return       | Description                                                                                                                                                                                    |
| ---------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isAllInt()             | Number Array | This is a method that checks if all elements of the array are of integer type.                                                                                                                 |
| isAllIn(numberList)    | Number Array | This is a method that checks if all elements of the array are one of the values in the number array received as the first parameter.                                                           |
| isAllNotIn(numberList) | Number Array | This is a method that checks if all elements of the array are not included in the number array received as the first parameter.                                                                |
| isAllPort()            | Number Array | This is a method that checks if all elements of the array can be used as port numbers.                                                                                                         |
| allRange(option)       | Number Array | This is a method that checks if all elements of the array are within the range. The first parameter must have a min or max property, and by default, it is evaluated as Infinity or -Infinity. |

## 🔧 String Array Method

| Method Name              | Return       | Description                                                                                                                                                                                                                                                                                  |
| ------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isAllMatch(regExp)       | String Array | This is a method that checks if all elements of the array satisfy the regular expression.                                                                                                                                                                                                    |
| isAllJwt()               | String Array | This is a method that checks if all elements of the array are in the Jwt format.                                                                                                                                                                                                             |
| isAllJson()              | String Array | This is a method that checks if all elements of the array are JSON.                                                                                                                                                                                                                          |
| allInclude(includeStr)   | String Array | This is a method that checks if all elements of the array contain the string received as the first parameter.                                                                                                                                                                                |
| allLength(option)        | String Array | This is a method that checks if the length of all strings in the array falls within the range. The first parameter must have a min or max property, and by default, it is evaluated as Infinity or -Infinity.                                                                                |
| isAllStartWith(startStr) | String Array | This is a method that checks if all strings in the array start with the string received as the first parameter.                                                                                                                                                                              |
| isAllEndWith(endStr)     | String Array | This is a method that checks if all elements of the array end with the string received as the first parameter.                                                                                                                                                                               |
| isAllHanguel(option)     | String Array | This is a method that checks if all elements of the array are in Korean. By default, `complete` is false and only complete Korean characters pass the validation when it's true. The `space` option is false by default, and if it's true, the validation succeeds even if there is a space. |
| isAllOnlyAlphabet()      | String Array | This is a method that checks if all elements of the array are strings made up of only alphabets.                                                                                                                                                                                             |
| isAllEmail()             | String Array | This is a method that checks if all elements of the array are in email format.                                                                                                                                                                                                               |
| isAllDateTime()          | String Array | This is a method that checks if all elements of the array are in a date format that includes time.                                                                                                                                                                                           |

## 🔧 Boolean Method

There are no methods yet.

<br/>

# Maintainer

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/jochongs">
        <img src="https://github.com/jochongs.png" width="100px;" alt="Kyeong Chan Min" style="border-radius: 100%;border:2px solid white" />
        <br />
        <sub>
          <b>Kyeong Chan Min</b>
        </sub>
      </a>
      <br />
      Author
    </td>
  </tr>
</table>

<br/>

# LICENSE

[LICENSE](https://github.com/Stageus-Corp/validator/blob/master/LICENSE)
