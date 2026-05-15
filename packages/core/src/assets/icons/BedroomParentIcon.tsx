import React from 'react';

export interface BedroomParentIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const BedroomParentIcon = ({ size, ...props }: BedroomParentIconProps) => {
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
        d="M17.1874 12.5002H7.81242C7.2395 12.5002 6.77075 12.9689 6.77075 13.5418V14.5835H18.2291V13.5418C18.2291 12.9689 17.7603 12.5002 17.1874 12.5002Z"
        fill="currentColor"
      />
      <path d="M11.7187 8.85433H7.552V10.9377H11.7187V8.85433Z" fill="currentColor" />
      <path d="M17.4478 8.85433H13.2812V10.9377H17.4478V8.85433Z" fill="currentColor" />
      <path
        d="M20.8333 2.0835H4.16659C3.02075 2.0835 2.08325 3.021 2.08325 4.16683V20.8335C2.08325 21.9793 3.02075 22.9168 4.16659 22.9168H20.8333C21.9791 22.9168 22.9166 21.9793 22.9166 20.8335V4.16683C22.9166 3.021 21.9791 2.0835 20.8333 2.0835ZM19.7916 17.7085H18.2291V16.146H6.77075V17.7085H5.20825V13.7189C5.20825 13.0314 5.46867 12.4064 5.88534 11.9272V9.37516C5.88534 8.22933 6.82284 7.29183 7.96867 7.29183H11.4583C11.8437 7.29183 12.2083 7.41683 12.4999 7.62516C12.7916 7.41683 13.1562 7.29183 13.5416 7.29183H17.0312C18.177 7.29183 19.1145 8.22933 19.1145 9.37516V11.9272C19.5312 12.4064 19.7916 13.0314 19.7916 13.7189V17.7085Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BedroomParentIcon;
