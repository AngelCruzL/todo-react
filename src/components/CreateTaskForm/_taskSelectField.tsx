import { FC, ReactElement } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import PropTypes from 'prop-types';

import { ISelectField } from './interfaces';

const _TaskSelectField: FC<ISelectField> = ({
  disabled = false,
  value = '',
  onChange = (e) => console.log(e),
  name = 'selectBox',
  label = 'Select Box',
  items = [{ value: '', label: 'Add Items' }],
}): ReactElement => {
  return (
    <FormControl fullWidth size={'small'}>
      <InputLabel id={`${name}-id`}>{label}</InputLabel>

      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        disabled={disabled}
        onChange={onChange}
        name={name}
      >
        {items.map(({ value, label }, index) => (
          <MenuItem key={value + index} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

_TaskSelectField.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default _TaskSelectField;
