import { mergeProps, Show, type VoidProps } from 'solid-js'
import { type JSX } from 'solid-js/types'
import {
	axis__across__in,
	axis__line__position__in,
	back__camper__height__in,
	back__camper__x__in,
	back__fender__axis__height__in,
	back__fender__axis__width__in,
	back__fender__axis__x__in,
	back__fender__axis__y__in,
	back__height__in,
	back__px__in,
	back__receiver__y1__in,
	back__receivers__axis__height__in,
	back__receivers__axis__width__in,
	back__receivers__axis__x__in,
	back__receivers__axis__y__in,
	back__receivers__height__in,
	back__receivers__offset__x__in,
	back__receivers__y__in,
	back__scale,
	back__screw__y__in,
	back__width__in,
	camper__back__width__in,
	content__height__in,
	content__width__in,
	content__x__in,
	content__y__in,
	doc__height__in,
	doc__width__in,
	fender__back__height__in,
	fender__back__width__in,
	in__px_,
	in_s_,
	page__height__in,
	page__width__in,
	px__in,
	receiver__height__in,
	receiver__under__body__y__in,
	receiver__width__in,
	receivers__back__height__in,
	receivers__back__mid_distance__width__in,
	receivers__back__width__in,
	side__bumper__connect__width__in,
	side__bumper__cross__width__in,
	side__bumper__cross__x__in,
	side__bumper__height__in,
	side__bumper__width__in,
	side__bumper__x__in,
	side__bumper__y__in,
	side__camper__height__in,
	camper__depth__in,
	side__fender__height__in,
	side__fender__width__in,
	side__frame__bottom__y__in,
	side__frame__height__in,
	side__frame__hole__axis__height__in,
	side__frame__hole__axis__width__in,
	side__frame__hole__axis__x__in,
	side__frame__hole__axis__y__in,
	side__frame__hole__cx__in,
	side__frame__hole__cy__in,
	side__frame__hole__placement__axis__height__in,
	side__frame__hole__placement__axis__width__in,
	side__frame__hole__placement__axis__x__in,
	side__frame__hole__placement__axis__y__in,
	side__frame__hole__r__in,
	side__frame__top__y__in,
	side__frame__width__in,
	side__height__in,
	side__px__in,
	side__receiver__under__body__y__in,
	side__scale,
	side__width__in,
	side__x_axis__width__in,
	side__x_axis__y__in,
	side__y_axis__height__in,
	side__y_axis__x__in
} from './_lib.js'
//region
// 96.75
// 8 x 7.5
// .75
// 2 *
// const back__width__in = back__fender__axis__y__in + back__fender__axis__height__in
//endregion
export function Svg_Bumper() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" class="doc" width={in_s_(doc__width__in)} height={in_s_(doc__height__in)}>
			<C__page_1/>
			<C__page_2 y={in_s_(page__height__in)}/>
		</svg>
	)
}
export function C__page_1() {
	return (
		<svg class="C__page_1" width={in_s_(page__width__in)} height={in_s_(page__height__in)}>
			<Pattern_sheet/>
			<svg
				class="page_1__content"
				x={in_s_(content__x__in)}
				y={in_s_(content__y__in)}
				width={in_s_(content__width__in)}
				height={in_s_(content__height__in)}
				viewBox={`0 0 ${in__px_(back__width__in)} ${in__px_(back__height__in)}`}
			>
				<C__back/>
			</svg>
		</svg>
	)
	function C__back() {
		return (
			<svg class="C__back" height={in_s_(back__height__in)} width={in_s_(back__width__in)}>
				<C__back__camper/>
				<C__back__receivers/>
				<C__back__bumper/>
				<C__back__fender/>
				<C__back__receivers__axis/>
				<C__back__fender__axis/>
			</svg>
		)
		function C__back__camper() {
			return (
				<svg
					class="C__back__camper"
					x={in_s_(back__camper__x__in)}
					width={in_s_(camper__back__width__in)}
					height={in_s_(back__camper__height__in)}
				>
					<rect
						width={in_s_(camper__back__width__in)}
						height={in_s_(back__camper__height__in)}
						fill="lightgray"
					>
						<title>camper back</title>
					</rect>
					<line
						class="screw__row"
						x1="0"
						y1={in_s_(back__screw__y__in)}
						x2={in_s_(camper__back__width__in)}
						y2={in_s_(back__screw__y__in)}
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
					x={in_s_(back__camper__x__in)}
					y={in_s_(back__receivers__y__in)}
					width={in_s_(camper__back__width__in)}
					height={in_s_(back__receivers__height__in)}
				>
					<svg
						x={in_s_(back__receivers__offset__x__in)}
						y={in_s_(back__receiver__y1__in)}
						width={in_s_(receivers__back__width__in)}
						height={in_s_(receivers__back__height__in)}
					>
						<rect
							class="back__driver__receiver"
							width={in_s_(receiver__width__in)}
							height={in_s_(receiver__height__in)}
							fill="gray"
						>
							<title>driver receiver</title>
						</rect>
						<rect
							class="back__passenger__receiver"
							x={in_s_(receivers__back__mid_distance__width__in)}
							width={in_s_(receiver__width__in)}
							height={in_s_(receiver__height__in)}
							fill="gray"
						>
							<title>passenger receiver</title>
						</rect>
					</svg>
				</svg>
			)
		}
		function C__back__bumper() {
			return (
				<svg
					class="C__back__bumper"
					x={in_s_(back__camper__x__in)}
					y={in_s_(back__camper__height__in)}
					width={in_s_(camper__back__width__in)}
					height={in_s_(back__receivers__height__in)}
				>
					<rect
						width={in_s_(camper__back__width__in)}
						height={in_s_(receiver__height__in)}
						y={in_s_(back__receiver__y1__in)}
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
					x={in_s_(back__camper__x__in)}
					width={in_s_(fender__back__width__in)}
					height={in_s_(fender__back__height__in)}
				>
					<rect
						fill="url(#sheet__pattern)"
						width={in_s_(fender__back__width__in)}
						height={in_s_(fender__back__height__in)}
					>
						<title>bumper sheet</title>
					</rect>
				</svg>
			)
		}
		function C__back__receivers__axis() {
			return (
				<svg
					class="C__back__receivers__axis"
					x={in_s_(back__receivers__axis__x__in)}
					y={in_s_(back__receivers__axis__y__in)}
					width={in_s_(back__receivers__axis__width__in)}
					height={in_s_(back__receivers__axis__height__in)}
				>
					<C__back__x_axis__line
						class="C__back__receivers__axis__line"
						y={in_s_(axis__line__position__in / back__scale)}
						x1={0}
						x2={in_s_(back__receivers__axis__width__in)}
						title="back receiver x axis"
					/>
					<C__back__receivers__axis__tick class="C__back__receivers__axis__tick_0" x={0}/>
					<C__back__receivers__axis__tick
						class="C__back__receivers__axis__tick_1"
						x={in_s_(receiver__width__in)}
						text_x={0}
						text={in_s_(receiver__width__in)}
						text_anchor="start"
					/>
					<C__back__receivers__axis__tick
						class="C__back__receivers__axis__tick_2"
						x={in_s_(back__receivers__axis__width__in - receiver__width__in)}
						text_x={in_s_(receiver__width__in + (back__receivers__axis__width__in - receiver__width__in) / 2)}
						text={in_s_(back__receivers__axis__width__in - 2 * receiver__width__in)}
						text_anchor="middle"
					/>
					<C__back__receivers__axis__tick
						class="C__back__receivers__axis__tick_3"
						x={in_s_(back__receivers__axis__width__in - back__px__in)}
						text_x={in_s_(back__receivers__axis__width__in)}
						text={in_s_(receiver__width__in)}
						text_anchor="end"
					/>
				</svg>
			)
			function C__back__receivers__axis__tick($p:VoidProps<{
				class:string
				x:number|string
				text_x?:number|string
				text?:string
				text_anchor?:JSX.PresentationSVGAttributes['text-anchor']
			}>) {
				return (
					<C__back__x_axis__tick
						class={$p.class}
						x={$p.x}
						text_x={$p.text_x}
						text_y={in_s_(back__receivers__axis__height__in)}
						text={$p.text}
						text_anchor={$p.text_anchor}
					/>
				)
			}
		}
		function C__back__fender__axis() {
			return (
				<svg
					class="C__back__fender__axis"
					x={in_s_(back__fender__axis__x__in)}
					y={in_s_(back__fender__axis__y__in)}
					width={in_s_(back__fender__axis__width__in)}
					height={in_s_(back__fender__axis__height__in)}
				>
					<C__back__x_axis__line
						class="C__back__fender__axis__line"
						y={in_s_(axis__line__position__in / back__scale)}
						x1={0}
						x2={in_s_(back__fender__axis__width__in)}
						title="back fender x axis"
					/>
					<C__back__x_axis__tick
						class="C__back__fender__axis__tick_0"
						x={0}
					/>
					<C__back__x_axis__tick
						class="C__back__fender__axis__tick_1"
						x={in_s_(back__fender__axis__width__in)}
						text_x={in_s_(back__fender__axis__width__in / 2)}
						text_y={in_s_(back__fender__axis__height__in)}
						text={in_s_(back__fender__axis__width__in)}
						text_anchor="middle"
					/>
				</svg>
			)
		}
	}
}
export function C__page_2($p:VoidProps<{
	y?:number|string
}>) {
	return (
		<svg class="C__page_2" y={$p.y} width={in_s_(page__width__in)} height={in_s_(page__height__in)}>
			<Pattern_sheet/>
			<svg
				class="page_2__content"
				x={in_s_(content__x__in)}
				y={in_s_(content__y__in)}
				width={in_s_(content__width__in)}
				height={in_s_(content__height__in)}
				viewBox={`0 0 ${in__px_(side__width__in)} ${in__px_(side__height__in)}`}
			>
				<C__driver/>
			</svg>
		</svg>
	)
	function C__driver() {
		return (
			<svg class="C__driver" width={in_s_(side__width__in)} height={in_s_(side__height__in)}>
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
				<svg class="C__driver__camper" width={in_s_(camper__depth__in)} height={in_s_(side__camper__height__in)}>
					<rect width={in_s_(camper__depth__in)} height={in_s_(side__camper__height__in)} fill="lightgray">
						<title>driver camper</title>
					</rect>
				</svg>
			)
		}
		function C__driver__frame() {
			return (
				<svg
					class="C__driver__frame"
					y={in_s_(side__frame__top__y__in)}
					width={in_s_(side__frame__width__in)}
					height={in_s_(side__frame__height__in)}
				>
					<rect
						width={in_s_(side__frame__width__in)}
						height={in_s_(side__frame__height__in)}
						fill="gray"
						fill-opacity="0.8"
					>
						<title>driver frame</title>
					</rect>
					<circle
						class="side__frame__hole"
						cx={in_s_(side__frame__hole__cx__in)}
						cy={in_s_(side__frame__hole__cy__in)}
						r={in_s_(side__frame__hole__r__in)}
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
					x={in_s_(side__bumper__x__in)}
					y={in_s_(side__bumper__y__in)}
					width={in_s_(side__bumper__width__in)}
					height={in_s_(side__bumper__height__in)}
				>
					<rect
						x={in_s_(side__bumper__x__in)}
						width={in_s_(side__bumper__connect__width__in)}
						height={in_s_(side__bumper__height__in)}
						stroke="black"
						fill="gray"
						fill-opacity="0.8"
					>
						<title>driver bumper connect piece</title>
					</rect>
					<rect
						x={in_s_(side__bumper__cross__x__in)}
						width={in_s_(side__bumper__cross__width__in)}
						height={in_s_(side__bumper__height__in)}
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
				<svg class="C__driver__fender" width={in_s_(side__fender__width__in)} height={in_s_(side__fender__height__in)}>
					<path
						d={[
							`M ${in__px_(camper__depth__in)} 0`,
							`V ${in__px_(side__frame__top__y__in)}`,
							`H ${in__px_(side__fender__width__in)}`,
							`V ${in__px_(side__fender__height__in)}`,
							`H ${0}`,
							`V ${in__px_(side__camper__height__in)}`,
							// `H 0`,
							`C ${[
								[
									in__px_(camper__depth__in * 0),
									in__px_(side__camper__height__in * .75)
								].join(' '),
								[
									in__px_(camper__depth__in * .375),
									in__px_(side__camper__height__in * .75),
								].join(' '),
								[
									in__px_(camper__depth__in * .5),
									in__px_(side__camper__height__in * .75)
								].join(' ')
							].join(', ')}`,
							`C ${[
								[
									in__px_(camper__depth__in * .5),
									in__px_(side__camper__height__in * .75)
								].join(' '),
								[
									in__px_(camper__depth__in * .85),
									in__px_(side__camper__height__in * .8),
								].join(' '),
								[
									in__px_(camper__depth__in * .85),
									in__px_(side__camper__height__in * .5)
								].join(' ')
							].join(', ')}`,
							`C ${[
								[
									in__px_(camper__depth__in * .9),
									in__px_(side__camper__height__in * .1),
								].join(' '),
								[
									in__px_(camper__depth__in * .9),
									in__px_(side__camper__height__in * 0),
								].join(' '),
								[
									in__px_(camper__depth__in * 1),
									in__px_(side__camper__height__in * 0),
								].join(' ')
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
					x={in_s_(side__y_axis__x__in)}
					y={0}
					width={in_s_(axis__across__in)}
					height={in_s_(side__y_axis__height__in)}
				>
					<C__side__y_axis__line
						class="C__driver__y_axis__line"
						x={in_s_(axis__line__position__in / side__scale)}
						y1={0}
						y2={in_s_(side__y_axis__height__in)}
						title="driver camper y-axis"
					/>
					<C__driver__y_axis__tick
						class="C__driver__y_axis__tick_0"
						y={0}
						text_y={in_s_(side__camper__height__in / 2)}
						text={in_s_(side__camper__height__in)}
					/>
					<C__driver__y_axis__tick
						class="C__driver__y_axis__tick_1"
						y={in_s_(side__camper__height__in)}
						text_y={in_s_(side__camper__height__in + side__receiver__under__body__y__in / 2)}
						text={in_s_(receiver__under__body__y__in)}
					/>
					<C__driver__y_axis__tick
						class="C__driver__y_axis__tick_2"
						y={in_s_(side__frame__top__y__in)}
						text_y={in_s_(side__frame__top__y__in + side__frame__height__in / 2)}
						text={in_s_(receiver__height__in)}
					/>
					<C__driver__y_axis__tick
						class="C__driver__y_axis__tick_3"
						y={in_s_(side__frame__bottom__y__in)}
					/>
					<C__driver__y_axis__tick
						class="C__driver__y_axis__tick_4"
						y={in_s_(side__fender__height__in)}
						text_y={in_s_(side__frame__bottom__y__in + side__frame__height__in / 2)}
						text={in_s_(receiver__height__in)}
					/>
				</svg>
			)
			function C__driver__y_axis__tick($p:VoidProps<{
				class:string
				y:number|string
				text_y?:number|string
				text?:string
			}>) {
				return (
					<C__tick
						class={$p.class}
						x1={2}
						y1={$p.y}
						x2={in_s_((axis__line__position__in / side__scale) * 2 - .04)}
						y2={$p.y}
						font_size={in_s_(12 * px__in)}
						text_x={in_s_(axis__line__position__in / side__scale + .1)}
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
					y={in_s_(side__x_axis__y__in)}
					width={in_s_(side__x_axis__width__in)}
					height={in_s_(axis__across__in)}
				>
					<C__side__x_axis__line
						class="C__driver__x_axis__line"
						x1={0}
						x2={in_s_(side__x_axis__width__in)}
						y={in_s_(axis__line__position__in / side__scale)}
						title="driver camper y-axis"
					/>
					<C__driver__x_axis__tick class="C__driver__x_axis__tick_0" x={0}/>
					<C__driver__x_axis__tick
						class="C__driver__x_axis__tick_1"
						x={in_s_(side__frame__width__in)}
						text_x={in_s_(side__frame__width__in / 2)}
						text={in_s_(side__frame__width__in)}
					/>
					<C__driver__x_axis__tick
						class="C__driver__x_axis__tick_2"
						x={in_s_(camper__depth__in)}
						text_x={in_s_(side__frame__width__in + (camper__depth__in - side__frame__width__in) / 2)}
						text={in_s_(camper__depth__in - side__frame__width__in)}
					/>
					<C__driver__x_axis__tick
						class="C__driver__x_axis__tick_3"
						x={in_s_(side__bumper__cross__x__in)}
						text_x={in_s_(camper__depth__in + (side__bumper__cross__x__in - camper__depth__in) / 2)}
						text={in_s_(side__bumper__cross__x__in - camper__depth__in)}
					/>
					<C__driver__x_axis__tick
						class="driver__x_axis__tick_4"
						x={in_s_(side__fender__width__in)}
						text_x={
							in_s_(side__bumper__cross__x__in + (side__fender__width__in - side__bumper__cross__x__in) / 2)
						}
						text={in_s_(side__fender__width__in - side__bumper__cross__x__in)}
					/>
				</svg>
			)
			function C__driver__x_axis__tick($p:VoidProps<{ class:string, x:number|string, text_x?:number|string, text?:string }>) {
				return (
					<C__side__x_axis__tick
						{...$p}
						font_size={in_s_(12 * px__in)}
						text_x={$p.text_x}
						text_y={in_s_(axis__line__position__in / side__scale + .2)}
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
					y={in_s_(side__frame__top__y__in)}
					width={in_s_(side__frame__width__in)}
					height={in_s_(side__frame__height__in)}
				>
					<C__side__frame__hole__placement__axis/>
					<C__side__frame__hole__axis/>
				</svg>
			)
			function C__side__frame__hole__placement__axis() {
				return (
					<svg
						class="C__side__frame__hole__placement__axis"
						x={in_s_(side__frame__hole__placement__axis__x__in)}
						y={in_s_(side__frame__hole__placement__axis__y__in)}
						width={in_s_(side__frame__hole__placement__axis__width__in)}
						height={in_s_(side__frame__hole__placement__axis__height__in)}
					>
						<C__side__x_axis__line
							class="C__side__frame__hole__placement__axis__line"
							x1={0}
							x2={in_s_(side__frame__hole__placement__axis__width__in)}
							y={in_s_(axis__line__position__in / side__scale)}
						/>
						<C__side__frame__axis__tick
							class="C__side__frame__hole__placement__axis__tick_0"
							x={0}
							y1={in_s_(axis__line__position__in / side__scale)}
							y2={in_s_((axis__line__position__in + axis__line__position__in - .02) / side__scale)}
						/>
						<C__side__frame__axis__tick
							class="C__side__frame__hole__placement__axis__tick_1"
							x={in_s_(side__frame__hole__placement__axis__width__in)}
							y1={in_s_(axis__line__position__in / side__scale)}
							y2={in_s_((axis__line__position__in + axis__line__position__in - .02) / side__scale)}
							text_x={in_s_(side__frame__hole__placement__axis__width__in / 2)}
							text_y={in_s_((axis__line__position__in - .1) / side__scale)}
							text={in_s_(side__frame__hole__placement__axis__width__in)}
							dominant_baseline="hanging"
						/>
					</svg>
				)
			}
			function C__side__frame__hole__axis() {
				return (
					<svg
						class="C__side__frame__hole__axis"
						x={in_s_(side__frame__hole__axis__x__in)}
						y={in_s_(side__frame__hole__axis__y__in)}
						width={in_s_(side__frame__hole__axis__width__in)}
						height={in_s_(side__frame__hole__axis__height__in)}
					>
						<C__side__x_axis__line
							class="C__side__frame__hole__axis__line"
							x1={0}
							x2={in_s_(side__frame__hole__axis__width__in)}
							y={in_s_(axis__line__position__in / side__scale)}
							stroke_width={in_s_(side__px__in)}
						/>
						<C__side__frame__axis__tick
							class="C__side__frame__hole__axis__tick_0"
							x={0}
						/>
						<C__side__frame__axis__tick
							class="C__side__frame__hole__axis__tick_1"
							x={in_s_(side__frame__hole__r__in * 2)}
							text_x={in_s_(side__frame__hole__r__in)}
							text_y={in_s_((axis__line__position__in + .1) / side__scale)}
							text={in_s_(side__frame__hole__r__in * 2)}
						/>
					</svg>
				)
			}
			function C__side__frame__axis__tick(_$p:VoidProps<{
				class:string
				x:number|string
				y1?:number|string
				y2?:number|string
				text_x?:number|string
				text_y?:number|string
				text?:string
				dominant_baseline?:JSX.PresentationSVGAttributes['dominant-baseline']
			}>) {
				const $p = mergeProps({
					y1: 2,
					y2: in_s_(axis__line__position__in / side__scale),
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
						stroke_width={in_s_(side__px__in)}
						font_size="10"
						text_anchor="middle"
						dominant_baseline={$p.dominant_baseline}
					/>
				)
			}
		}
	}
}
function C__back__x_axis__line(_$p:VoidProps<C__x_axis__line__props_T&{
	class:string
	x1:number|string
	x2:number|string
	y:number|string
}>) {
	const $p = mergeProps({
		y: in_s_(axis__line__position__in / back__scale),
		stroke_width: in_s_(px__in),
	}, _$p)
	return (
		<C__x_axis__line {...$p}/>
	)
}
function C__side__x_axis__line(_$p:VoidProps<C__x_axis__line__props_T&{
	class:string
	x1:number|string
	x2:number|string
	y:number|string
}>) {
	const $p = mergeProps({
		y: in_s_(axis__line__position__in / side__scale),
		stroke_width: in_s_(side__px__in),
	}, _$p)
	return (
		<C__x_axis__line {...$p}/>
	)
}
function C__x_axis__line(_$p:VoidProps<C__x_axis__line__props_T&{
	class:string
	x1:number|string
	x2:number|string
	y:number|string
}>) {
	const $p = mergeProps({}, _$p)
	return (
		<C__axis__line
			class={$p.class}
			x1={$p.x1}
			y1={$p.y}
			x2={$p.x2}
			y2={$p.y}
			stroke_width={$p.stroke_width}
			title={$p.title}
		/>
	)
}
function C__side__y_axis__line(_$p:VoidProps<C__y_axis__line__props_T&{
	class:string
	x:number|string
	y1:number|string
	y2:number|string
}>) {
	const $p = mergeProps({
		x: in_s_(axis__line__position__in / side__scale),
		stroke_width: in_s_(side__px__in)
	}, _$p)
	return (
		<C__y_axis__line {...$p}/>
	)
}
function C__y_axis__line(_$p:VoidProps<C__y_axis__line__props_T&{
	class:string
	x:number|string
	y1:number|string
	y2:number|string
}>) {
	const $p = mergeProps({}, _$p)
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
	x1:number|string
	x2:number|string
	y1:number|string
	y2:number|string
	stroke_width?:number|string
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
			stroke-width={$p.stroke_width}
		>
			<Show when={$p.title}>
				<title>{$p.title}</title>
			</Show>
		</line>
	)
}
function C__back__x_axis__tick(_$p:VoidProps<C__tick__props_T&{
	class:string
	x:number|string
	y1?:number|string
	y2?:number|string
}>) {
	const $p = mergeProps({
		y1: in_s_(2 * back__px__in),
		y2: in_s_(axis__line__position__in / back__scale),
		text_x: in_s_(axis__line__position__in + 10 * back__px__in),
		font_size: in_s_(12 * back__px__in),
		stroke_width: in_s_(px__in),
	}, _$p)
	return <C__x_axis__tick {...$p}/>
}
function C__side__x_axis__tick(_$p:VoidProps<C__tick__props_T&{
	class:string
	x:number|string
}>) {
	const $p = mergeProps({
		y1: in_s_(2 * side__px__in / side__scale),
		y2: in_s_(axis__line__position__in / side__scale),
		text_x: in_s_(axis__line__position__in + 10 * back__px__in),
		font_size: in_s_(12 * px__in / side__scale),
		stroke_width: in_s_(px__in),
	}, _$p)
	return <C__x_axis__tick {...$p}/>
}
function C__side__y_axis__tick(_$p:VoidProps<C__tick__props_T&{
	class:string
	x1?:number|string
	x2?:number|string
	y:number|string
}>) {
	const $p = mergeProps({
		y1: in_s_(2 * side__px__in / side__scale),
		y2: in_s_(axis__line__position__in / side__scale),
		text_y: in_s_(axis__line__position__in + 10 * side__px__in),
		font_size: in_s_(12 * px__in / side__scale),
		stroke_width: in_s_(px__in),
	}, _$p)
	return <C__y_axis__tick {...$p}/>
}
function C__x_axis__tick(_$p:VoidProps<C__tick__props_T&{
	class:string
	x:number|string
	y1:number|string
	y2:number|string
}>) {
	const $p = mergeProps({}, _$p)
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
			stroke_width={$p.stroke_width}
			dominant_baseline={$p.dominant_baseline}
			text_anchor={$p.text_anchor}
			font_size={$p.font_size}
		/>
	)
}
function C__y_axis__tick(_$p:VoidProps<C__tick__props_T&{
	class:string
	x1?:number|string
	x2?:number|string
	y:number|string
	text_y:number|string
}>) {
	const $p = mergeProps({}, _$p)
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
function C__tick(_$p:VoidProps<C__tick__props_T&{
	class:string
	x1:number|string
	y1:number|string
	x2:number|string
	y2:number|string
	font_size:number|string
}>) {
	const $p = mergeProps({
		dominant_baseline: 'middle' as JSX.PresentationSVGAttributes['dominant-baseline'],
	}, _$p)
	return [
		<line
			class={$p.class}
			x1={$p.x1}
			y1={$p.y1}
			x2={$p.x2}
			y2={$p.y2}
			stroke="black"
			stroke-width={$p.stroke_width}
		>{$p.text}</line>,
		<Show when={$p.text}>
			<text
				class={`${$p.class} text`}
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
interface C__x_axis__line__props_T {
	class:string
	x1?:number|string
	x2?:number|string
	y?:number|string
	stroke_width?:number|string
	title?:string
}
interface C__y_axis__line__props_T {
	class:string
	x?:number|string
	y1?:number|string
	y2?:number|string
	stroke_width?:number|string
	title?:string
}
interface C__tick__props_T {
	class:string
	text_x?:number|string
	text_y?:number|string
	text?:string
	stroke_width?:number|string
	dominant_baseline?:JSX.PresentationSVGAttributes['dominant-baseline']
	text_anchor?:JSX.PresentationSVGAttributes['text-anchor']
	font_size?:string
}
