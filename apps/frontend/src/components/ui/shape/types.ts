export type ShapeProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> &
  (
    | {
        variant?: 'circle';
        radius: number;
      }
    | {
        variant?: 'square';
        size?: number;
      }
  );
