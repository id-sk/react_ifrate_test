import React from 'react';

export interface SortByAlphaIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SortByAlphaIcon = ({ size, ...props }: SortByAlphaIconProps) => {
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
        d="M15.849 4.85421H10.9323L13.3906 2.39587L15.849 4.85421ZM10.9635 20.1771H15.8177L13.3906 22.6042L10.9635 20.1771ZM6.64062 6.53129L1.95312 18.4688H3.86979L4.82813 15.9167H10.151L11.1094 18.4688H13.026L8.34896 6.53129H6.64062ZM5.46354 14.2084L7.48437 8.81254L9.50521 14.2084H5.46354ZM16.6719 16.8125H23.0469V18.4688H14.1615V17.125L20.3281 8.20837H14.2031V6.54171H22.849V7.85421L16.6719 16.8125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SortByAlphaIcon;
