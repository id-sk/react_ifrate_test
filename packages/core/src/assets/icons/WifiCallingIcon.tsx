import React from 'react';

export interface WifiCallingIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const WifiCallingIcon = ({ size, ...props }: WifiCallingIconProps) => {
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
        d="M22.3959 5.15625C22.1772 4.97917 19.9688 3.125 16.6667 3.125C13.3542 3.125 11.1563 4.97917 10.9376 5.15625L16.6667 12.5L22.3959 5.15625Z"
        fill="currentColor"
      />
      <path
        d="M20.3126 16.1562C19.0209 16.1562 17.7605 15.9479 16.5938 15.5625C16.2292 15.4375 15.8126 15.5312 15.5313 15.8125L13.2397 18.1042C10.2917 16.5937 7.87508 14.1875 6.37508 11.2396L8.66675 8.94792C8.95841 8.65625 9.04175 8.25 8.92716 7.88542C8.54175 6.71875 8.33341 5.46875 8.33341 4.16667C8.33341 3.59375 7.86466 3.125 7.29175 3.125H3.64591C3.073 3.125 2.60425 3.59375 2.60425 4.16667C2.60425 13.9479 10.5313 21.875 20.3126 21.875C20.8855 21.875 21.3542 21.4062 21.3542 20.8333V17.1979C21.3542 16.625 20.8855 16.1562 20.3126 16.1562Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WifiCallingIcon;
