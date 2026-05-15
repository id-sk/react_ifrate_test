import React from 'react';

export interface AlarmAddIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const AlarmAddIcon = ({ size, ...props }: AlarmAddIconProps) => {
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
        d="M8.20825 3.60419L6.87492 2.01044L2.08325 6.02085L3.427 7.6146L8.20825 3.60419ZM22.9166 6.03127L18.1249 2.01044L16.7812 3.60419L21.5728 7.62502L22.9166 6.03127ZM12.4999 4.2396C7.32284 4.2396 3.12492 8.43752 3.12492 13.6146C3.12492 18.7917 7.31242 22.9896 12.4999 22.9896C17.677 22.9896 21.8749 18.7917 21.8749 13.6146C21.8749 8.43752 17.677 4.2396 12.4999 4.2396ZM12.4999 20.9063C8.46867 20.9063 5.20825 17.6459 5.20825 13.6146C5.20825 9.58335 8.46867 6.32294 12.4999 6.32294C16.5312 6.32294 19.7916 9.58335 19.7916 13.6146C19.7916 17.6459 16.5312 20.9063 12.4999 20.9063ZM13.5416 9.44794H11.4583V12.5729H8.33325V14.6563H11.4583V17.7813H13.5416V14.6563H16.6666V12.5729H13.5416V9.44794Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AlarmAddIcon;
