import Icon from './icon-base';

type RowsProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Rows({ size, ...restProps }: RowsProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M2,8 L16,8 L16,5 C16,4.44771525 15.5522847,4 15,4 L3,4 C2.44771525,4 2,4.44771525 2,5 L2,8 Z M2,10 L2,13 C2,13.5522847 2.44771525,14 3,14 L15,14 C15.5522847,14 16,13.5522847 16,13 L16,10 L2,10 Z M3,2 L15,2 C16.6568542,2 18,3.34314575 18,5 L18,13 C18,14.6568542 16.6568542,16 15,16 L3,16 C1.34314575,16 0,14.6568542 0,13 L0,5 C0,3.34314575 1.34314575,2 3,2 Z"
      />
    </Icon>
  );
}

export default Rows;
