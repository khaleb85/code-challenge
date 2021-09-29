import React, { FC, memo } from 'react'

export interface IMessage {
    count: number
}

const Message: FC<IMessage> = ({ count }) => {
    return <p>The current count is {count}</p>
}

export default memo(Message)
