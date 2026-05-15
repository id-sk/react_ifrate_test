import React from 'react';

export interface GroupRemoveIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GroupRemoveIcon = ({ size, ...props }: GroupRemoveIconProps) => {
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
        d="M25 9.37484V11.4582H18.75V9.37484H25ZM8.33333 4.1665C6.03125 4.1665 4.16667 6.03109 4.16667 8.33317C4.16667 10.6353 6.03125 12.4998 8.33333 12.4998C10.6354 12.4998 12.5 10.6353 12.5 8.33317C12.5 6.03109 10.6354 4.1665 8.33333 4.1665ZM8.33333 13.5415C5.55208 13.5415 0 14.9373 0 17.7082V20.8332H16.6667V17.7082C16.6667 14.9373 11.1146 13.5415 8.33333 13.5415ZM13.0312 4.21859C13.9896 5.32275 14.5833 6.76025 14.5833 8.33317C14.5833 9.90609 13.9896 11.3436 13.0312 12.4478C15.0729 12.1873 16.6667 10.4582 16.6667 8.33317C16.6667 6.20817 15.0729 4.479 13.0312 4.21859ZM17.2188 14.4061C18.1458 15.2707 18.75 16.354 18.75 17.7082V20.8332H20.8333V17.7082C20.8333 16.1978 19.1771 15.0936 17.2188 14.4061Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GroupRemoveIcon;
