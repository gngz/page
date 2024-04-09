import { Button } from '../../../components/ui/button';
import { cn } from '../../../lib/utils';
import { ComponentProps } from 'react';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa6';

type Props = ComponentProps<typeof Button> & {
  isLoading?: boolean;
};

export function SendButton({
  children,
  className,
  isLoading = false,
  disabled,
  ...rest
}: Props) {
  return (
    <Button
      type='submit'
      className={cn(
        'flex w-28 select-none items-center justify-center gap-2',
        className,
      )}
      {...rest}
      disabled={isLoading || disabled}
      aria-disabled={isLoading || disabled}
    >
      {isLoading ? (
        <>
          <FaSpinner className='h-4 w-4 animate-spin' />
          <span>Sending</span>
        </>
      ) : (
        <>
          <FaPaperPlane className='' />
          <span>{children}</span>
        </>
      )}
    </Button>
  );
}
