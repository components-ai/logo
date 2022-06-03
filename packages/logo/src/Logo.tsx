import { Delaunay } from 'd3-delaunay'
import { useId } from 'react'
import seedrandom from 'seedrandom'

const toPx = (val: number | string) => {
  if (typeof val === 'number') {
    return val + 'px'
  }

  return val
}

type LengthUnit = number | string
type LogoProps = {
  height?: LengthUnit
  width?: LengthUnit
  viewBoxHeight?: LengthUnit
  viewBoxWidth?: LengthUnit
  color?: string
  strokeWidth?: LengthUnit
  pointStrokeWidth?: LengthUnit
  borderWidth?: LengthUnit
  seed?: string
}
export const Logo = ({
  height = 24,
  width = 24,
  color = 'currentcolor',
  viewBoxHeight = 32,
  viewBoxWidth = 32,
  strokeWidth = 1,
  pointStrokeWidth = 0,
  borderWidth = 4,
  seed,
  ...props
}: LogoProps) => {
  const id = useId()
  const random = seedrandom(seed || id)
  const randomInt = (min: number, max: number) =>
    Math.floor(random() * (max - min + 1) + min)

  const pointsCount = randomInt(1, 2)
  const coordinates = [
    [0, 0],
    [32, 32],
    [0, 32],
    [32, 0],
  ]

  for (let i = 0; i < pointsCount; ++i) {
    let randomPoint = [
      randomInt(
        randomInt(0, parseInt(viewBoxWidth.toString())),
        parseInt(viewBoxWidth.toString()) * random()
      ),
      randomInt(
        randomInt(0, parseInt(viewBoxHeight.toString())),
        parseInt(viewBoxHeight.toString()) * random()
      ),
    ]

    coordinates.push(randomPoint)
  }

  // @ts-ignore
  const delaunay = Delaunay.from(coordinates)

  return (
    <span
      sx={{
        width,
        height,
        color,
      }}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={
          0 +
          ' ' +
          0 +
          ' ' +
          parseInt(viewBoxWidth.toString()) +
          ' ' +
          parseInt(viewBoxHeight.toString())
        }
        sx={{
          fill: 'currentColor',
          display: 'block',
          height,
          width,
          color: 'currentColor',
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      >
        <path
          stroke="currentColor"
          strokeWidth={toPx(strokeWidth)}
          fill="transparent"
          d={delaunay.render()}
        />
        <path
          stroke="currentColor"
          strokeWidth={toPx(borderWidth)}
          fill="transparent"
          d={delaunay.renderHull()}
        />
        <path
          stroke="currentColor"
          strokeWidth={toPx(pointStrokeWidth)}
          fill="transparent"
          d={delaunay.renderPoints()}
        />
      </svg>
    </span>
  )
}
