import React from 'react';
import { Status } from '../../CreateTaskForm/enums';

export interface ITaskFooter {
  id: string;
  status?: Status;

  onStatusChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => void;

  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => void;
}
