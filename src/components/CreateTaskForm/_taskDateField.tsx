import { FC, ReactElement } from 'react';
import {
  DesktopDatePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import PropTypes from 'prop-types';

import { IDateField } from './interfaces';

const _TaskDateField: FC<IDateField> = ({
  disabled = false,
  value = new Date(),
  onChange = (date) => console.log(date),
}): ReactElement => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Due Date"
          format="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </LocalizationProvider>
    </>
  );
};

_TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};

export default _TaskDateField;
