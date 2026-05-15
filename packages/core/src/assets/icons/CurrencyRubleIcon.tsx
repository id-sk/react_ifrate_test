import React from 'react';

export interface CurrencyRubleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CurrencyRubleIcon = ({ size, ...props }: CurrencyRubleIconProps) => {
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
        d="M14.0624 3.125H7.29159V12.5H5.20825V14.5833H7.29159V16.6667H5.20825V18.75H7.29159V21.875H9.37492V18.75H13.5416V16.6667H9.37492V14.5833H14.0624C17.2291 14.5833 19.7916 12.0208 19.7916 8.85417C19.7916 5.6875 17.2291 3.125 14.0624 3.125ZM14.0624 12.5H9.37492V5.20833H14.0624C16.0728 5.20833 17.7083 6.84375 17.7083 8.85417C17.7083 10.8646 16.0728 12.5 14.0624 12.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CurrencyRubleIcon;
