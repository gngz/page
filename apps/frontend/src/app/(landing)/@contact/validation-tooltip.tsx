import { Tooltip } from '@/components/atoms';
import { FaTriangleExclamation } from 'react-icons/fa6';

type Props = {
  validationMessage: string;
};

export function ValidationTooltip({ validationMessage }: Readonly<Props>) {
  return (
    <Tooltip content={validationMessage}>
      <div className='ml-1 flex items-center justify-center'>
        <FaTriangleExclamation className=' text-red-500' />
      </div>
    </Tooltip>
  );
}
