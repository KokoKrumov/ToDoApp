export const checkInputFields = (val: string) => {
  if (val.match(/^\s*$/)) {
    return false;
  } else {
    return Boolean(val && val.length !== 0);
  }
};
