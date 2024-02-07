import { Button } from '@/components/ui/button';
import { ComponentProps } from 'react';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa6';

type Props = ComponentProps<typeof Button> & {
  isLoading?: boolean;
};

export function SendButton({
  children,
  isLoading = false,
  disabled,
  ...rest
}: Props) {
  return (
    <Button
      type='submit'
      className='flex gap-2 items-center'
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
