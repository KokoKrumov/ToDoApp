export const checkInputFields = (val: string) => {
  if (val.match(/^\s*$/)) {
    return false;
  } else {
    console.log(Boolean(val && val.length !== 0));
    return Boolean(val && val.length !== 0);
  }
};
