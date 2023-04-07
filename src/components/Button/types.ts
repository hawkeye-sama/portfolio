import React from 'react';

export interface IButtonProps {
  prefix?: string;
  suffix?: string;

  background?: string;
  contentColor?: string;

  as?: any;
  href?: string;
  target?: string;
  download?: boolean;
  children?: React.ReactNode;

  size?: 'small' | 'medium';
  variation?: 'filled' | 'plain' | 'outlined';
  onClick?: () => void;
}
