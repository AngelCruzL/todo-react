import {
  createContext,
  FC,
  PropsWithChildren,
  ReactElement,
  useState,
} from 'react';

export const TaskStatusChangedContext = createContext({
  updated: false,
  toggle: () => {},
});

export const TaskStatusChangedContextProvider: FC<
  PropsWithChildren
> = (props): ReactElement => {
  const [updated, setUpdated] = useState<boolean>(false);

  function toggleHandler() {
    updated ? setUpdated(false) : setUpdated(true);
  }

  return (
    <TaskStatusChangedContext.Provider
      value={{
        updated,
        toggle: toggleHandler,
      }}
    >
      {props.children}
    </TaskStatusChangedContext.Provider>
  );
};
