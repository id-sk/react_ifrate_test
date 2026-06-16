import React from 'react';

export interface EdgesensorHighIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const EdgesensorHighIcon = ({ size, ...props }: EdgesensorHighIconProps) => {
  return (
    <svg
      width={size || "1em"}
      height={size || "1em"}
      viewBox="0 0 25 25"
      fill="none"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
<path d="M3.125 7.29159H5.20833V14.5833H3.125V7.29159ZM0 10.4166H2.08333V17.7083H0V10.4166ZM22.9167 7.29159H25V14.5833H22.9167V7.29159ZM19.7917 10.4166H21.875V17.7083H19.7917V10.4166ZM16.6667 2.09367L8.33333 2.08325C7.1875 2.08325 6.25 3.02075 6.25 4.16659V20.8333C6.25 21.9791 7.1875 22.9166 8.33333 22.9166H16.6667C17.8125 22.9166 18.75 21.9791 18.75 20.8333V4.16659C18.75 3.02075 17.8125 2.09367 16.6667 2.09367ZM16.6667 17.7083H8.33333V7.29159H16.6667V17.7083Z" fill="currentColor"/>
    </svg>
  );
};

export default EdgesensorHighIcon;
