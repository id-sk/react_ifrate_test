import React from 'react';

export interface TextSnippetIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TextSnippetIcon = ({ size, ...props }: TextSnippetIconProps) => {
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
        d="M21.2604 8.76042L16.2292 3.72917C15.8437 3.34375 15.3125 3.125 14.7604 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H19.7917C20.9375 21.875 21.875 20.9375 21.875 19.7917V10.2396C21.875 9.6875 21.6562 9.15625 21.2604 8.76042ZM7.29167 7.29167H14.5833V9.375H7.29167V7.29167ZM17.7083 17.7083H7.29167V15.625H17.7083V17.7083ZM17.7083 13.5417H7.29167V11.4583H17.7083V13.5417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TextSnippetIcon;
