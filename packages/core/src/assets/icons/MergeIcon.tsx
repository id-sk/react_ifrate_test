import React from 'react';

export interface MergeIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MergeIcon = ({ size, ...props }: MergeIconProps) => {
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
        d="M6.677 21.875L5.20825 20.4062L10.2395 15.375C11.0208 14.5938 11.4583 13.5312 11.4583 12.4271V7.11458L9.802 8.76042L8.33325 7.29167L12.4999 3.125L16.6666 7.29167L15.1978 8.76042L13.5416 7.11458V12.4271C13.5416 13.5312 13.9791 14.5938 14.7603 15.375L19.7916 20.4062L18.3228 21.875L12.4999 16.0521L6.677 21.875Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MergeIcon;
