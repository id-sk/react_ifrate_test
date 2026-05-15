import React from 'react';

export interface TextRotationDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TextRotationDownIcon = ({ size, ...props }: TextRotationDownIconProps) => {
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
        d="M21.875 12.5V10.9375L10.4167 5.98962V8.17712L12.7083 9.11462V14.323L10.4167 15.2605V17.448L21.875 12.5ZM14.5833 9.77087L19.8125 11.7188L14.5833 13.6667V9.77087ZM6.25 20.573L9.375 17.448H7.29167V4.42712H5.20833V17.448H3.125L6.25 20.573Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TextRotationDownIcon;
