import { useEffect, useState } from 'react'

export type CountdownReturn = [
  times: {
    label: string
    value: number
    isZero: boolean
  }[],
  isFinished: boolean
]

const useCountdown = ({ end_date }: { end_date: string }): CountdownReturn => {
  const countDownDate = new Date(end_date).getTime()

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [countDownDate])

  return getReturnValues(countDown)
}

const getReturnValues = (countDown: number): CountdownReturn => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)
  const times = [
    {
      label: 'Days',
      value: days,
      isZero: days === 0
    },
    {
      label: 'Hrs',
      value: hours,
      isZero: days + hours === 0
    },
    {
      label: 'Mins',
      value: minutes,
      isZero: days + hours + minutes === 0
    },
    {
      label: 'Secs',
      value: seconds,
      isZero: true
    }
  ]
  const isFinished = countDown <= 0

  return [times, isFinished]
}

export default useCountdown
