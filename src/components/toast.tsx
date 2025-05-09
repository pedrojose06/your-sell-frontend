import { FC, useEffect } from 'react'
import { CSSProperties } from 'react'

interface ToastProps {
  message: string
  duration?: number // Duration in milliseconds
  onClose: () => void
  type?: 'success' | 'error' | 'warning'
}

const Toast: FC<ToastProps> = ({
  message,
  duration = 3000,
  onClose,
  type = 'success',
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div
      style={{
        ...styles.toast,
        backgroundColor:
          type === 'success'
            ? '#C8E6C9'
            : type === 'error'
              ? '#FFCDD2'
              : '#FFE0B2',
      }}
    >
      <span style={{ marginRight: '10px' }}>
        {type === 'success' && '✔️'}
        {type === 'error' && '❌'}
        {type === 'warning' && '⚠️'}
      </span>
      {message}
    </div>
  )
}

const styles: { toast: CSSProperties } = {
  toast: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    color: '#333',
    padding: '10px 20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    transition: 'opacity 0.5s ease-in-out',
  },
}

export default Toast
