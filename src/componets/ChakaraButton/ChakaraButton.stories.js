import React from 'react';
import { Button } from '@chakra-ui/core';

const ChakraConfig = {
    title: 'Chakra/Button',
    component: Button,
    args: { size: 'lg', onClick: () => { console.log('Clicked', process.env) }, disabled: false }
}

export default ChakraConfig;

const Template = args => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
    variantColor: 'green',
    children: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
    variantColor: 'red',
    children: 'Danger'
}
export const Log = Template.bind({})
Log.args = {
    variantColor: 'blue',
    children: 'Log'
}