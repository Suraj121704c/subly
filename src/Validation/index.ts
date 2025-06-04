// export const ValidAllFields = props => {
//   const valid = Object.values(props)?.every(value => value?.trim());
//   return valid;
// };

export const firstNames = (name: string) => {
  const pattern = /[a-zA-Z]{2,40}[a-zA-Z]{2,40}$/;
  return pattern.test(name.trim());
};

export const lastNames = (name: string) => {
  const pattern = /[a-zA-Z]{2,40}[a-zA-Z]{2,40}$/;
  return pattern.test(name.trim());
};

export const EmailValidate = (email: string) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return reg.test(email.trim());
};

export const mobileValidation = (num: string) => {
  const pattern = /^[0]?[789]\d{9}$/;
  return pattern.test(num.trim());
};

export const Password_Validation = (pass: string) => {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d:@$!%*?,&#]{8,}$/;
  return pattern.test(pass);
};

export const removeSpacialCharacter = (number: string) => {
  return number.replace(/[^\d]/g, '');
};
