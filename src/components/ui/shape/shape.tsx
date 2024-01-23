import { ShapeProps } from './types';
import { cn } from '@/lib/utils';

function shapeVariantsClass(props: ShapeProps) {
  if (props.variant === 'circle') {
    return cn('rounded-full');
  }
}

function shapeVariantStyle(props: ShapeProps) {
  if (props.variant === 'circle') {
    const { radius } = props;
    return {
      width: `${radius}px`,
      height: `${radius}px`,
    } as React.CSSProperties;
  }

  if (props.variant === 'square') {
    const { size } = props;
    if (!size) return;

    return {
      width: `${size}px`,
      height: `${size}px`,
    } as React.CSSProperties;
  }
}

export function Shape(props: ShapeProps) {
  const { className, variant, style, ...rest } = props;
  const styles = shapeVariantStyle(props);

  return (
    <div
      style={styles}
      className={cn('inline-block', shapeVariantsClass(props), className)}
      {...rest}
    ></div>
  );
}
