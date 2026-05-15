import React from 'react';

export interface TaskIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const TaskIcon = ({ size, ...props }: TaskIconProps) => {
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
        d="M14.5834 2.08325H6.25008C5.10425 2.08325 4.17716 3.02075 4.17716 4.16659L4.16675 20.8333C4.16675 21.9791 5.09383 22.9166 6.23966 22.9166H18.7501C19.8959 22.9166 20.8334 21.9791 20.8334 20.8333V8.33325L14.5834 2.08325ZM11.3959 18.7499L7.70841 15.0624L9.17717 13.5937L11.3855 15.802L15.8022 11.3853L17.2709 12.8541L11.3959 18.7499ZM13.5417 9.37492V3.64575L19.2709 9.37492H13.5417Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TaskIcon;
