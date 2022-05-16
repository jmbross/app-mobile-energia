import { UnitType } from '@/types/index';

export const bytesToSize = (bytes: number): string => {
  const sizes: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) {
    return 'n/a';
  }

  const i: number = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString(), 10);
  if (i === 0) {
    return `${bytes} ${sizes[i]}`;
  }

  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
};

export const numberToSize = (value: number): string => {
  const sizes: string[] = ['', 'K', 'M', 'G', 'T'];
  if (value === 0) {
    return '0';
  }

  const i: number = parseInt(Math.floor(Math.log(value) / Math.log(1000)).toString(), 10);
  if (i === 0) {
    return value.toString();
  }

  return `${UnitHelper.comma(value / 1000 ** i, 1)}${sizes[i]}`;
};

export const UnitHelper = {
  renderUnit: (type: UnitType): string => {
    switch (type) {
      case 'number':
        return 'cnt';
      case 'percent':
        return '%';
      case 'money':
        return '$';
      case 'lbs':
        return 'lbs';
      case 'miles':
        return 'miles';
      case 'kw':
        return ' kW';
      case 'kwh':
        return ' kWh';
      case 'wh':
        return ' Wh';
      default:
        return '';
    }
  },

  comma: (val: number, fixed = 0): string => {
    const values = val.toString().split('.');

    // 소수점이 없는 경우
    const integer = values[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (values.length === 1) {
      return integer;
    }

    // 소수점을 포함하는 경우
    const decimal = values[1].substring(0, fixed);
    return `${integer}.${decimal}`;
  },

  positive: (val: number): boolean => {
    return val >= 0;
  },

  renderText: (val: number | string, symbol = false, fixed = 0): string => {
    if (val === null) {
      return 'NULL';
    }

    if (val === 0) {
      return '0';
    }

    const ret = typeof val === 'string' ? Number(val) : val;

    if (symbol) {
      return `${UnitHelper.positive(ret) ? '+' : '-'}${UnitHelper.comma(Math.abs(ret), fixed)}`;
    }

    return UnitHelper.comma(ret, fixed);
  },
  rateText: (val: number, symbol = false): string => {
    if (val === null) {
      return 'NULL';
    }

    if (symbol && UnitHelper.positive(val)) {
      return `+ ${UnitHelper.comma(Math.abs(val))}`;
    }
    return UnitHelper.comma(val);
  },
  renderUnitValue: (value: number, type: UnitType, symbol = false, fixed = 0) => {
    if (type === 'money') {
      return `${symbol ? '+' : ''}${UnitHelper.renderUnit(type)}${UnitHelper.renderText(value, false, fixed)}`;
    }

    return `${UnitHelper.renderText(value, false, fixed)} ${UnitHelper.renderUnit(type)}`;
  },
};
