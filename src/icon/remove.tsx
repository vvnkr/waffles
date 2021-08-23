import Icon from './icon-base';

type RemoveProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Remove({ size, ...restProps }: RemoveProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9,16 C12.8659932,16 16,12.8659932 16,9 C16,5.13400675 12.8659932,2 9,2 C5.13400675,2 2,5.13400675 2,9 C2,12.8659932 5.13400675,16 9,16 Z M9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 Z M6,10 C5.44771525,10 5,9.55228475 5,9 C5,8.44771525 5.44771525,8 6,8 L12,8 C12.5522847,8 13,8.44771525 13,9 C13,9.55228475 12.5522847,10 12,10 L6,10 Z"
      />
    </Icon>
  );
}

export default Remove;
