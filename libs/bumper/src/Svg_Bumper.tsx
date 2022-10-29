import { mergeProps, Show, type VoidProps } from 'solid-js'
import { type JSX } from 'solid-js/types'
import { camper__back__height__in, camper__back__width__in, receiver__height__in, receiver__width__in } from './_const'
//region
// 96.75
// 8 x 7.5
const bolt__diameter__in = .75
const receiver__bolt__dx__in = .75
const receiver__end__x__in = 2
// .75
// 2 *
const in__px = 96
const px__in = 1. / 96
const page__width__in = 8.5
const page__height__in = 11
const page__margin_x__in = .25
const page__margin_y__in = .25
const content__width__in = page__width__in - (2 * page__margin_x__in)
const page__width = page__width__in * in__px
const page__height = page__height__in * in__px
const doc__width = page__width
const doc__height = page__height * 2
const page__margin_x = page__margin_x__in * in__px
const page__margin_y = page__margin_y__in * in__px
const content__height__in = page__height__in - (2 * page__margin_y__in)
const content__width = page__width - 2 * page__margin_x
const content__height = page__height - 2 * page__margin_y
const content__x = page__margin_x
const content__y = page__margin_y
const back__width__in = camper__back__width__in
const back__scale = content__width__in / back__width__in
const back__in__px = in__px * back__scale
const back__px__in = 1. / back__in__px
const back__width = back__width__in * back__in__px
const back__camper__width = camper__back__width__in * back__in__px
const back__camper__x = 0
const back__screw__y = 1.5 * back__in__px
const back__camper__height__in = camper__back__height__in
const back__camper__height = back__camper__height__in * back__in__px
const back__receiver__width = receiver__width__in * back__in__px
const receiver__under__body__y__in = 1
const back__receiver__under__body__y = receiver__under__body__y__in * back__in__px
const back__receiver__height = receiver__height__in * back__in__px
const back__receivers__mid_distance__width__in = 66
const back__receivers__mid_distance__width = back__receivers__mid_distance__width__in * back__in__px
const back__receivers__y = back__camper__height
const back__receivers__width = back__receivers__mid_distance__width + back__receiver__width
const back__receivers__height = back__receiver__height
const back__receivers__offset__x = (back__camper__width - back__receivers__width) / 2
const back__receiver__y1 = back__receiver__under__body__y
const back__receiver__y2 = back__receiver__y1 + back__receiver__height
const back__receiver__x_axis__width = back__receivers__mid_distance__width
const back__receiver__x_axis__x1 = (back__camper__width - back__receivers__mid_distance__width) / 2
const back__receiver__x_axis__x2 = back__receiver__x_axis__x1 + back__receiver__x_axis__width
const back__receiver__x_axis__y = back__receiver__y2 + 24
const back__receiver__x_axis__text__y = 12
const back__receiver__x_axis__line__stroke_width = 1
const back__receiver__x_axis__text__height = 24
const fender__bumper__height__in = 2 * receiver__height__in
const back__receiver__x_axis__height =
	back__receiver__x_axis__line__stroke_width + back__receiver__x_axis__text__height
const back__receivers__svg__height = back__receiver__x_axis__y + back__receiver__x_axis__height
const back__fender__width = back__camper__width
const back__fender__bumper__height = fender__bumper__height__in * back__in__px
const back__fender__height__in =
	back__camper__height__in
	+ receiver__under__body__y__in
	+ fender__bumper__height__in
const back__fender__height = back__fender__height__in * back__in__px
const back__receiver__axis__height = 24
const back__receiver__axis__height__in = back__receiver__axis__height * back__px__in
const back__receiver__axis__y__in = back__fender__height__in
const back__receiver__axis__y = back__fender__height
const back__receiver__axis__width__in = back__receivers__mid_distance__width__in + receiver__width__in
const back__receiver__axis__width = back__receiver__axis__width__in * back__in__px
const back__receiver__axis__x = (back__camper__width - back__receiver__axis__width) / 2
const back__receivers__axis__height = 24
const back__receivers__axis__height__in = back__receivers__axis__height * px__in
const back__receivers__axis__y__in = back__receiver__axis__y__in + back__receiver__axis__height__in
const back__receivers__axis__y = back__receivers__axis__y__in * back__in__px
const back__receivers__axis__width__in = back__receivers__mid_distance__width__in
const back__receivers__axis__width = back__receivers__axis__width__in * back__in__px
const back__receivers__axis__x = (back__camper__width - back__receivers__axis__width) / 2
const back__fender__axis__height = 24
const back__fender__axis__height__in = back__fender__axis__height * px__in
const back__fender__axis__x = 0
const back__fender__axis__y__in = back__receivers__axis__y__in + back__receivers__axis__height__in
const back__fender__axis__y = back__receivers__axis__y + back__receivers__axis__height
const back__fender__axis__width__in = camper__back__width__in
const back__fender__axis__width = back__fender__axis__width__in * back__in__px
const back__svg__height__in = back__fender__axis__y__in + back__fender__axis__height__in
const back__svg__height = back__fender__axis__y + back__fender__axis__height
const side__camper__width__in = 8
const side__camper__height__in = 7.5
const side__fender__height__in =
	side__camper__height__in
	+ receiver__under__body__y__in
	+ fender__bumper__height__in
const side__svg__y = back__svg__height + 50
const side__fender__width__in = side__camper__width__in + 6
const side__frame__width__in = side__camper__width__in - 2
const side__in__px = in__px / (1.1 * side__fender__width__in / content__width__in)
const axis__across = 100
const side__receiver__under__body__y = receiver__under__body__y__in * side__in__px
const side__fender__height = side__fender__height__in * side__in__px
const side__fender__width = side__fender__width__in * side__in__px
const side__height = side__fender__height + axis__across
const side__width = side__fender__width + axis__across
const side__y_axis__x = side__fender__width
const axis__line__position = 10
const side__camper__width = side__camper__width__in * side__in__px
const side__camper__height = side__camper__height__in * side__in__px
const side__y_axis__height = side__fender__height
const side__frame__top__y = side__camper__height + receiver__under__body__y__in * side__in__px
const side__frame__width = side__frame__width__in * side__in__px
const side__frame__height = receiver__height__in * side__in__px
const side__frame__bottom__y = side__frame__top__y + side__frame__height
const side__bumper__x__in = 0
const side__bumper__x = side__bumper__x__in * side__in__px
const side__bumper__y = side__frame__top__y
const side__receiver__height = receiver__height__in * side__in__px
const side__frame__hole__r__in = bolt__diameter__in / 2
const side__frame__hole__r = side__frame__hole__r__in * side__in__px
const receiver__bolt__dx = receiver__bolt__dx__in * side__in__px
const side__frame__hole__cx = side__frame__width - receiver__bolt__dx - side__frame__hole__r
const side__frame__hole__cy = side__receiver__height / 2
const side__frame__hole__placement__axis__x = side__frame__hole__cx + side__frame__hole__r
const side__frame__hole__placement__axis__y = side__frame__hole__cy - 2 * side__frame__hole__r
const side__frame__hole__placement__axis__width__in = receiver__bolt__dx__in
const side__frame__hole__placement__axis__width = side__frame__hole__placement__axis__width__in * side__in__px
const side__frame__hole__placement__axis__height = side__frame__hole__r * 4
const side__frame__hole__axis__x = side__frame__hole__cx - side__frame__hole__r
const side__frame__hole__axis__y = side__frame__hole__cy + side__frame__hole__r
const side__frame__hole__axis__width = side__frame__hole__r * 2
const side__frame__hole__axis__height = side__frame__hole__r * 2
const side__bumper__cross__width__in = receiver__width__in
const side__bumper__cross__width = side__bumper__cross__width__in * side__in__px
const side__bumper__cross__x__in = side__fender__width__in - side__bumper__cross__width__in
const side__bumper__cross__x = side__bumper__cross__x__in * side__in__px
const side__bumper__connect__width__in = side__bumper__cross__x__in - side__bumper__x__in
const side__bumper__connect__width = side__bumper__connect__width__in * side__in__px
const side__bumper__width__in = side__bumper__connect__width__in + side__bumper__cross__width__in
const side__bumper__width = side__bumper__width__in * side__in__px
const side__bumper__height = side__receiver__height
const side__x_axis__y = side__fender__height
const side__x_axis__width = side__fender__width
//endregion
export function Svg_Bumper() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" class="doc" width={doc__width} height={doc__height}>
			<C__page_1/>
			<C__page_2 y={page__height}/>
		</svg>
	)
}
export function C__page_1() {
	return (
		<svg class="C__page_1" width={page__width} height={page__height}>
			<Pattern_sheet/>
			<svg
				class="page_1__content"
				x={content__x}
				y={content__y}
				width={content__width}
				height={content__height}
			>
				<C__back/>
			</svg>
		</svg>
	)
	function C__back() {
		return (
			<svg class="C__back" height={back__svg__height} width={back__width}>
				<C__back__camper/>
				<C__back__receivers/>
				<C__back__bumper/>
				<C__back__fender/>
				<C__back__receiver__axis/>
				<C__back__receivers__axis/>
				<C__back__fender__axis/>
			</svg>
		)
		function C__back__camper() {
			return (
				<svg class="C__back__camper" x={back__camper__x} width={back__camper__width} height={back__camper__height}>
					<rect
						width={back__camper__width}
						height={back__camper__height}
						fill="lightgray"
					>
						<title>camper back</title>
					</rect>
					<line
						class="screw__row"
						x1="0"
						y1={back__screw__y}
						x2={back__camper__width}
						y2={back__screw__y}
						stroke="black"
						stroke-dasharray="3 1"
					>
						<title>screw row</title>
					</line>
				</svg>
			)
		}
		function C__back__receivers() {
			return (
				<svg
					class="C__back__receivers"
					x={back__camper__x}
					y={back__receivers__y}
					width={back__camper__width}
					height={back__receivers__svg__height}
				>
					<svg
						x={back__receivers__offset__x}
						y={back__receiver__y1}
						width={back__receivers__width}
						height={back__receivers__height}
					>
						<rect
							class="back__driver__receiver"
							width={back__receiver__width}
							height={back__receiver__height}
							fill="gray"
						>
							<title>driver receiver</title>
						</rect>
						<rect
							class="back__passenger__receiver"
							x={back__receivers__mid_distance__width}
							width={back__receiver__width}
							height={back__receiver__height}
							fill="gray"
						>
							<title>passenger receiver</title>
						</rect>
					</svg>
					<svg
						class="back__receiver__x_axis"
						y={back__receiver__x_axis__y}
						width={back__receiver__x_axis__width}
						height={back__receiver__x_axis__height}
					>
						<line
							x1={back__receiver__x_axis__x1}
							y1={back__receiver__x_axis__y}
							x2={back__receiver__x_axis__x2}
							y2={back__receiver__x_axis__y}
						>
							<title>back receiver dimensions</title>
						</line>
					</svg>
				</svg>
			)
		}
		function C__back__bumper() {
			return (
				<svg
					class="C__back__bumper"
					x={back__camper__x}
					y={back__camper__height}
					width={back__camper__width}
					height={back__receivers__svg__height}
				>
					<rect
						width={back__camper__width}
						height={back__receiver__height}
						y={back__receiver__y1}
						stroke="black"
						fill="gray"
						fill-opacity="0.8"
					></rect>
				</svg>
			)
		}
		function C__back__fender() {
			return (
				<svg
					class="C__back__fender"
					x={back__camper__x}
					width={back__fender__width}
					height={back__fender__height}
				>
					<rect fill="url(#sheet__pattern)" width="100%" height="100%">
						<title>bumper sheet</title>
					</rect>
				</svg>
			)
		}
		function C__back__receiver__axis() {
			return (
				<svg
					class="C__back__receiver__axis"
					x={back__receiver__axis__x - 1}
					y={back__receiver__axis__y}
					width={back__receiver__axis__width + 2}
					height={back__receiver__axis__height}
					viewBox={`-1 0 ${back__receiver__axis__width + 1} ${back__receiver__axis__height}`}
				>
					<C__x_axis__line
						class="C__back__receiver__axis__line"
						y={axis__line__position}
						x1={0}
						x2={back__receiver__axis__width - 1}
						title="back receiver x axis"
					/>
					<C__x_axis__tick
						class="C__back__receiver__axis__tick_0"
						x={0}
					/>
					<C__x_axis__tick
						class="C__back__receiver__axis__tick_1"
						x={back__receiver__width - 1}
						text_x={0}
						text_y={back__receiver__axis__height}
						text={`${receiver__width__in}in`}
						text_anchor="start"
					/>
					<C__x_axis__tick
						class="C__back__receiver__axis__tick_2"
						x={back__receiver__axis__width - back__receiver__width}
					/>
					<C__x_axis__tick
						class="C__back__receiver__axis__tick_3"
						x={back__receiver__axis__width - 1}
						text_x={back__receiver__axis__width}
						text_y={back__receiver__axis__height}
						text={`${receiver__width__in}in`}
						text_anchor="end"
					/>
				</svg>
			)
		}
		function C__back__receivers__axis() {
			return (
				<svg
					class="C__back__receivers__axis"
					x={back__receivers__axis__x - 1}
					y={back__receivers__axis__y}
					width={back__receivers__axis__width + 2}
					height={back__receivers__axis__height}
					viewBox={`-1 0 ${back__receivers__axis__width + 1} ${back__receivers__axis__height}`}
				>
					<C__x_axis__line
						class="C__back__receivers__axis__line"
						y={axis__line__position}
						x1={0}
						x2={back__receivers__axis__width - 1}
						title="back receivers x axis"
					/>
					<C__x_axis__tick
						class="C__back__receivers__axis__tick_0"
						x={0}
					/>
					<C__x_axis__tick
						class="C__back__receivers__axis__tick_1"
						x={back__receivers__axis__width - 1}
						text_x={back__receivers__axis__width / 2}
						text_y={back__receivers__axis__height}
						text={`${back__receivers__axis__width__in}in`}
						text_anchor="middle"
					/>
				</svg>
			)
		}
		function C__back__fender__axis() {
			return (
				<svg
					class="C__back__fender__axis"
					x={back__fender__axis__x}
					y={back__fender__axis__y}
					width={back__fender__axis__width}
					height={back__fender__axis__height}
				>
					<C__x_axis__line
						class="C__back__fender__axis__line"
						y={axis__line__position}
						x1={0}
						x2={back__fender__axis__width}
						title="back fender x axis"
					/>
					<C__x_axis__tick
						class="C__back__fender__axis__tick_0"
						x={0}
					/>
					<C__x_axis__tick
						class="C__back__fender__axis__tick_1"
						x={back__fender__axis__width}
						text_x={back__fender__axis__width / 2}
						text_y={back__fender__axis__height}
						text={`${back__fender__axis__width__in}in`}
						text_anchor="middle"
					/>
				</svg>
			)
		}
	}
}
export function C__page_2($p:VoidProps<{
	y?:number
}>) {
	return (
		<svg class="C__page_2" y={$p.y} width={page__width} height={page__height}>
			<Pattern_sheet/>
			<svg
				class="page_2__content"
				x={content__x}
				y={content__y}
				width={content__width}
				height={content__height}
			>
				<C__driver/>
			</svg>
		</svg>
	)
	function C__driver() {
		return (
			<svg class="C__driver" width={side__width} height={side__height}>
				<C__driver__camper/>
				<C__driver__frame/>
				<C__driver__bumper/>
				<C__driver__fender/>
				<C__driver__y_axis/>
				<C__driver__x_axis/>
				<C__driver__frame__axis/>
			</svg>
		)
		function C__driver__camper() {
			return (
				<svg class="C__driver__camper" width={side__camper__width} height={side__camper__height}>
					<rect width={side__camper__width} height={side__camper__height} fill="lightgray">
						<title>driver camper</title>
					</rect>
				</svg>
			)
		}
		function C__driver__frame() {
			return (
				<svg
					class="C__driver__frame"
					y={side__frame__top__y}
					width={side__frame__width}
					height={side__frame__height}
				>
					<rect width={side__frame__width} height={side__frame__height} fill="gray" fill-opacity="0.8">
						<title>driver frame</title>
					</rect>
					<circle
						class="side__frame__hole"
						cx={side__frame__hole__cx}
						cy={side__frame__hole__cy}
						r={side__frame__hole__r}
						fill="black"
					>
						<title>bolt hole</title>
					</circle>
				</svg>
			)
		}
		function C__driver__bumper() {
			return (
				<svg
					class="C__driver__bumper"
					x={side__bumper__x}
					y={side__bumper__y}
					width={side__bumper__width}
					height={side__bumper__height}
				>
					<rect
						x={side__bumper__x}
						width={side__bumper__connect__width}
						height={side__bumper__height}
						stroke="black"
						fill="gray"
						fill-opacity="0.8"
					>
						<title>driver bumper connect piece</title>
					</rect>
					<rect
						x={side__bumper__cross__x}
						width={side__bumper__cross__width}
						height={side__bumper__height}
						stroke="black"
						fill="gray"
						fill-opacity="0.8"
					>
						<title>driver bumper cross piece</title>
					</rect>
				</svg>
			)
		}
		function C__driver__fender() {
			return (
				<svg class="C__driver__fender" width={side__fender__width} height={side__fender__height}>
					<path
						d={[
							`M ${side__camper__width} 0`,
							`V ${side__frame__top__y}`,
							`H ${side__fender__width}`,
							`V ${side__fender__height}`,
							`H ${0}`,
							`V ${side__camper__height}`,
							// `H 0`,
							`C ${[
								`${side__camper__width * 0} ${side__camper__height * .75}`,
								`${side__camper__width * .5} ${side__camper__height * 1}`,
								`${side__camper__width * .75} ${side__camper__height * .75}`
							].join(', ')}`,
							`C ${[
								`${side__camper__width * .75} ${side__camper__height * .75}`,
								`${side__camper__width * .9} ${side__camper__height * .5}`,
								`${side__camper__width * .9} ${side__camper__height * .1}`
							].join(', ')}`,
							`C ${[
								`${side__camper__width * .9} ${side__camper__height * .1}`,
								`${side__camper__width * .9} ${side__camper__height * 0}`,
								`${side__camper__width * 1} ${side__camper__height * 0}`
							].join(', ')}`,
						].join(' ')}
						fill="url(#sheet__pattern)"
					></path>
				</svg>
			)
		}
		function C__driver__y_axis() {
			return (
				<svg
					class="C__driver__y_axis"
					x={side__y_axis__x}
					y={0}
					width={axis__across}
					height={side__y_axis__height}
				>
					<C__y_axis__line
						class="driver__camper__y_axis"
						x={axis__line__position}
						y1={0}
						y2={side__y_axis__height}
						title="driver camper y-axis"
					/>
					<C__driver__y_axis__tick
						class="driver__y_axis__top__tick"
						y={0}
						text_y={side__camper__height / 2}
						text={`${side__camper__height__in}in`}
					/>
					<C__driver__y_axis__tick
						class="driver__y_axis__camper__tick"
						y={side__camper__height}
						text_y={side__camper__height + side__receiver__under__body__y / 2}
						text={`${receiver__under__body__y__in}in`}
					/>
					<C__driver__y_axis__tick
						class="driver__y_axis__frame__top__tick"
						y={side__frame__top__y}
						text_y={side__frame__top__y + side__frame__height / 2}
						text={`${receiver__height__in}in`}
					/>
					<C__driver__y_axis__tick
						class="driver__y_axis__frame__bottom__tick"
						y={side__frame__bottom__y}
					/>
					<C__driver__y_axis__tick
						class="driver__y_axis__bottom__tick"
						y={side__fender__height}
						text_y={side__frame__bottom__y + side__frame__height / 2}
						text={`${receiver__height__in}in`}
					/>
				</svg>
			)
			function C__driver__y_axis__tick($p:VoidProps<{ class:string, y:number, text_y?:number, text?:string }>) {
				return (
					<C__tick
						class={$p.class}
						x1={2}
						y1={$p.y}
						x2={axis__line__position * 2 - 4}
						y2={$p.y}
						text_x={axis__line__position + 10}
						text_y={$p.text_y}
						text={$p.text}
					/>
				)
			}
		}
		function C__driver__x_axis() {
			return (
				<svg
					class="C__driver__x_axis"
					x={0}
					y={side__x_axis__y}
					width={side__y_axis__height}
					height={axis__across}
				>
					<C__x_axis__line
						class="C__driver__x_axis__line"
						x1={0}
						x2={side__x_axis__width}
						y={axis__line__position}
						title="driver camper y-axis"
					/>
					<C__driver__x_axis__tick
						class="C__driver__x_axis__frame__tick"
						x={side__frame__width}
						text_x={side__frame__width / 2}
						text={`${side__frame__width__in}in`}
					/>
					<C__driver__x_axis__tick
						class="C__driver__x_axis__bumper__connect__exit__left__tick"
						x={side__camper__width}
						text_x={side__frame__width + (side__camper__width - side__frame__width) / 2}
						text={`${side__camper__width__in - side__frame__width__in}in`}
					/>
					<C__driver__x_axis__tick
						class="C__driver__x_axis__bumper__cross__left__tick"
						x={side__bumper__cross__x}
						text_x={side__camper__width + (side__bumper__cross__x - side__camper__width) / 2}
						text={`${side__bumper__cross__x__in - side__camper__width__in}in`}
					/>
					<C__driver__x_axis__tick
						class="driver__x_axis__bumper__cross__right__tick"
						x={side__fender__width}
						text_x={side__bumper__cross__x + (side__fender__width - side__bumper__cross__x) / 2}
						text={`${side__fender__width__in - side__bumper__cross__x__in}in`}
					/>
				</svg>
			)
			function C__driver__x_axis__tick($p:VoidProps<{ class:string, x:number, text_x:number, text?:string }>) {
				return (
					<C__tick
						class={$p.class}
						x1={$p.x}
						y1={2}
						x2={$p.x}
						y2={axis__line__position * 2 - 4}
						text_x={$p.text_x}
						text_y={axis__line__position + 20}
						text={$p.text}
						text_anchor={'middle'}
					/>
				)
			}
		}
		function C__driver__frame__axis() {
			return (
				<svg
					class="C__side__frame__axis"
					y={side__frame__top__y}
					width={side__frame__width}
					height={side__frame__height}
				>
					<C__side__frame__hole__placement__axis/>
					<C__side__frame__hole__axis/>
				</svg>
			)
			function C__side__frame__hole__placement__axis() {
				return (
					<svg
						class="C__side__frame__hole__placement__axis"
						x={side__frame__hole__placement__axis__x}
						y={side__frame__hole__placement__axis__y}
						width={side__frame__hole__placement__axis__width}
						height={side__frame__hole__placement__axis__height}
					>
						<C__x_axis__line
							class="C__side__frame__hole__placement__axis__line"
							x1={0}
							x2={side__frame__hole__placement__axis__width}
							y={axis__line__position}
						/>
						<C__side__frame__axis__tick
							class="C__side__frame__hole__placement__axis__tick_0"
							x={0}
							y1={axis__line__position}
							y2={axis__line__position + axis__line__position - 2}
						/>
						<C__side__frame__axis__tick
							class="C__side__frame__hole__placement__axis__tick_1"
							x={side__frame__hole__placement__axis__width}
							y1={axis__line__position}
							y2={axis__line__position + axis__line__position - 2}
							text_x={side__frame__hole__placement__axis__width / 2}
							text_y={axis__line__position - 10}
							text={`${side__frame__hole__placement__axis__width__in}in`}
							dominant_baseline="hanging"
						/>
					</svg>
				)
			}
			function C__side__frame__hole__axis() {
				return (
					<svg
						class="C__side__frame__hole__axis"
						x={side__frame__hole__axis__x}
						y={side__frame__hole__axis__y}
						width={side__frame__hole__axis__width}
						height={side__frame__hole__axis__height}
					>
						<C__x_axis__line
							class="C__side__frame__hole__axis__line"
							x1={0}
							x2={side__frame__hole__axis__width}
							y={axis__line__position}
						/>
						<C__side__frame__axis__tick
							class="C__side__frame__hole__axis__tick_0"
							x={0}
						/>
						<C__side__frame__axis__tick
							class="C__side__frame__hole__axis__tick_1"
							x={side__frame__hole__r * 2}
							text_x={side__frame__hole__r}
							text_y={axis__line__position + 10}
							text={`${side__frame__hole__r__in * 2}in`}
						/>
					</svg>
				)
			}
			function C__side__frame__axis__tick(_$p:VoidProps<{
				class:string
				x:number
				y1?:number
				y2?:number
				text_x?:number
				text_y?:number
				text?:string
				dominant_baseline?:JSX.PresentationSVGAttributes['dominant-baseline']
			}>) {
				const $p = mergeProps({
					y1: 2,
					y2: axis__line__position,
				}, _$p)
				return (
					<C__x_axis__tick
						class={$p.class}
						x={$p.x}
						y1={$p.y1}
						y2={$p.y2}
						text_x={$p.text_x}
						text_y={$p.text_y}
						text={$p.text}
						font_size="10"
						text_anchor="middle"
						dominant_baseline={$p.dominant_baseline}
					/>
				)
			}
		}
	}
}
function C__x_axis__line(_$p:VoidProps<{
	class:string
	x1:number
	x2:number
	y?:number
	title?:string
}>) {
	const $p = mergeProps({ y: axis__line__position }, _$p)
	return (
		<C__axis__line
			class={$p.class}
			x1={$p.x1}
			y1={$p.y}
			x2={$p.x2}
			y2={$p.y}
			title={$p.title}
		/>
	)
}
function C__y_axis__line(_$p:VoidProps<{
	class:string
	x?:number
	y1:number
	y2:number
	title?:string
}>) {
	const $p = mergeProps({ x: axis__line__position }, _$p)
	return (
		<C__axis__line
			class={$p.class}
			x1={$p.x}
			y1={$p.y1}
			x2={$p.x}
			y2={$p.y2}
			title={$p.title}
		/>
	)
}
function C__axis__line($p:VoidProps<{
	class:string
	x1:number
	x2:number
	y1:number
	y2:number
	title?:string
}>) {
	return (
		<line
			class={$p.class}
			x1={$p.x1}
			y1={$p.y1}
			x2={$p.x2}
			y2={$p.y2}
			stroke="black"
			stroke-dasharray="1"
		>
			<Show when={$p.title}>
				<title>{$p.title}</title>
			</Show>
		</line>
	)
}
function C__x_axis__tick(_$p:VoidProps<{
	class:string
	x:number
	y1?:number
	y2?:number
	text_x?:number
	text_y?:number
	text?:string
	dominant_baseline?:JSX.PresentationSVGAttributes['dominant-baseline']
	text_anchor?:JSX.PresentationSVGAttributes['text-anchor']
	font_size?:string
}>) {
	const $p = mergeProps({
		y1: 2,
		y2: axis__line__position,
		text_x: axis__line__position + 10
	}, _$p)
	return (
		<C__tick
			class={$p.class}
			x1={$p.x}
			y1={$p.y1}
			x2={$p.x}
			y2={$p.y2}
			text_x={$p.text_x}
			text_y={$p.text_y}
			text={$p.text}
			dominant_baseline={$p.dominant_baseline}
			text_anchor={$p.text_anchor}
			font_size={$p.font_size}
		/>
	)
}
function C__y_axis__tick(_$p:VoidProps<{
	class:string
	x1?:number
	x2?:number
	y:number
	text_x?:number
	text_y?:number
	text?:string
	dominant_baseline?:JSX.PresentationSVGAttributes['dominant-baseline']
	text_anchor?:JSX.PresentationSVGAttributes['text-anchor']
	font_size?:string
}>) {
	const $p = mergeProps({
		x1: 2,
		x2: axis__line__position,
		text_y: axis__line__position + 10,
	}, _$p)
	return (
		<C__tick
			class={$p.class}
			x1={$p.x1}
			y1={$p.y}
			x2={$p.x2}
			y2={$p.y}
			text_x={$p.text_x}
			text_y={$p.text_y}
			text={$p.text}
			dominant_baseline={$p.dominant_baseline}
			text_anchor={$p.text_anchor}
			font_size={$p.font_size}
		/>
	)
}
function C__tick(_$p:VoidProps<{
	class:string
	x1:number
	y1:number
	x2:number
	y2:number
	text_x?:number
	text_y?:number
	text?:string
	dominant_baseline?:JSX.PresentationSVGAttributes['dominant-baseline']
	text_anchor?:JSX.PresentationSVGAttributes['text-anchor']
	font_size?:string
}>) {
	const $p = mergeProps({
		dominant_baseline: 'middle' as JSX.PresentationSVGAttributes['dominant-baseline'],
		font_size: 16,
	}, _$p)
	return [
		<line
			class={$p.class}
			x1={$p.x1}
			y1={$p.y1}
			x2={$p.x2}
			y2={$p.y2}
			stroke="black"
			stroke-dasharray="1"
		>{$p.text}</line>,
		<Show when={$p.text}>
			<text
				x={$p.text_x}
				y={$p.text_y}
				font-size={$p.font_size}
				dominant-baseline={$p.dominant_baseline}
				text-anchor={$p.text_anchor}
			>{$p.text}</text>
		</Show>,
	]
}
function Pattern_sheet() {
	return (
		<defs>
			<pattern
				id="sheet__pattern"
				x="7"
				y="7"
				width="10"
				height="10"
				patternUnits="userSpaceOnUse"
				patternTransform="rotate(45)"
			>
				<rect x="5" y="5" width="5" height="5" fill="gray"/>
			</pattern>
		</defs>
	)
}
