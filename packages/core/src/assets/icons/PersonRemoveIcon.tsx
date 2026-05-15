import React from 'react';

export interface PersonRemoveIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const PersonRemoveIcon = ({ size, ...props }: PersonRemoveIconProps) => {
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
        d="M14.0625 8.33317C14.0625 6.03109 12.1979 4.1665 9.89583 4.1665C7.59375 4.1665 5.72917 6.03109 5.72917 8.33317C5.72917 10.6353 7.59375 12.4998 9.89583 12.4998C12.1979 12.4998 14.0625 10.6353 14.0625 8.33317ZM17.1875 10.4165V12.4998H23.4375V10.4165H17.1875ZM1.5625 18.7498V20.8332H18.2292V18.7498C18.2292 15.979 12.6771 14.5832 9.89583 14.5832C7.11458 14.5832 1.5625 15.979 1.5625 18.7498Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PersonRemoveIcon;
