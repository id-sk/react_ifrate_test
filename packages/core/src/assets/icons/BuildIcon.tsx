import React from 'react';

export interface BuildIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BuildIcon = ({ size, ...props }: BuildIconProps) => {
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
        d="M23.6748 19.7397L14.1956 10.2605C15.1331 7.86469 14.6123 5.05219 12.6331 3.07302C10.5498 0.989687 7.4248 0.573021 4.9248 1.71885L9.40397 6.19802L6.27897 9.32302L1.69564 4.84385C0.445636 7.34385 0.966469 10.4689 3.0498 12.5522C5.02897 14.5314 7.84147 15.0522 10.2373 14.1147L19.7165 23.5939C20.1331 24.0105 20.7581 24.0105 21.1748 23.5939L23.5706 21.198C24.0915 20.7814 24.0915 20.0522 23.6748 19.7397Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BuildIcon;
