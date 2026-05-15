import React from 'react';

export interface GppMaybeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GppMaybeIcon = ({ size, ...props }: GppMaybeIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5001 2.08325L4.16675 5.20825V11.552C4.16675 16.8124 7.71883 21.7187 12.5001 22.9166C17.2813 21.7187 20.8334 16.8124 20.8334 11.552V5.20825L12.5001 2.08325ZM13.5417 16.6666H11.4584V14.5833H13.5417V16.6666ZM13.5417 12.4999H11.4584V7.29159H13.5417V12.4999Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GppMaybeIcon;
