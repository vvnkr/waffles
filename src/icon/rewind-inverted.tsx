import Icon from './icon-base';

type RewindInvertedProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function RewindInverted({ size, ...restProps }: RewindInvertedProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M6.14501519,4.3407347 L10.6107667,7.31818927 C11.5350656,7.93444793 11.7796868,9.17575235 11.1571434,10.0907203 C11.0128459,10.3027981 10.8287556,10.4854776 10.6148697,10.6288384 L6.14911827,13.6220867 C5.22634968,14.2405886 3.97178983,14.0014834 3.34698042,13.0880303 C3.12085834,12.7574464 3,12.3673701 3,11.9681336 L3,5.99743072 C3,4.89428019 3.90340017,4 5.01780076,4 C5.41942139,4 5.81190562,4.11864024 6.14501519,4.3407347 Z M12.9821992,5.13059008 C12.9821992,4.57901482 13.4338993,4.13187472 13.9910996,4.13187472 C14.5482999,4.13187472 15,4.57901482 15,5.13059008 L15,13.0012846 C15,13.5528599 14.5482999,14 13.9910996,14 C13.4338993,14 12.9821992,13.5528599 12.9821992,13.0012846 L12.9821992,5.13059008 Z"
        transform="matrix(-1 0 0 1 18 0)"
      />
    </Icon>
  );
}

export default RewindInverted;
