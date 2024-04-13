'use client';

import { Flex, Select as RadixSelect } from '@radix-ui/themes';
import { ComponentRef, forwardRef, useCallback, useState } from 'react';
import { SelectProps } from './types';

type Ref = ComponentRef<typeof RadixSelect.Trigger>;

const Select = forwardRef<Ref, SelectProps>(function (props, ref) {
  const [value, setValue] = useState<string | undefined>(props.initialValue);
  const item = props.items.find((item) => item.value === value);

  const onChangeHandler = useCallback(
    (value: string) => {
      setValue(value);
      props.onChange?.(value);
    },
    [props, setValue],
  );

  return (
    <RadixSelect.Root
      size={props.size}
      value={value}
      onValueChange={onChangeHandler}
    >
      <RadixSelect.Trigger
        variant={props.variant}
        placeholder={props.placeholder}
        ref={ref}
      >
        <Flex as='span' align='center' gap='2'>
          {item?.icon}
          {item?.label}
        </Flex>
      </RadixSelect.Trigger>
      <RadixSelect.Content>
        {props.items.map((item) => (
          <RadixSelect.Item key={item.value} value={item.value}>
            {item.label}
          </RadixSelect.Item>
        ))}
      </RadixSelect.Content>
    </RadixSelect.Root>
  );
});

Select.displayName = 'Select';

export default Select;
