import { tokens } from '@datacamp/waffles/tokens';

function Logo() {
  return (
    <svg viewBox="0 0 159 35" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M25.218 20.296l6.272 6.273c.03.03.06.058.091.084a17.495 17.495 0 01-2.479 3.115c-.969.97-2.022 1.8-3.136 2.494l-.08-.088-6.273-6.272 5.605-5.606zm8.125-8.123c1.176 3.527 1.149 7.386-.074 10.943l-5.435-5.435zM16.997 28.517l5.427 5.427a17.091 17.091 0 01-10.917.065l5.49-5.492zm9.106-25.339A16.579 16.579 0 0129.338 5.7c.915.914 1.7 1.91 2.356 2.964l-.074.067-6.369 6.368-5.534-5.534 6.369-6.368zM8.88 20.401l5.534 5.534-6.367 6.368a1.766 1.766 0 00-.054.056 16.601 16.601 0 01-2.96-2.355 16.579 16.579 0 01-2.521-3.234L8.88 20.4zm8.22-8.22l5.535 5.533-5.606 5.605-5.533-5.533 5.605-5.606zm-16.007.433L6.3 17.819.92 23.196a17.103 17.103 0 01.173-10.582zM5.27 5.936a17.56 17.56 0 013.11-2.478l6.14 6.14-5.606 5.605L2.78 9.068a17.536 17.536 0 012.262-2.9zm6.652-4.167a17.104 17.104 0 0110.608-.181l-5.395 5.394z"
          fill={tokens.colors.green}
        />
        <path
          d="M52.599 28.084l3.916-11.82 3.88 11.82h4.456l6.18-18.539h-4.743l-3.7 11.677-3.881-11.677h-4.42l-3.88 11.64-3.664-11.64H42l6.144 18.54h4.455zm26.413.216c2.192 0 4.132-1.006 5.533-2.623v2.407h4.743V9.545h-4.743v2.407c-1.4-1.617-3.34-2.623-5.533-2.623h-.035c-4.384 0-7.833 4.24-7.833 9.486 0 5.281 3.45 9.485 7.833 9.485h.035zm1.258-4.743h-.036c-2.479 0-4.347-2.084-4.347-4.742 0-2.66 1.832-4.743 4.347-4.743h.036c2.371 0 4.275 2.12 4.275 4.743 0 2.622-1.904 4.742-4.275 4.742zm18.617 4.527V13.677h6.683v14.407h4.742V13.677h6.899v14.407h4.742V2.216h-4.742v7.329h-6.899V8.359c0-1.509 1.15-2.012 2.443-2.012.899 0 1.438.216 1.653.324V2.467c-.395-.144-1.473-.467-3.054-.467-3.52 0-5.784 2.659-5.784 6.323v1.222h-6.683V8.359c0-1.509 1.186-2.012 2.443-2.012.898 0 1.437.216 1.653.324V2.467C102.588 2.323 101.51 2 99.929 2c-3.521 0-5.785 2.659-5.785 6.323v1.222h-2.658v4.132h2.658v14.407h4.743zm35.072.216c5.929 0 7.977-4.743 8.156-6.288h-4.742c-.324.97-1.51 2.084-3.414 2.084-2.766 0-4.131-1.689-4.455-3.952h12.863c.036-.36.072-.862.072-1.401 0-5.174-3.773-9.414-8.623-9.414-5.102 0-9.162 4.132-9.162 9.486 0 5.46 3.952 9.485 9.305 9.485zm3.809-11.533h-8.12c.539-1.905 1.868-3.234 4.168-3.234 2.191 0 3.449 1.365 3.952 3.234zM151.283 28.3c4.06 0 7.186-2.228 7.186-6.036 0-2.623-1.797-4.635-5.461-5.497l-2.48-.575c-.97-.216-1.473-.683-1.473-1.437 0-.97.863-1.617 2.228-1.617.647 0 1.15.215 1.58.575.504.43.72 1.078.72 1.688h4.239c0-2.982-2.551-6.072-6.539-6.072-4.024 0-6.898 2.264-6.898 5.498 0 2.658 1.473 4.634 4.922 5.46l2.3.576c1.436.323 2.191.754 2.191 1.688 0 1.078-1.114 1.689-2.515 1.689-.826 0-1.545-.288-2.048-.719-.575-.467-.898-1.042-.898-1.688h-4.312c0 3.018 2.515 6.467 7.258 6.467z"
          fill={tokens.colors.navy}
        />
      </g>
    </svg>
  );
}

export default Logo;
