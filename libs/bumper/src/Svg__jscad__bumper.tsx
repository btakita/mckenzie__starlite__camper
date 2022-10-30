import { _p_ } from '@ctx-core/function'
import modeling from '@jscad/modeling'
import svg_serializer from '@jscad/svg-serializer'
import { XMLParser } from 'fast-xml-parser'
import { type VoidProps } from 'solid-js'
import {
	back__height__in,
	back__receivers__offset__x__in,
	back__width__in,
	body__back__height__in,
	body__depth__in,
	body__width__in,
	content__height__in,
	content__width__in,
	content__x__in,
	content__y__in,
	doc__height__in,
	doc__width__in, frame__body__gap__in,
	frame__depth__in,
	frame__ground__in,
	frame__z__in,
	in__px_,
	in_s_,
	page__height__in,
	page__width__in,
	receiver__height__in,
	receiver__width__in,
	receivers__back__width__in
} from './_lib.js'
export function Svg__jscad__bumper($p:VoidProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" class="doc" width={in_s_(doc__width__in)} height={in_s_(doc__height__in)}>
			<C__page/>
			<C__page y={in_s_(page__height__in)}/>
		</svg>
	)
}
export function C__page($p:VoidProps<{ y?:number|string }>) {
	const back__bumper__svg_a = back__bumper__assembly__svg_().split('\n').slice(3)
	const parser = new XMLParser({ ignoreAttributes: false })
	const scene_o = parser.parse(`${back__bumper__svg_a[0]}</svg>`).svg
	const scene__width__in = parseFloat(scene_o['@_width'])
	const scene__height__in = parseFloat(scene_o['@_height'])
	return (
		<svg
			class="C__page"
			width={in_s_(page__width__in)}
			height={in_s_(page__height__in)}
			y={$p.y}
		>
			<svg
				class="C__page__content"
				width={in_s_(content__width__in)}
				height={in_s_(content__height__in)}
				x={in_s_(content__x__in)}
				y={in_s_(content__y__in)}
				data-back__width__in={back__width__in}
				data-back__height__in={back__height__in}
				viewBox={`0 0 ${in__px_(scene__width__in)} ${in__px_(scene__height__in)}`}
				innerHTML={back__bumper__assembly__svg_().split('\n').slice(3)}
			/>
		</svg>
	)
}
export function back__bumper__assembly__svg_() {
	const { colorize } = modeling.colors
	const { project } = modeling.extrusions
	const back__bumper__jscad = bumper__assembly__jscad_()
	const svg_a = svg_serializer.serialize(
		{ unit: 'in' },
		_p_(
			back__bumper__jscad,
			$=>project({
				axis: [0, 1, 0],
				origin: [0, -1, 0]
			}, $),
			$=>colorize(back__bumper__jscad.color, $),
		))
	return svg_a[0]
}
export function bumper__assembly__jscad_() {
	const { union } = modeling.booleans
	const { colorize, cssColors } = modeling.colors
	const { gray } = cssColors
	const { cuboid } = modeling.primitives
	return union(
		frame__jscad_(),
		// body__jscad_(),
	)
	function frame__jscad_() {
		return _p_(
			union(
				frame__driver__jscad_(),
				frame__passenger__jscad_(),
			),
			$=>colorize(gray, $),
		)
		function frame__driver__jscad_() {
			return cuboid({
				center: [
					back__receivers__offset__x__in + receiver__width__in / 2,
					frame__z__in + frame__depth__in / 2,
					frame__ground__in + receiver__height__in / 2],
				size: [receiver__width__in, frame__depth__in, receiver__height__in]
			})
		}
		function frame__passenger__jscad_() {
			return cuboid({
				center: [
					back__receivers__offset__x__in + receivers__back__width__in - receiver__width__in / 2,
					frame__z__in + frame__depth__in / 2,
					frame__ground__in + receiver__height__in / 2],
				size: [receiver__width__in, frame__depth__in, receiver__height__in]
			})
		}
	}
	function body__jscad_() {
		return _p_(
			cuboid({
				center: [
					body__width__in / 2,
					body__depth__in / 2,
					frame__ground__in + receiver__height__in + frame__body__gap__in + body__back__height__in / 2],
				size: [body__width__in, body__depth__in, body__back__height__in]
			}),
			$=>colorize(gray, $))
	}
}
