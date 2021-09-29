import React, { useCallback, useState } from 'react'
import styles from './App.module.scss'
import Message from './Components/Message'

function App() {
    const [count, setCount] = useState<number>(0)
    const [history, setHistory] = useState<number[]>([0])

    const handleCount = useCallback(
        (type: 'plus' | 'minus', step: number) => {
            let result = count

            if (type === 'plus') {
                result = count + step
            } else {
                result = count - step
            }

            if (type === 'minus' && result < 0) {
                result = 0
            }

            setHistory([...history, result])
            setCount(result)
        },
        [count, history],
    )

    return (
        <div className={styles['PageContainer']}>
            <main className={styles['message-container']}>
                <Message count={count} />

                <div className={styles['btn-container']}>
                    <button onClick={() => handleCount('plus', 5)}>+5</button>
                    <button onClick={() => handleCount('plus', 1)}>+1</button>
                    <button onClick={() => handleCount('minus', 1)}>-1</button>
                    <button onClick={() => handleCount('minus', 5)}>-5</button>
                </div>
            </main>

            <div className={styles['history-container']}>
                {history.map((x, i) => {
                    const maxNumber = Math.max(...history)

                    return (
                        <p key={`history_${i}`} style={{ color: x === maxNumber ? 'red' : undefined }}>
                            {x}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default App
