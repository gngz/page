import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { FaTriangleExclamation } from 'react-icons/fa6';

type Props = {
  validationMessage: string;
};

export function ValidationTooltip({ validationMessage }: Readonly<Props>) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <FaTriangleExclamation className='text-red-500 ml-1' />
        </TooltipTrigger>
        <TooltipContent>
          <p>{validationMessage}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
