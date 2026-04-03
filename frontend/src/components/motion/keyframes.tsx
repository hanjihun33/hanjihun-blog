import type { CSSProperties } from 'react';

interface KeyframesProps {
  name: string;
  delay: string;
  [key: string]: CSSProperties | string;
}

export function Keyframes(props: KeyframesProps) {
  const toCss = (cssObject: CSSProperties | string) =>
    typeof cssObject === 'string'
      ? cssObject
      : Object.keys(cssObject).reduce((accumulator, key) => {
          const cssKey = key.replace(/[A-Z]/g, (value) => `-${value.toLowerCase()}`);
          const cssValue = String((cssObject as Record<string, unknown>)[key]).replace("'", '');
          return `${accumulator}${cssKey}:${cssValue};`;
        }, '');

  return (
    <style>
      {`
        .${props.name} {
          animation: ${props.name} ${props.delay} 0s infinite cubic-bezier(.65,.05,.36,1) alternate;
        }

        .${props.name}:hover {
          animation-play-state: paused;
        }

        @keyframes ${props.name} {
          ${Object.keys(props)
            .map((key) => {
              if (['from', 'to'].includes(key)) {
                return `${key} { ${toCss(props[key])} }`;
              }

              if (/^_[0-9]+$/.test(key)) {
                return `${key.replace('_', '')}% { ${toCss(props[key])} }`;
              }

              return '';
            })
            .join(' ')}
        }
      `}
    </style>
  );
}
