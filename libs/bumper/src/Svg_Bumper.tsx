import { mergeProps, Show, type VoidProps } from 'solid-js'
import { type JSX } from 'solid-js/types'
import {
	axis__across__in,
	axis__line__position__in,
	back__fender__x_axis__height__in,
	back__fender__x_axis__width__in,
	back__fender__x_axis__x__in,
	back__fender__x_axis__y__in,
	back__content__height__in,
	back__in__px,
	back__px__in,
	back__receivers__axis__height__in,
	back__receivers__axis__width__in,
	back__receivers__axis__x1__in,
	back__receivers__axis__x2__in,
	back__scale,
	back__screw__y__in,
	back__title__height__in,
	back__height__in,
	back__width__in,
	body__depth__in,
	body__height__in,
	body__width__in,
	body__x__in,
	bumper__depth__in,
	bumper__height__in,
	bumper__width__in,
	bumper__x__in,
	bumper__y__in,
	C__back__receiver__height__in,
	C__back__receiver__width__in,
	C__back__receiver__x_axis__x1__in,
	C__back__receiver__x_axis__x2__in,
	C__back__receiver__x_axis__y__in,
	C__back__receiver__y_axis__x__in,
	C__back__receiver__y_axis__y1__in,
	C__back__receiver__y_axis__y2__in,
	content__height__in,
	content__width__in,
	content__x__in,
	content__y__in,
	doc__height__in,
	doc__width__in,
	fender__depth__in,
	fender__height__in,
	fender__thickness__in,
	fender__width__in,
	frame__body__gap__in,
	frame__depth__in,
	frame__hole__cy__in,
	frame__hole__cz__in,
	frame__hole__r__in,
	in__px_,
	in_s_,
	page__height__in,
	page__width__in,
	px__in,
	receiver__inner__height__in,
	receiver__inner__width__in,
	receiver__outer__height__in,
	receiver__outer__width__in,
	receiver__thickness__in,
	receivers__height__in,
	receivers__mid__width__in,
	receivers__width__in,
	receivers__x__in,
	receivers__y__in,
	side__body__height__in,
	side__bumper__frame__join__x__in,
	side__bumper__x__in,
	side__bumper__y__in,
	side__fender__height__in,
	side__frame__bottom__y__in,
	side__frame__hole__axis__height__in,
	side__frame__hole__axis__width__in,
	side__frame__hole__axis__x__in,
	side__frame__hole__axis__y__in,
	side__frame__hole__placement__axis__height__in,
	side__frame__hole__placement__axis__width__in,
	side__frame__hole__placement__axis__x__in,
	side__frame__hole__placement__axis__y__in,
	side__frame__top__y__in,
	side__height__in,
	side__in__px,
	side__px__in,
	side__scale,
	side__width__in,
	side__x_axis__width__in,
	side__x_axis__y__in,
	side__y_axis__height__in,
	side__y_axis__x__in, side__title__height__in, title__font_size, side__content__height__in
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
			<C__page_3 y={in_s_(2 * page__height__in)}/>
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
			<svg class="C__back" width={in_s_(back__width__in)} height={in_s_(back__height__in)}>
				<svg x={0} y={0} width={in_s_(back__width__in)} height={in_s_(back__title__height__in)}>
					<text
						x={in_s_(back__width__in / 2)}
						font-size={`${title__font_size / back__scale}`}
						dominant-baseline={'hanging'}
						text-anchor={'middle'}
					>Back Assembly</text>
				</svg>
				<svg
					class="C__back__content"
					x={0}
					y={in_s_(back__title__height__in)}
					width={in_s_(back__width__in)}
					height={in_s_(back__content__height__in)}
				>
					<C__back__body/>
					<C__back__receivers/>
					<C__back__bumper/>
					<C__back__fender/>
					<C__back__receivers__x_axis/>
					<C__back__fender__x_axis/>
				</svg>
			</svg>
		)
		function C__back__body() {
			return (
				<svg
					class="C__back__body"
					x={in_s_(body__x__in)}
					width={in_s_(body__width__in)}
					height={in_s_(body__height__in)}
				>
					<rect
						width={in_s_(body__width__in)}
						height={in_s_(body__height__in)}
						fill="lightgray"
					>
						<title>body back</title>
					</rect>
					<line
						class="screw__row"
						x1="0"
						y1={in_s_(back__screw__y__in)}
						x2={in_s_(body__width__in)}
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
					x={in_s_(receivers__x__in)}
					y={in_s_(receivers__y__in)}
					width={in_s_(receivers__width__in)}
					height={in_s_(receivers__height__in)}
				>
					<rect
						class="back__driver__receiver__outer"
						width={in_s_(receiver__outer__width__in)}
						height={in_s_(receiver__outer__height__in)}
						x={0}
						y={0}
						fill="darkgray"
					>
						<title>back driver receiver outer</title>
					</rect>
					<rect
						class="back__driver__receiver__inner"
						width={in_s_(receiver__inner__width__in)}
						height={in_s_(receiver__inner__height__in)}
						x={in_s_(receiver__thickness__in)}
						y={in_s_(receiver__thickness__in)}
						fill="gray"
					>
						<title>back driver receiver inner</title>
					</rect>
					<rect
						class="back__passenger__receiver__outer"
						x={in_s_(receivers__mid__width__in)}
						y={0}
						width={in_s_(receiver__outer__width__in)}
						height={in_s_(receiver__outer__height__in)}
						fill="darkgray"
					>
						<title>back passenger receiver inner</title>
					</rect>
					<rect
						class="back__passenger__receiver__inner"
						x={in_s_(receiver__thickness__in + receivers__mid__width__in)}
						y={in_s_(receiver__thickness__in)}
						width={in_s_(receiver__inner__width__in)}
						height={in_s_(receiver__inner__height__in)}
						fill="gray"
					>
						<title>back passenger receiver inner</title>
					</rect>
				</svg>
			)
		}
		function C__back__bumper() {
			return (
				<svg
					class="C__back__bumper"
					x={in_s_(bumper__x__in)}
					y={in_s_(bumper__y__in)}
					width={in_s_(bumper__width__in)}
					height={in_s_(bumper__height__in)}
				>
					<rect
						width={in_s_(body__width__in)}
						height={in_s_(bumper__height__in)}
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
					x={in_s_(body__x__in)}
					width={in_s_(fender__width__in)}
					height={in_s_(fender__height__in)}
				>
					<rect
						fill="url(#sheet__pattern)"
						width={in_s_(fender__width__in)}
						height={in_s_(fender__height__in)}
						stroke="darkgray"
						stroke-width={fender__thickness__in * back__in__px}
					>
						<title>bumper sheet</title>
					</rect>
				</svg>
			)
		}
		function C__back__receivers__x_axis() {
			return (
				<svg
					class="C__back__receivers__x_axis"
					x={0}
					y={in_s_(fender__height__in)}
					width={in_s_(body__width__in)}
					height={in_s_(back__receivers__axis__height__in)}
				>
					<C__back__x_axis__line
						class="C__back__receivers__x_axis__line"
						y={in_s_(axis__line__position__in / back__scale)}
						x1={in_s_(back__receivers__axis__x1__in)}
						x2={in_s_(back__receivers__axis__x2__in)}
						title="back receiver x axis"
					/>
					<C__back__receivers__x_axis__tick
						class="C__back__receivers__x_axis__tick_0"
						x={in_s_(back__receivers__axis__x1__in)}
					/>
					<C__back__receivers__x_axis__tick
						class="C__back__receivers__x_axis__tick_1"
						x={in_s_(back__receivers__axis__x1__in + receiver__inner__width__in)}
						text_x={in_s_(back__receivers__axis__x1__in + receiver__inner__width__in / 2)}
						text={in_s_(receiver__inner__width__in)}
						text_anchor={'middle'}
					/>
					<C__back__receivers__x_axis__tick
						class="C__back__receivers__x_axis__tick_2"
						x={in_s_(back__receivers__axis__x2__in - receiver__inner__width__in)}
						text_x={in_s_(
							back__receivers__axis__x1__in
							+ (back__receivers__axis__x2__in - back__receivers__axis__x1__in) / 2
						)}
						text={in_s_(back__receivers__axis__width__in - 2 * receiver__inner__width__in)}
						text_anchor={'middle'}
					/>
					<C__back__receivers__x_axis__tick
						class="C__back__receivers__x_axis__tick_3"
						x={in_s_(back__receivers__axis__x2__in)}
						text_x={in_s_(back__receivers__axis__x2__in - receiver__inner__width__in / 2)}
						text={in_s_(receiver__inner__width__in)}
						text_anchor={'middle'}
					/>
				</svg>
			)
			function C__back__receivers__x_axis__tick($p:VoidProps<{
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
		function C__back__fender__x_axis() {
			return (
				<svg
					class="C__back__fender__x_axis"
					x={in_s_(back__fender__x_axis__x__in)}
					y={in_s_(back__fender__x_axis__y__in)}
					width={in_s_(back__fender__x_axis__width__in)}
					height={in_s_(back__fender__x_axis__height__in)}
				>
					<C__back__x_axis__line
						class="C__back__fender__x_axis__line"
						y={in_s_(axis__line__position__in / back__scale)}
						x1={0}
						x2={in_s_(back__fender__x_axis__width__in)}
						title="back fender x axis"
					/>
					<C__back__x_axis__tick
						class="C__back__fender__x_axis__tick_0"
						x={0}
					/>
					<C__back__x_axis__tick
						class="C__back__fender__x_axis__tick_1"
						x={in_s_(back__fender__x_axis__width__in)}
						text_x={in_s_(back__fender__x_axis__width__in / 2)}
						text_y={in_s_(back__fender__x_axis__height__in)}
						text={in_s_(back__fender__x_axis__width__in)}
						text_anchor={'middle'}
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
				<svg x={0} y={0} width={in_s_(side__width__in)} height={in_s_(side__title__height__in)}>
					<text
						x={in_s_(side__width__in / 2)}
						font-size={`${title__font_size / side__scale}`}
						dominant-baseline={'hanging'}
						text-anchor={'middle'}
					>Driver Side Assembly</text>
				</svg>
				<svg
					class="C__driver__content"
					x={0}
					y={in_s_(side__title__height__in)}
					width={in_s_(side__width__in)}
					height={in_s_(side__content__height__in)}
				>
					<C__driver__body/>
					<C__driver__frame/>
					<C__driver__bumper/>
					<C__driver__fender/>
					<C__driver__y_axis/>
					<C__driver__x_axis/>
					<C__driver__frame__axis/>
				</svg>
			</svg>
		)
		function C__driver__body() {
			return (
				<svg class="C__driver__body" width={in_s_(body__depth__in)} height={in_s_(side__body__height__in)}>
					<rect
						class="driver__body"
						width={in_s_(body__depth__in)}
						height={in_s_(side__body__height__in)}
						fill="lightgray"
					>
						<title>driver body</title>
					</rect>
				</svg>
			)
		}
		function C__driver__frame() {
			return (
				<svg
					class="C__driver__frame"
					y={in_s_(side__frame__top__y__in)}
					width={in_s_(frame__depth__in)}
					height={in_s_(receiver__outer__height__in)}
				>
					<rect
						width={in_s_(frame__depth__in)}
						height={in_s_(receiver__outer__height__in)}
						fill="gray"
						fill-opacity="0.8"
					>
						<title>driver frame</title>
					</rect>
					<circle
						class="side__frame__hole"
						cx={in_s_(frame__hole__cz__in)}
						cy={in_s_(frame__hole__cy__in)}
						r={in_s_(frame__hole__r__in)}
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
					width={in_s_(bumper__depth__in)}
					height={in_s_(bumper__height__in)}
				>
					<rect
						x={0}
						width={in_s_(side__bumper__frame__join__x__in)}
						height={in_s_(bumper__height__in)}
						stroke="black"
						fill="gray"
						fill-opacity="0.8"
					>
						<title>driver bumper connect piece</title>
					</rect>
					<rect
						x={in_s_(side__bumper__frame__join__x__in)}
						width={in_s_(receiver__outer__width__in)}
						height={in_s_(bumper__height__in)}
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
				<svg class="C__driver__fender" width={in_s_(fender__depth__in)} height={in_s_(side__fender__height__in)}>
					<path
						d={[
							`M ${in__px_(body__depth__in)} 0`,
							`V ${in__px_(side__frame__top__y__in + receiver__thickness__in)}`,
							`H ${in__px_(fender__depth__in)}`,
							`V ${in__px_(side__fender__height__in)}`,
							`H ${0}`,
							`V ${in__px_(side__body__height__in)}`,
							// `H 0`,
							`C ${[
								[
									in__px_(body__depth__in * 0),
									in__px_(side__body__height__in * .75)
								].join(' '),
								[
									in__px_(body__depth__in * .375),
									in__px_(side__body__height__in * .75),
								].join(' '),
								[
									in__px_(body__depth__in * .5),
									in__px_(side__body__height__in * .75)
								].join(' ')
							].join(', ')}`,
							`C ${[
								[
									in__px_(body__depth__in * .5),
									in__px_(side__body__height__in * .75)
								].join(' '),
								[
									in__px_(body__depth__in * .85),
									in__px_(side__body__height__in * .8),
								].join(' '),
								[
									in__px_(body__depth__in * .85),
									in__px_(side__body__height__in * .5)
								].join(' ')
							].join(', ')}`,
							`C ${[
								[
									in__px_(body__depth__in * .9),
									in__px_(side__body__height__in * .1),
								].join(' '),
								[
									in__px_(body__depth__in * .9),
									in__px_(side__body__height__in * 0),
								].join(' '),
								[
									in__px_(body__depth__in * 1),
									in__px_(side__body__height__in * 0),
								].join(' ')
							].join(', ')}`,
						].join(' ')}
						fill="url(#sheet__pattern)"
						stroke="darkgray"
						stroke-width={fender__thickness__in * side__in__px}
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
						title="driver body y-axis"
					/>
					<C__driver__y_axis__tick
						class="C__driver__y_axis__tick_0"
						y={0}
						text_y={in_s_(side__body__height__in / 2)}
						text={in_s_(side__body__height__in)}
					/>
					<C__driver__y_axis__tick
						class="C__driver__y_axis__tick_1"
						y={in_s_(side__body__height__in)}
						text_y={in_s_(side__body__height__in + frame__body__gap__in / 2)}
						text={in_s_(frame__body__gap__in)}
					/>
					<C__driver__y_axis__tick
						class="C__driver__y_axis__tick_2"
						y={in_s_(side__frame__top__y__in)}
						text_y={in_s_(side__frame__top__y__in + .5 * receiver__thickness__in)}
						text={in_s_(receiver__thickness__in)}
					/>
					<C__driver__y_axis__tick
						class="C__driver__y_axis__tick_3"
						y={in_s_(side__frame__top__y__in + receiver__thickness__in)}
						text_y={in_s_(side__frame__top__y__in + receiver__thickness__in + receiver__inner__height__in / 2)}
						text={in_s_(receiver__inner__height__in)}
					/>
					<C__driver__y_axis__tick
						class="C__driver__y_axis__tick_4"
						y={in_s_(side__frame__top__y__in + receiver__thickness__in + receiver__inner__height__in)}
					/>
					<C__driver__y_axis__tick
						class="C__driver__y_axis__tick_5"
						y={in_s_(side__frame__bottom__y__in)}
						text_y={in_s_(side__frame__bottom__y__in - receiver__thickness__in / 2)}
						text={in_s_(receiver__thickness__in)}
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
						x2={in_s_(axis__line__position__in / side__scale)}
						y2={$p.y}
						font_size={in_s_(12 * px__in)}
						text_x={in_s_((axis__line__position__in + .04) / side__scale)}
						text_y={$p.text_y}
						text={$p.text}
						text_anchor={'start'}
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
						title="driver body y-axis"
					/>
					<C__driver__x_axis__tick class="C__driver__x_axis__tick_0" x={0}/>
					<C__driver__x_axis__tick
						class="C__driver__x_axis__tick_1"
						x={in_s_(frame__depth__in)}
						text_x={in_s_(frame__depth__in / 2)}
						text={in_s_(frame__depth__in)}
					/>
					<C__driver__x_axis__tick
						class="C__driver__x_axis__tick_2"
						x={in_s_(body__depth__in)}
						text_x={in_s_(frame__depth__in + (body__depth__in - frame__depth__in) / 2)}
						text={in_s_(body__depth__in - frame__depth__in)}
					/>
					<C__driver__x_axis__tick
						class="C__driver__x_axis__tick_3"
						x={in_s_(side__bumper__frame__join__x__in)}
						text_x={in_s_(body__depth__in + (side__bumper__frame__join__x__in - body__depth__in) / 2)}
						text={in_s_(side__bumper__frame__join__x__in - body__depth__in)}
					/>
					<C__driver__x_axis__tick
						class="driver__x_axis__tick_4"
						x={in_s_(fender__depth__in)}
						text_x={
							in_s_(side__bumper__frame__join__x__in + (fender__depth__in - side__bumper__frame__join__x__in) / 2)
						}
						text={in_s_(fender__depth__in - side__bumper__frame__join__x__in)}
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
					width={in_s_(frame__depth__in)}
					height={in_s_(receiver__outer__height__in)}
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
							dominant_baseline={'hanging'}
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
							x={in_s_(frame__hole__r__in * 2)}
							text_x={in_s_(frame__hole__r__in)}
							text_y={in_s_((axis__line__position__in + axis__line__position__in) / side__scale)}
							text={in_s_(frame__hole__r__in * 2)}
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
						text_anchor={'middle'}
						dominant_baseline={$p.dominant_baseline}
					/>
				)
			}
		}
	}
}
export function C__page_3($p:VoidProps<{
	y?:number|string
}>) {
	return (
		<svg class="C__page_3" y={$p.y} width={in_s_(page__width__in)} height={in_s_(page__height__in)}>
			<svg
				class="page_3__content"
				x={in_s_(content__x__in)}
				y={in_s_(content__y__in)}
				width={in_s_(content__width__in)}
				height={in_s_(content__height__in)}
				viewBox={`0 0 ${in__px_(C__back__receiver__width__in)} ${in__px_(C__back__receiver__height__in)}`}
			>
				<C__back__receiver/>
				<C__back__receiver__y_axis/>
				<C__back__receiver__x_axis/>
			</svg>
		</svg>
	)
	function C__back__receiver() {
		return (
			<svg
				class="C__back__receiver"
				width={in_s_(receiver__outer__width__in)}
				height={in_s_(receiver__outer__height__in)}
			>
				<rect
					class="back__receiver"
					width={in_s_(receiver__outer__width__in)}
					height={in_s_(receiver__outer__height__in)}
					fill="gray"
				></rect>
				<rect
					class="back__receiver"
					x={in_s_(receiver__thickness__in)}
					y={in_s_(receiver__thickness__in)}
					width={in_s_(receiver__inner__width__in)}
					height={in_s_(receiver__inner__height__in)}
					fill="lightgray"
				></rect>
			</svg>
		)
	}
	function C__back__receiver__y_axis() {
		return (
			<svg
				class="C__back__receiver__y_axis"
				x={in_s_(C__back__receiver__y_axis__x__in)}
				y={0}
				width={in_s_(axis__across__in)}
				height={in_s_(C__back__receiver__height__in)}
			>
				<C__y_axis__line
					class="C__back__receiver__y_axis__line"
					x={in_s_(axis__line__position__in)}
					y1={in_s_(C__back__receiver__y_axis__y1__in)}
					y2={in_s_(C__back__receiver__y_axis__y2__in)}
					title="back receiver y-axis"
				/>
				<C__back__receiver__y_axis__tick
					class="C__back__receiver__y_axis__tick_0"
					y={0}
				/>
				<C__back__receiver__y_axis__tick
					class="C__back__receiver__y_axis__tick_1"
					y={in_s_(receiver__thickness__in)}
					text_y={in_s_(receiver__thickness__in / 2)}
					text={in_s_(receiver__thickness__in)}
				/>
				<C__back__receiver__y_axis__tick
					class="C__back__receiver__y_axis__tick_2"
					y={in_s_(receiver__thickness__in + receiver__inner__height__in)}
					text_y={in_s_(receiver__thickness__in + receiver__inner__height__in / 2)}
					text={in_s_(receiver__inner__height__in)}
				/>
				<C__back__receiver__y_axis__tick
					class="C__back__receiver__y_axis__tick_3"
					y={in_s_(receiver__outer__height__in)}
					text_y={in_s_(receiver__outer__height__in - receiver__thickness__in / 2)}
					text={in_s_(receiver__thickness__in)}
				/>
			</svg>
		)
		function C__back__receiver__y_axis__tick($p:VoidProps<{
			class:string
			y:number|string
			text_y?:number|string
			text?:string
		}>) {
			return (
				<C__tick
					class={$p.class}
					x1={0}
					y1={$p.y}
					x2={in_s_(axis__line__position__in)}
					y2={$p.y}
					font_size={in_s_(12 * px__in)}
					text_x={in_s_(axis__line__position__in / side__scale + axis__line__position__in)}
					text_y={$p.text_y}
					text={$p.text}
					text_anchor={'start'}
				/>
			)
		}
	}
	function C__back__receiver__x_axis() {
		return (
			<svg
				class="C__back__receiver__x_axis"
				x={0}
				y={in_s_(C__back__receiver__x_axis__y__in)}
				width={in_s_(C__back__receiver__width__in)}
				height={in_s_(C__back__receiver__height__in)}
			>
				<C__x_axis__line
					class="C__back__receiver__y_axis__line"
					x1={in_s_(C__back__receiver__x_axis__x1__in)}
					x2={in_s_(C__back__receiver__x_axis__x2__in)}
					y={in_s_(axis__line__position__in)}
					title="back receiver x-axis"
				/>
				<C__back__receiver__y_axis__tick
					class="C__back__receiver__y_axis__tick_0"
					x={0}
				/>
				<C__back__receiver__y_axis__tick
					class="C__back__receiver__y_axis__tick_1"
					x={in_s_(receiver__thickness__in)}
					text_x={0}
					text={in_s_(receiver__thickness__in)}
					text_anchor={'start'}
				/>
				<C__back__receiver__y_axis__tick
					class="C__back__receiver__y_axis__tick_2"
					x={in_s_(receiver__thickness__in + receiver__inner__width__in)}
					text_x={in_s_(receiver__thickness__in + receiver__inner__width__in / 2)}
					text={in_s_(receiver__inner__width__in)}
				/>
				<C__back__receiver__y_axis__tick
					class="C__back__receiver__y_axis__tick_3"
					x={in_s_(receiver__outer__width__in)}
					text_x={in_s_(receiver__outer__width__in)}
					text={in_s_(receiver__thickness__in)}
					text_anchor={'end'}
				/>
			</svg>
		)
		function C__back__receiver__y_axis__tick(_$p:VoidProps<{
			class:string
			x:number|string
			text_x?:number|string
			text?:string
			text_anchor?:JSX.PresentationSVGAttributes['text-anchor']
		}>) {
			const $p = mergeProps({
				text_anchor: 'middle' as JSX.PresentationSVGAttributes['text-anchor']
			}, _$p)
			return (
				<C__tick
					class={$p.class}
					x1={$p.x}
					y1={0}
					x2={$p.x}
					y2={in_s_(axis__line__position__in + .04)}
					font_size={in_s_(12 * px__in)}
					text_x={$p.text_x}
					text_y={in_s_(axis__line__position__in / side__scale + axis__line__position__in)}
					text={$p.text}
					text_anchor={$p.text_anchor}
				/>
			)
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
	dominant_baseline?:JSX.PresentationSVGAttributes['dominant-baseline']
	text_anchor?:JSX.PresentationSVGAttributes['text-anchor']
}>) {
	const $p = mergeProps({
		dominant_baseline: 'middle' as JSX.PresentationSVGAttributes['dominant-baseline'],
		text_anchor: 'middle' as JSX.PresentationSVGAttributes['text-anchor']
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
