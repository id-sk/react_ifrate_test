import React from 'react';

export interface AccessAlarmsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AccessAlarmsIcon = ({ size, ...props }: AccessAlarmsIconProps) => {
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
        d="M22.9166 6.04175L18.1249 1.97925L16.7708 3.54175L21.5624 7.60425L22.9166 6.04175ZM8.22909 3.64592L6.87492 2.08341L2.08325 6.04175L3.43742 7.60425L8.22909 3.64592ZM13.0208 8.43758H11.4583V14.6876L16.3541 17.7084L17.1874 16.4584L13.0208 13.9584V8.43758ZM12.4999 4.27092C7.29159 4.27092 3.12492 8.43758 3.12492 13.6459C3.12492 18.8542 7.29159 23.0209 12.4999 23.0209C17.7083 23.0209 21.8749 18.8542 21.8749 13.6459C21.8749 8.43758 17.7083 4.27092 12.4999 4.27092ZM12.4999 20.9376C8.43742 20.9376 5.20825 17.7084 5.20825 13.6459C5.20825 9.58342 8.43742 6.35425 12.4999 6.35425C16.5624 6.35425 19.7916 9.58342 19.7916 13.6459C19.7916 17.7084 16.5624 20.9376 12.4999 20.9376Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AccessAlarmsIcon;
