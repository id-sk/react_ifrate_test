import React from 'react';

export interface SettingsBrightnessIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SettingsBrightnessIcon = ({ size, ...props }: SettingsBrightnessIconProps) => {
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
      
<path d="M21.8751 3.125H3.12508C1.97925 3.125 1.04175 4.0625 1.04175 5.20833V19.7917C1.04175 20.9375 1.97925 21.875 3.12508 21.875H21.8751C23.0209 21.875 23.9584 20.9375 23.9584 19.7917V5.20833C23.9584 4.0625 23.0209 3.125 21.8751 3.125ZM21.8751 19.8021H3.12508V5.19792H21.8751V19.8021ZM8.33341 16.6667H10.9376L12.5001 18.2292L14.0626 16.6667H16.6667V14.0625L18.2292 12.5L16.6667 10.9375V8.33333H14.0626L12.5001 6.77083L10.9376 8.33333H8.33341V10.9375L6.77091 12.5L8.33341 14.0625V16.6667ZM12.5001 9.375C14.2292 9.375 15.6251 10.7708 15.6251 12.5C15.6251 14.2292 14.2292 15.625 12.5001 15.625V9.375Z" fill="currentColor"/>
    </svg>
  );
};

export default SettingsBrightnessIcon;
