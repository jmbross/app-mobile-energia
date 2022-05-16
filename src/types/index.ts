export enum ValidationErrorType {
  none = 'none',
  empty = 'empty',
  name = 'name',
  id = 'id',
  email = 'email',
  password = 'password',
  phone = 'phone',
}

export type UnitType = 'number' | 'percent' | 'money' | 'kw' | 'kwh' | 'wh' | 'lbs' | 'miles' | 'default';
