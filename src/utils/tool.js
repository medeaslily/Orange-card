function padZero(input) {
  // 检查输入的类型
  var str;
  if (typeof input === 'number') {
    // 如果输入是数字，转换为字符串
    str = input.toString();
  } else if (typeof input === 'string') {
    // 如果输入已经是字符串，直接使用
    str = input;
  } else {
    // 如果输入既不是数字也不是字符串，抛出错误
    throw new Error('Input must be a number or a string');
  }

  // 使用 padStart 方法来补零
  return str.padStart(2, '0');
}

export default {padZero}