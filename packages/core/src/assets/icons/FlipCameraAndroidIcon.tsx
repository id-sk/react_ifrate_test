import React from 'react';

export interface FlipCameraAndroidIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const FlipCameraAndroidIcon = ({ size, ...props }: FlipCameraAndroidIconProps) => {
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
        d="M9.37492 12.5002C9.37492 14.2293 10.7708 15.6252 12.4999 15.6252C14.2291 15.6252 15.6249 14.2293 15.6249 12.5002C15.6249 10.771 14.2291 9.37516 12.4999 9.37516C10.7708 9.37516 9.37492 10.771 9.37492 12.5002Z"
        fill="currentColor"
      />
      <path
        d="M8.33325 10.4168V8.3335H5.302C6.7395 5.84391 9.427 4.16683 12.4999 4.16683C16.3749 4.16683 19.6353 6.8335 20.5624 10.4168H22.7083C21.7395 5.66683 17.5416 2.0835 12.4999 2.0835C9.09367 2.0835 6.06242 3.72933 4.16659 6.26058V4.16683H2.08325V10.4168H8.33325Z"
        fill="currentColor"
      />
      <path
        d="M16.6666 14.5835V16.6668H19.6978C18.2603 19.1564 15.5728 20.8335 12.4999 20.8335C8.62492 20.8335 5.3645 18.1668 4.43742 14.5835H2.29159C3.26034 19.3335 7.45825 22.9168 12.4999 22.9168C15.9062 22.9168 18.9374 21.271 20.8333 18.7397V20.8335H22.9166V14.5835H16.6666Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FlipCameraAndroidIcon;
