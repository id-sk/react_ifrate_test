import React from 'react';

export interface VideogameAssetOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const VideogameAssetOffIcon = ({ size, ...props }: VideogameAssetOffIconProps) => {
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
        d="M22.3906 21.3333L3.24479 2.1875L1.76562 3.65625L3.75521 5.64583C2.96354 5.9375 2.40104 6.70833 2.40104 7.59375V15.9271C2.40104 17.0729 3.33854 18.0104 4.48438 18.0104H16.1198L20.9219 22.8125L22.3906 21.3333ZM9.69271 12.8021V14.8854H7.60938V12.8021H5.52604V10.7188H7.60938V9.5L10.9115 12.8021H9.69271ZM21.8802 17.875C22.6719 17.5833 23.2344 16.8125 23.2344 15.9271V7.59375C23.2344 6.44792 22.2969 5.51042 21.151 5.51042H9.51562L21.8802 17.875ZM18.5469 8.63542C19.4115 8.63542 20.1094 9.33333 20.1094 10.1979C20.1094 11.0625 19.4115 11.7604 18.5469 11.7604C17.6823 11.7604 16.9844 11.0625 16.9844 10.1979C16.9844 9.33333 17.6823 8.63542 18.5469 8.63542Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default VideogameAssetOffIcon;
