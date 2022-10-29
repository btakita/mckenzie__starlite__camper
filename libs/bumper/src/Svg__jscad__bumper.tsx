import { _p_ } from '@ctx-core/function'
import modeling from '@jscad/modeling'
import svg_serializer from '@jscad/svg-serializer'
import { XMLParser } from 'fast-xml-parser'
import { type VoidProps } from 'solid-js'
import {
	back__height__in,
	back__width__in,
	camper__back__height__in,
	camper__depth__in,
	camper__width__in,
	content__height__in,
	content__width__in,
	content__x__in,
	content__y__in,
	doc__height__in,
	doc__width__in,
	in__px_,
	in_s_,
	page__height__in,
	page__width__in
} from './_lib.js'
export function bumper__jscad_() {
	return [back__bumper__jscad_()]
}
export function Svg__jscad__bumper($p:VoidProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" class="doc" width={in_s_(doc__width__in)} height={in_s_(doc__height__in)}>
			<C__page/>
			<C__page y={in_s_(page__height__in)}/>
		</svg>
	)
}
export function C__page($p:VoidProps<{ y?:number|string }>) {
	const back__bumper__svg_a = back__bumper__svg_().split('\n').slice(3)
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
				innerHTML={back__bumper__svg_().split('\n').slice(3)}
			/>
		</svg>
	)
}
export function back__bumper__svg_() {
	const { colorize } = modeling.colors
	const { project } = modeling.extrusions
	const back__bumper__jscad = back__bumper__jscad_()
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
export function back__bumper__jscad_() {
	const { colorize, cssColors } = modeling.colors
	const { cuboid } = modeling.primitives
	return _p_(
		cuboid({
			center: [camper__width__in / 2, camper__depth__in / 2, camper__back__height__in / 2],
			size: [camper__width__in, camper__depth__in, camper__back__height__in]
		}),
		$=>colorize(cssColors.gray, $)
	)
}
