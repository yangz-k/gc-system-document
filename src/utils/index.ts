function parseUrlParameters() {
  const paramsString = window.location.href.slice(
    window.location.href.indexOf("?") + 1
  );
  const hashes = paramsString ? paramsString.split("&") : [];
  const vars = {}; // 使用一个空对象来存储参数

  for (let i = 0; i < hashes.length; i++) {
    const hash = hashes[i].split("=");
    const key = decodeURIComponent(hash[0]); // 解码参数名
    const value = decodeURIComponent(hash[1] || ""); // 解码参数值，并处理没有值的情况
    vars[key] = value; // 将参数名和值作为属性存储到对象中
  }

  return vars;
}

export const getUrlVar = (name) => {
  // 获取指定名称的参数值
  var p = parseUrlParameters()[name];
  if (p) {
    return decodeURIComponent(p); // 解码
  }
  return null;
};
