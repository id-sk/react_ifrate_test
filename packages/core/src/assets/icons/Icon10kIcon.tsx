import React from 'react';

export interface Icon10kIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Icon10kIcon = ({ size, ...props }: Icon10kIconProps) => {
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
        d="M10.4167 10.9375H11.9792V14.0625H10.4167V10.9375ZM19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM7.8125 15.625H6.25V10.9375H4.6875V9.375H7.8125V15.625ZM13.5417 14.5833C13.5417 15.1562 13.0729 15.625 12.5 15.625H9.89583C9.32292 15.625 8.85417 15.1562 8.85417 14.5833V10.4167C8.85417 9.84375 9.32292 9.375 9.89583 9.375H12.5C13.0729 9.375 13.5417 9.84375 13.5417 10.4167V14.5833ZM20.3125 15.625H18.4896L16.6667 13.2812V15.625H15.1042V9.375H16.6667V11.7188L18.4896 9.375H20.3125L17.9687 12.5L20.3125 15.625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Icon10kIcon;
