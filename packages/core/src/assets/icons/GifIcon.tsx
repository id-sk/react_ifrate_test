import React from 'react';

export interface GifIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const GifIcon = ({ size, ...props }: GifIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.5416 9.375H11.9791V15.625H13.5416V9.375Z" fill="currentColor" />
      <path
        d="M9.37492 9.375H6.24992C5.62492 9.375 5.20825 9.89583 5.20825 10.4167V14.5833C5.20825 15.1042 5.62492 15.625 6.24992 15.625H9.37492C9.99992 15.625 10.4166 15.1042 10.4166 14.5833V12.5H8.85409V14.0625H6.77075V10.9375H10.4166V10.4167C10.4166 9.89583 9.99992 9.375 9.37492 9.375Z"
        fill="currentColor"
      />
      <path
        d="M19.7916 10.9375V9.375H15.1041V15.625H16.6666V13.5417H18.7499V11.9792H16.6666V10.9375H19.7916Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GifIcon;
