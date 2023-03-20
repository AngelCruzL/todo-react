import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';

import { ITextField } from './interfaces';

const _TaskDescriptionField: FC<ITextField> = ({
  onChange = (e) => console.log(e.target.value),
  disabled = false,
}): ReactElement => {
  return (
    <TextField
      id="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      name="description"
      fullWidth
      multiline
      rows={4}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default _TaskDescriptionField;
