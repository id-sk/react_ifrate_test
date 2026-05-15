import React from 'react';

export interface MmsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MmsIcon = ({ size, ...props }: MmsIconProps) => {
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
        d="M20.8333 2.0835H4.16659C3.02075 2.0835 2.09367 3.021 2.09367 4.16683L2.08325 22.9168L6.24992 18.7502H20.8333C21.9791 18.7502 22.9166 17.8127 22.9166 16.6668V4.16683C22.9166 3.021 21.9791 2.0835 20.8333 2.0835ZM5.20825 14.5835L8.85409 9.896L11.4583 13.0314L15.1041 8.3335L19.7916 14.5835H5.20825Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MmsIcon;
