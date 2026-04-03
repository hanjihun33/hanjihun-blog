import { Fragment } from 'react';
import styles from '../../../styles/components/motion/circle-animation.module.css';
import { Tooltip } from '../../tailwind/client-components';
import { Keyframes } from '../keyframes';

export default function CircleAnimation() {
  return (
    <div className={styles.animationWrapper}>
      {Array.from({ length: 10 }).map((_, index) => {
        const size = getRandomInt(20, 200);

        return (
          <Fragment key={index}>
            <Keyframes
              _0={{ transform: 'translateY(0)' }}
              _70={{ opacity: 0.2 }}
              _100={{ opacity: 0.3, transform: `translateY(-${getRandomInt(50, 500)}px)` }}
              delay={`${getRandomInt(100, 200) / 100}s`}
              name={`svg-animation-${index}`}
            />
            <Tooltip content="circle">
              <Circle
                className={`svg-animation-${index}`}
                fill={getRandomColor()}
                height={size}
                width={size}
              />
            </Tooltip>
          </Fragment>
        );
      })}
    </div>
  );
}

function Circle({
  width,
  height,
  fill,
  className,
}: {
  width: number;
  height: number;
  fill: string;
  className: string;
}) {
  return (
    <svg className={className} height={height} width={width}>
      <circle cx={width / 2} cy={width / 2} fill={fill} r={width / 2} />
    </svg>
  );
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const hexArray = ['#ccc4e1', '#d3d4e4', '#bed7db', '#a0c7d8', '#e4e8e7', '#e8ddea', '#efd6d2', '#f3dfe2', '#f3f1ce'];
  return hexArray[Math.floor(Math.random() * hexArray.length)];
}
