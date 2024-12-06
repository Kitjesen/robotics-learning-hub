"use client"

import { ResponsiveRadar } from '@nivo/radar'

const data = [
  {
    skill: "ROS",
    value: 4,
  },
  {
    skill: "计算机视觉",
    value: 3,
  },
  {
    skill: "机器学习",
    value: 2,
  },
  {
    skill: "控制系统",
    value: 3,
  },
  {
    skill: "SLAM",
    value: 2,
  },
  {
    skill: "机械设计",
    value: 4,
  },
]

export function SkillsRadar() {
  return (
    <div style={{ height: '400px' }}>
      <ResponsiveRadar
        data={data}
        keys={['value']}
        indexBy="skill"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
          {
            anchor: 'top-left',
            direction: 'column',
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: '#999',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
      />
    </div>
  )
}

