import { FC, ReactNode } from 'react';

interface IComposeContext {
  components?: FC<{ children?: ReactNode }>[];
  children?: ReactNode | undefined;
}

export default function ComposeContext({
  components = [],
  children,
}: IComposeContext): JSX.Element {
  return (
    <>
      {components?.reduceRight((acc, Component: any) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
}
