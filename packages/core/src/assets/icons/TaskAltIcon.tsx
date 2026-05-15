import React from 'react';

export interface TaskAltIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TaskAltIcon = ({ size, ...props }: TaskAltIconProps) => {
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
        d="M22.9166 5.39587L11.0312 17.2917L6.6145 12.875L8.08325 11.4063L11.0312 14.3542L21.4478 3.93754L22.9166 5.39587ZM20.6145 10.6459C20.7499 11.2396 20.8333 11.8646 20.8333 12.5C20.8333 17.1042 17.1041 20.8334 12.4999 20.8334C7.89575 20.8334 4.16659 17.1042 4.16659 12.5C4.16659 7.89587 7.89575 4.16671 12.4999 4.16671C14.1458 4.16671 15.6666 4.64587 16.9583 5.46879L18.4583 3.96879C16.7708 2.78129 14.7187 2.08337 12.4999 2.08337C6.74992 2.08337 2.08325 6.75004 2.08325 12.5C2.08325 18.25 6.74992 22.9167 12.4999 22.9167C18.2499 22.9167 22.9166 18.25 22.9166 12.5C22.9166 11.2605 22.6874 10.073 22.2916 8.96879L20.6145 10.6459Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TaskAltIcon;
