import React from 'react';

export interface EditLocationAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EditLocationAltIcon = ({ size, ...props }: EditLocationAltIconProps) => {
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
        d="M14.0098 14.0625H8.8536V8.90625L14.6973 3.0625C13.8328 2.77083 12.9161 2.60417 11.9786 2.60417C7.6036 2.60417 3.64526 5.95833 3.64526 11.1458C3.64526 14.6042 6.42651 18.6979 11.9786 23.4375C17.5307 18.6979 20.3119 14.6042 20.3119 11.1458C20.3119 10.0937 20.1453 9.125 19.8432 8.22917L14.0098 14.0625Z"
        fill="currentColor"
      />
      <path
        d="M10.9369 11.9792H13.1453L19.5619 5.5625L17.3536 3.35417L10.9369 9.77083V11.9792Z"
        fill="currentColor"
      />
      <path
        d="M21.0515 2.60417L20.3119 1.86458C20.1036 1.66667 19.8432 1.5625 19.5723 1.5625C19.4369 1.5625 19.0723 1.63542 18.8328 1.86458L18.0828 2.61458L20.2911 4.82292L21.0411 4.07292C21.4578 3.66667 21.4578 3.01042 21.0515 2.60417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default EditLocationAltIcon;
