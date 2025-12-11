import React from 'react';

interface BorderProps {
  class: string; // add something like h-full left-[10%]
}
export const BorderWrapper: React.FC<BorderProps> = (props) => (
  <div className={`absolute z-50 border-1 border-[var(--primary-grey)] ${props?.class}`} />
);
