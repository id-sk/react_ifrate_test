import React from 'react';

export interface SwitchVideoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SwitchVideoIcon = ({ size, ...props }: SwitchVideoIconProps) => {
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
      
<path d="M18.7499 9.896V6.25016C18.7499 5.67725 18.2812 5.2085 17.7083 5.2085H3.12492C2.552 5.2085 2.08325 5.67725 2.08325 6.25016V18.7502C2.08325 19.3231 2.552 19.7918 3.12492 19.7918H17.7083C18.2812 19.7918 18.7499 19.3231 18.7499 18.7502V15.1043L22.9166 19.271V5.72933L18.7499 9.896ZM13.5416 16.146V13.5418H7.29159V16.146L3.64575 12.5002L7.29159 8.85433V11.4585H13.5416V8.85433L17.1874 12.5002L13.5416 16.146Z" fill="currentColor"/>
    </svg>
  );
};

export default SwitchVideoIcon;
