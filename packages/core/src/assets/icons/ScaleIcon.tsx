import React from 'react';

export interface ScaleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ScaleIcon = ({ size, ...props }: ScaleIconProps) => {
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
        d="M14.5833 11.4585V8.3335C19.3333 7.72933 22.9166 5.10433 22.9166 2.0835H2.08325C2.08325 5.10433 5.66659 7.72933 10.4166 8.3335V11.4585C6.58325 12.2189 2.08325 15.2189 2.08325 22.9168H8.33325V20.8335H4.302C5.27075 13.7189 11.2291 13.3335 12.4999 13.3335C13.7708 13.3335 19.7291 13.7189 20.6978 20.8335H16.6666V22.9168H22.9166C22.9166 15.2189 18.4166 12.2189 14.5833 11.4585ZM12.4999 22.9168C11.3541 22.9168 10.4166 21.9793 10.4166 20.8335C10.4166 20.2606 10.6458 19.7397 11.0312 19.3647C11.8645 18.5314 16.6666 16.6668 16.6666 16.6668C16.6666 16.6668 14.802 21.4689 13.9687 22.3022C13.5937 22.6877 13.0728 22.9168 12.4999 22.9168Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ScaleIcon;
