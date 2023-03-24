import { SelectChangeEvent } from '@mui/material';

import { IDisabled } from './IDisabled';

export interface ISelectField extends IDisabled {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (event: SelectChangeEvent) => void;
  items?: ISelectItems[];
}

export interface ISelectItems {
  value: string;
  label: string;
}
