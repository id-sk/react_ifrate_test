import React from 'react';

export interface DoDisturbIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const DoDisturbIcon = ({ size, ...props }: DoDisturbIconProps) => {
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
        d="M12.4999 2.0835C6.77075 2.0835 2.08325 6.771 2.08325 12.5002C2.08325 18.2293 6.77075 22.9168 12.4999 22.9168C18.2291 22.9168 22.9166 18.2293 22.9166 12.5002C22.9166 6.771 18.2291 2.0835 12.4999 2.0835ZM4.16659 12.5002C4.16659 7.91683 7.91659 4.16683 12.4999 4.16683C14.3749 4.16683 16.1458 4.79183 17.6041 5.93766L5.93742 17.6043C4.79159 16.146 4.16659 14.3752 4.16659 12.5002ZM12.4999 20.8335C10.6249 20.8335 8.85409 20.2085 7.39575 19.0627L19.0624 7.396C20.2083 8.85433 20.8333 10.6252 20.8333 12.5002C20.8333 17.0835 17.0833 20.8335 12.4999 20.8335Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DoDisturbIcon;
