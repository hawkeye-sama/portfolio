import React from 'react';

import { Button as ButtonEl, Icon } from './styled.components';
import { IButtonProps } from './types';

function Button({ as, href, prefix, suffix, target, children, download, ...props }: IButtonProps) {
  return (
    <ButtonEl
      as={as}
      href={href}
      target={target}
      download={download}
      size={props.size}
      variation={props.variation}
      onClick={props.onClick}
      background={props.background}
      contentColor={props.contentColor}
    >
      {prefix && <Icon icon={prefix} variation={props.variation} />}
      {children}
      {suffix && <Icon icon={suffix} variation={props.variation} />}
    </ButtonEl>
  );
}

Button.defaultProps = {
  prefix: undefined,
  suffix: undefined,
  background: undefined,
  contentColor: undefined,
  as: undefined,
  href: undefined,
  target: undefined,
  download: undefined,
  size: undefined,
  variation: undefined,
  onClick: undefined,
};

export default Button;
