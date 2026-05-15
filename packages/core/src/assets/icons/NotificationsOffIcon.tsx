import React from 'react';

export interface NotificationsOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const NotificationsOffIcon = ({ size, ...props }: NotificationsOffIconProps) => {
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
        d="M20.3124 19.2083L4.96867 3.375L3.64575 4.69792L6.56242 7.61458V7.625C6.02075 8.65625 5.72909 9.875 5.72909 11.1875V16.3958L3.64575 18.4792V19.5208H17.9478L20.0312 21.6042L21.3541 20.2812L20.3124 19.2083ZM11.9791 22.6562C13.1353 22.6562 14.0624 21.7292 14.0624 20.5729H9.89575C9.89575 21.7292 10.8228 22.6562 11.9791 22.6562ZM18.2291 15.0312V11.1979C18.2291 7.98958 16.5208 5.32292 13.5416 4.61458V3.90625C13.5416 3.04167 12.8437 2.34375 11.9791 2.34375C11.1145 2.34375 10.4166 3.04167 10.4166 3.90625V4.61458C10.2603 4.64583 10.1145 4.69792 9.97909 4.73958C9.87492 4.77083 9.77075 4.8125 9.66659 4.85417H9.65617C9.64575 4.85417 9.64575 4.85417 9.63534 4.86458C9.39575 4.95833 9.15617 5.07292 8.927 5.1875C8.927 5.1875 8.91659 5.1875 8.91659 5.19792L18.2291 15.0312Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default NotificationsOffIcon;
