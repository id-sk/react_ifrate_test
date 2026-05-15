import React from 'react';

export interface RepeatOneIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const RepeatOneIcon = ({ size, ...props }: RepeatOneIconProps) => {
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
        d="M7.29167 7.29171H17.7083V10.4167L21.875 6.25004L17.7083 2.08337V5.20837H5.20833V11.4584H7.29167V7.29171ZM17.7083 17.7084H7.29167V14.5834L3.125 18.75L7.29167 22.9167V19.7917H19.7917V13.5417H17.7083V17.7084ZM13.5417 15.625V9.37504H12.5L10.4167 10.4167V11.4584H11.9792V15.625H13.5417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RepeatOneIcon;
