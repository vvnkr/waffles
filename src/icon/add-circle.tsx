import Icon from './icon-base';

type AddCircleProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function AddCircle({ size, ...restProps }: AddCircleProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9,16 C12.8659932,16 16,12.8659932 16,9 C16,5.13400675 12.8659932,2 9,2 C5.13400675,2 2,5.13400675 2,9 C2,12.8659932 5.13400675,16 9,16 Z M9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 Z M10,8 L13,8 C13.5522847,8 14,8.44771525 14,9 C14,9.55228475 13.5522847,10 13,10 L10,10 L10,13 C10,13.5522847 9.55228475,14 9,14 C8.44771525,14 8,13.5522847 8,13 L8,10 L5,10 C4.44771525,10 4,9.55228475 4,9 C4,8.44771525 4.44771525,8 5,8 L8,8 L8,5 C8,4.44771525 8.44771525,4 9,4 C9.55228475,4 10,4.44771525 10,5 L10,8 Z"
      />
    </Icon>
  );
}

export default AddCircle;
