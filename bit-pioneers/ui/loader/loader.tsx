import type { ReactNode } from 'react';

export type LoaderProps = {
  children?: ReactNode;
};

export function Loader({ children }: LoaderProps) {
  return (
    <div>
      {children}
    </div>
  );
}
