export interface IndicatorProps {
  currentIndex: number;
  size: number;
}

export interface DotProps extends IndicatorProps {
  index: number;
}

export interface IDotStyle {
  size: number;
  opacity: number;
}

export type GetDotStylePayload = DotProps;
