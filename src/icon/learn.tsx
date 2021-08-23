import Icon from './icon-base';

type LearnProps = Omit<React.ComponentProps<typeof Icon>, 'children'>;

function Learn({ size, ...restProps }: LearnProps) {
  return (
    <Icon viewBox="0 0 18 18" size={size} {...restProps}>
      <path
        fill="currentColor"
        d="M11.8787991,16.2438933 L10.8637991,17.9998933 L7.1317991,17.9998933 L6.1177991,16.2438933 L11.8787991,16.2438933 Z M8.99820546,0 C12.6830012,0 15.6714109,2.97755359 15.6714109,6.65215308 C15.6714109,8.99786992 14.4427788,11.1330217 12.4722502,12.3327559 L12.4722502,12.3327559 L12.4284087,12.3587765 L12.4285563,15.1025176 L5.5811364,15.1025176 L5.58099743,12.3670302 L5.56462905,12.3574078 C3.60549727,11.1849538 2.3550289,9.07505988 2.3255335,6.73676788 L2.3255335,6.73676788 L2.325,6.65215308 C2.325,2.97755359 5.31340976,0 8.99820546,0 Z M8.99820546,1.7561067 C6.2818529,1.7561067 4.0811067,3.94885812 4.0811067,6.65215308 C4.0811067,8.54259977 5.16648157,10.2388374 6.8432521,11.0544168 L6.8432521,11.0544168 L7.3372431,11.2946935 L7.33710414,13.3464109 L10.672302,13.3464109 L10.6724496,11.2897729 L11.164423,11.0489201 C11.2992067,10.9829348 11.4308681,10.9108059 11.5590113,10.8327874 C13.0118098,9.94826738 13.9153042,8.37814911 13.9153042,6.65215308 C13.9153042,3.94885812 11.714558,1.7561067 8.99820546,1.7561067 Z M9.21488664,3.98495733 L8.7223211,5.885416 L11.1709012,5.88541664 L10.2608866,9.71195733 L8.45588664,9.71195733 L8.94815642,7.6415227 L6.45288664,7.64152334 L7.40088664,3.98495733 L9.21488664,3.98495733 Z"
      />
    </Icon>
  );
}

export default Learn;
