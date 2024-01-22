export type TextProps =
  | ({
      as: 'p';
    } & React.ComponentPropsWithoutRef<'p'>)
  | ({
      as: 'span';
    } & React.ComponentPropsWithoutRef<'span'>)
  | ({
      as: 'div';
    } & React.ComponentPropsWithoutRef<'div'>);
