import React from 'react';

export interface Icon60fpsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Icon60fpsIcon = ({ size, ...props }: Icon60fpsIconProps) => {
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
        d="M19.7916 8.33325V16.6666H15.6249V8.33325H19.7916ZM19.7916 5.20825H15.6249C13.8958 5.20825 12.4999 6.60409 12.4999 8.33325V16.6666C12.4999 18.3958 13.8958 19.7916 15.6249 19.7916H19.7916C21.5208 19.7916 22.9166 18.3958 22.9166 16.6666V8.33325C22.9166 6.60409 21.5208 5.20825 19.7916 5.20825ZM10.4166 8.33325V5.20825H5.20825C3.47909 5.20825 2.08325 6.60409 2.08325 8.33325V16.6666C2.08325 18.3958 3.47909 19.7916 5.20825 19.7916H8.33325C10.0624 19.7916 11.4583 18.3958 11.4583 16.6666V13.5416C11.4583 11.8124 10.0624 10.4166 8.33325 10.4166H5.20825V8.33325H10.4166ZM8.33325 13.5416V16.6666H5.20825V13.5416H8.33325Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Icon60fpsIcon;
