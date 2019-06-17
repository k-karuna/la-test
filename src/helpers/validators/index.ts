export const validateUrl = (url: string): boolean => {
  const urlRegexp = new RegExp('^(ftp|http|https)://[^ "]+$');
  return urlRegexp.test(url);
};
