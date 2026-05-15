import React from 'react';

export interface SendTimeExtensionIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SendTimeExtensionIcon = ({ size, ...props }: SendTimeExtensionIconProps) => {
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
        d="M19.7916 6.5105C19.7916 5.36466 18.8541 4.42716 17.7083 4.42716H13.5416C13.5416 2.98966 12.3749 1.823 10.9374 1.823C9.49992 1.823 8.33325 2.98966 8.33325 4.42716H4.177C3.03117 4.42716 2.09367 5.36466 2.09367 6.5105V10.4688C4.89575 10.4688 5.20825 12.7188 5.20825 13.2813C5.20825 13.8438 4.90617 16.0938 2.08325 16.0938V20.0522C2.08325 21.198 3.02075 22.1355 4.16659 22.1355H8.12492C8.12492 19.8855 9.552 19.2397 10.4166 19.073V9.3855L19.7916 14.073V6.5105Z"
        fill="currentColor"
      />
      <path
        d="M12.4999 12.7605V16.9272L16.6666 17.9688L12.4999 19.0105V23.1772L22.9166 17.9688L12.4999 12.7605Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SendTimeExtensionIcon;
