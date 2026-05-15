import React from 'react';

export interface CameraRearIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CameraRearIcon = ({ size, ...props }: CameraRearIconProps) => {
  return (
    <svg
      width={size || '1em'}
      height={size || '1em'}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3239_32784)">
        <path
          d="M10.4166 20.8333H5.20825V22.9167H10.4166V25L13.5416 21.875L10.4166 18.75V20.8333ZM14.5833 20.8333V22.9167H19.7916V20.8333H14.5833ZM17.7083 0H7.29159C6.14575 0 5.20825 0.9375 5.20825 2.08333V16.6667C5.20825 17.8125 6.14575 18.75 7.29159 18.75H17.7083C18.8541 18.75 19.7916 17.8125 19.7916 16.6667V2.08333C19.7916 0.9375 18.8541 0 17.7083 0ZM12.4999 6.25C11.3437 6.25 10.4166 5.3125 10.4166 4.16667C10.4166 3.02083 11.3437 2.08333 12.4895 2.08333C13.6353 2.08333 14.5728 3.02083 14.5728 4.16667C14.5833 5.3125 13.6458 6.25 12.4999 6.25Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3239_32784">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CameraRearIcon;
