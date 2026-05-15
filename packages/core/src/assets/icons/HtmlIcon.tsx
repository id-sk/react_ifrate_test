import React from 'react';

export interface HtmlIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const HtmlIcon = ({ size, ...props }: HtmlIconProps) => {
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
        d="M3.64583 9.375H5.20833V15.625H3.64583V13.0208H1.5625V15.625H0V9.375H1.5625V11.4583H3.64583V9.375ZM18.2292 9.375H13.5417C12.9687 9.375 12.5 9.84375 12.5 10.4167V15.625H14.0625V10.9375H15.1042V14.5833H16.6667V10.9271H17.7083V15.625H19.2708V10.4167C19.2708 9.84375 18.8021 9.375 18.2292 9.375ZM11.4583 9.375H6.25V10.9375H8.07292V15.625H9.63542V10.9375H11.4583V9.375ZM25 15.625V14.0625H22.3958V9.375H20.8333V15.625H25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HtmlIcon;
