import React from 'react';
import { Primary } from '../componets/button/Button.stories';
import { Medium } from '../componets/input/Input.stories';

const SubscriptionsConfig = {
    title: 'form/Subscriptions'
}

export default SubscriptionsConfig;

export const PrimarySubscriptions = () => {
    return (
        <>
            <Medium />
            <Primary></Primary>
        </>
    )
}