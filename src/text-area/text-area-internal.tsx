import React, { useState } from 'react';

import { useId } from '../hooks';
import AutoGrow from './auto-grow';
import CharacterCount from './character-count';
import { textAreaWrapper, textAreaStyle } from './styles';

type TextAreaBaseProps = {
  /* Sets appropriate error style and `aria-invalid` attribute. */
  error?: boolean;
  /* Sets the style of the text area suitable for dark backgrounds. */
  inverted?: boolean;
  /* Allows height to expand as much as it needs to in order to contain the current value. */
  autoGrow?: boolean;
};

type TextAreaNoCouter = {
  /* Indicates whether or not the character count should be displayed. In addition set a character limit with `maxLength`. */
  showCharacterCount?: boolean;
} & TextAreaBaseProps &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>;

type TextAreaWithCounter = {
  showCharacterCount: true;
  /* [skip docs] */
  maxLength: number;
  /* [skip docs] */
  value: React.TextareaHTMLAttributes<HTMLTextAreaElement>['value'];
  /* [skip docs] */
  onChange: React.TextareaHTMLAttributes<HTMLTextAreaElement>['onChange'];
} & TextAreaBaseProps &
  Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    'size' | 'value' | 'onChange' | 'maxLength'
  >;

type TextAreaProps = TextAreaNoCouter | TextAreaWithCounter;

function TextAreaInternal(
  {
    value,
    inverted = false,
    autoGrow = false,
    error = false,
    showCharacterCount,
    maxLength,
    onFocus,
    onBlur,
    ...restProps
  }: TextAreaProps,
  ref?: React.Ref<HTMLTextAreaElement>,
) {
  const characterCounterId = useId('character-count');
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: React.FocusEvent<HTMLTextAreaElement>) {
    if (onFocus) {
      onFocus(event);
    }
    setIsFocused(true);
  }

  function handleBlur(event: React.FocusEvent<HTMLTextAreaElement>) {
    if (onBlur) {
      onBlur(event);
    }
    setIsFocused(false);
  }

  return (
    <AutoGrow {...{ value, autoGrow }}>
      <div css={textAreaWrapper({ isFocused, autoGrow })}>
        <textarea
          {...restProps}
          {...(showCharacterCount && {
            'aria-describedby': characterCounterId,
          })}
          ref={ref}
          value={value}
          maxLength={maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-invalid={error}
          css={textAreaStyle({ hasError: !!error, inverted })}
        />
        {showCharacterCount && maxLength && (
          <CharacterCount
            id={characterCounterId}
            value={value}
            limit={maxLength}
            inverted={inverted}
          />
        )}
      </div>
    </AutoGrow>
  );
}

export default TextAreaInternal;
