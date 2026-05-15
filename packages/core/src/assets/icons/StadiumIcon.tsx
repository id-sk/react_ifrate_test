import React from 'react';

export interface StadiumIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const StadiumIcon = ({ size, ...props }: StadiumIconProps) => {
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
        d="M7.29159 5.271L3.12492 7.35433V3.18766L7.29159 5.271ZM18.7499 3.18766V7.35433L22.9166 5.271L18.7499 3.18766ZM11.4583 2.146V6.31266L15.6249 4.22933L11.4583 2.146ZM5.20825 10.521C6.64575 11.0314 9.13534 11.521 12.4999 11.521C15.8645 11.521 18.3541 11.0314 19.7916 10.521C19.7916 10.3335 16.8958 9.43766 12.4999 9.43766C8.10409 9.43766 5.20825 10.3335 5.20825 10.521ZM15.6249 17.771H9.37492V22.8543C5.14575 22.4481 2.08325 21.2502 2.08325 19.8543V10.4793C2.08325 8.75016 6.74992 7.35433 12.4999 7.35433C18.2499 7.35433 22.9166 8.75016 22.9166 10.4793V19.8543C22.9166 21.2502 19.8541 22.4377 15.6249 22.8439V17.771Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default StadiumIcon;
