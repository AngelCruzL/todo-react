import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';

const _TaskDescriptionField: FC = (): ReactElement => {
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
    />
  );
};

export default _TaskDescriptionField;
