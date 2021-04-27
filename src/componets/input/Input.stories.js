import React from 'react';
import Input from './Input';

const InputConfig = {
    title: 'Form/Input',
    component: Input
}

export default InputConfig;

export const Small = () => <Input size='small' placeholder='Small Size'></Input>
export const Medium = () => <Input size='medium' placeholder='Medium Size'></Input>
export const Large = () => <Input size='large' placeholder='Large Size'></Input>
export const ByDefault = () => <Input placeholder='ByDefault Size'></Input>


Small.storyName = 'Small Input';