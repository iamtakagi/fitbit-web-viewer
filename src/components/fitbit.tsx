import * as React from 'react'
import { Activity } from '../types'

const Fitbit: React.FC<{name: string, activity: Activity}> = ({name, activity}) => {
  return (
   <>
    <p>{name} - 人体</p>
    <p>❤ 心拍数: {activity.heartrate}</p>
    <p>🔥 消費済みカロリー: {activity.calories}</p>
    <p>👟 歩いた距離: {activity.miles}</p>
    <p>📐 歩いた階数: {activity.floors}</p>
    <p>💤 睡眠時間: {activity.sleep}</p>
   </>
  )
}

export default Fitbit