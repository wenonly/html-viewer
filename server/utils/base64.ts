// base64加密
export const base64_encode = (str: string) => {
  const b = Buffer.from(str, 'utf-8');
  return b.toString('base64');
};

// base64解密
export const base64_decode = (str: string) => {
  const b = Buffer.from(str, 'base64');
  return b.toString('utf-8');
};
