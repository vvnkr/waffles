import Icon from './icon-base';

type InfoCircleProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function InfoCircle({ size, ...restProps }: InfoCircleProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M9,0 C13.9705627,0 18,4.02943725 18,9 C18,13.9705627 13.9705627,18 9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 Z M9,2 C5.13400675,2 2,5.13400675 2,9 C2,12.8659932 5.13400675,16 9,16 C12.8659932,16 16,12.8659932 16,9 C16,5.13400675 12.8659932,2 9,2 Z M9,7 C9.55228475,7 10,7.44771525 10,8 L10,13 C10,13.5522847 9.55228475,14 9,14 C8.44771525,14 8,13.5522847 8,13 L8,8 C8,7.44771525 8.44771525,7 9,7 Z M9,4 C9.55228475,4 10,4.44771525 10,5 C10,5.55228475 9.55228475,6 9,6 C8.44771525,6 8,5.55228475 8,5 C8,4.44771525 8.44771525,4 9,4 Z"
      />
    </Icon>
  );
}

export default InfoCircle;
