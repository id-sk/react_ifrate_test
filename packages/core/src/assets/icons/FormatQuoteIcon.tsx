import React from 'react';

export interface FormatQuoteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FormatQuoteIcon = ({ size, ...props }: FormatQuoteIconProps) => {
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
        d="M6.24992 17.7084H9.37492L11.4583 13.5417V7.29175H5.20825V13.5417H8.33325L6.24992 17.7084ZM14.5833 17.7084H17.7083L19.7916 13.5417V7.29175H13.5416V13.5417H16.6666L14.5833 17.7084Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FormatQuoteIcon;
