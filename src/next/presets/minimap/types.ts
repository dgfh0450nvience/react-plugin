import { BaseSchemes } from 'rete'
import { RenderData } from 'rete-area-plugin'

export type Rect = {
  width: number
  height: number
  left: number,
  top: number
}
export type Transform = {
  x: number
  y: number
  k: number
}
export type Translate = (dx: number, dy: number, initial: any) => void
export type MinimapData = {
  type: 'minimap'
  element: HTMLElement
  ratio: number
  nodes: Rect[]
  viewport: Rect
  start(): Transform
  translate: Translate
}

export type MinimapRender<Schemes extends BaseSchemes> =
  | { type: 'render', data: RenderData<Schemes> | MinimapData }
  | { type: 'rendered', data: RenderData<Schemes> | MinimapData }