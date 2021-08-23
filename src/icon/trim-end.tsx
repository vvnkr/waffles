import Icon from './icon-base';

type TrimEndProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function TrimEnd({ size, ...restProps }: TrimEndProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M10.579783,10.0004139 L1.00014656,10.002052 C0.447861816,10.0021329 8.09486484e-05,9.55448329 3.62210262e-14,9.00219855 C-8.09486483e-05,8.4499138 0.447568675,8.00213294 0.999853419,8.00205199 L10.5895532,8.00041216 L7.30493668,4.70395096 C6.91529473,4.31290392 6.91672367,3.68031903 7.30812832,3.29103307 C7.69953296,2.90174711 8.33269633,2.90317476 8.72233828,3.2942218 L13.6526884,8.24235128 C13.8653306,8.42570031 13.9999556,8.69704997 14,8.99985342 C14.0000453,9.30886231 13.8599278,9.58515609 13.6397427,9.76862211 L8.70710678,14.706779 C8.31658249,15.0977403 7.68341751,15.0977403 7.29289321,14.706779 C6.90236892,14.3158176 6.90236892,13.6819439 7.29289321,13.2909825 L10.579783,10.0004139 Z M17,0 C17.5522847,-1.01453063e-16 18,0.44771525 18,1 L18,17 C18,17.5522847 17.5522847,18 17,18 C16.4477153,18 16,17.5522847 16,17 L16,1 C16,0.44771525 16.4477153,1.01453063e-16 17,0 Z"
      />
    </Icon>
  );
}

export default TrimEnd;
