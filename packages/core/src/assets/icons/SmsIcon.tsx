import React from 'react';

export interface SmsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SmsIcon = ({ size, ...props }: SmsIconProps) => {
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
      
<path d="M20.8333 2.0835H4.16659C3.02075 2.0835 2.09367 3.021 2.09367 4.16683L2.08325 22.9168L6.24992 18.7502H20.8333C21.9791 18.7502 22.9166 17.8127 22.9166 16.6668V4.16683C22.9166 3.021 21.9791 2.0835 20.8333 2.0835ZM9.37492 11.4585H7.29159V9.37516H9.37492V11.4585ZM13.5416 11.4585H11.4583V9.37516H13.5416V11.4585ZM17.7083 11.4585H15.6249V9.37516H17.7083V11.4585Z" fill="currentColor"/>
    </svg>
  );
};

export default SmsIcon;
