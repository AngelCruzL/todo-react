import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';

import { ITextField } from './interfaces';

const _TaskTitleField: FC<ITextField> = ({
  onChange = (e) => console.log(e.target.value),
  disabled = false,
}): ReactElement => {
  return (
    <TextField
      id="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default _TaskTitleField;
