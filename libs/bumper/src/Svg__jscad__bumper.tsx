import { _p_ } from '@ctx-core/function'
import modeling from '@jscad/modeling'
import type { RGB, RGBA } from '@jscad/modeling/src/colors'
import type { Geom2 } from '@jscad/modeling/src/geometries/geom2'
import type { Geom3 } from '@jscad/modeling/src/geometries/geom3'
import type { Colored } from '@jscad/modeling/src/geometries/types'
import { ProjectOptions } from '@jscad/modeling/src/operations/extrusions/project'
import svg_serializer from '@jscad/svg-serializer'
import { XMLParser } from 'fast-xml-parser'
import { type VoidProps } from 'solid-js'
import {
	back__height__in,
	receivers__x__in,
	back__drawing__width__in,
	body__depth__in,
	body__height__in,
	body__width__in,
	content__height__in,
	content__width__in,
	content__x__in,
	content__y__in,
	doc__height__in,
	doc__width__in,
	frame__body__gap__in,
	frame__depth__in,
	frame__ground__in,
	frame__z__in,
	in__px_,
	in_s_,
	page__height__in,
	page__width__in,
	receiver__inner__height__in,
	receiver__inner__width__in,
	receivers__width__in
} from './_lib.js'
const { project } = modeling.extrusions
const { union } = modeling.booleans
const { colorize, cssColors } = modeling.colors
const { gray } = cssColors
const { cuboid } = modeling.primitives
const back__project__options:ProjectOptions = {
	axis: [0, -1, 0],
	origin: [0, -1, 0]
}
export function Svg__jscad__bumper() {
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
				data-back__width__in={back__drawing__width__in}
				data-back__height__in={back__height__in}
				viewBox={`0 0 ${in__px_(scene__width__in)} ${in__px_(scene__height__in)}`}
				innerHTML={back__bumper__svg_a.join('\n')}
			/>
		</svg>
	)
}
export function back__bumper__assembly__svg_():string {
	return svg_serializer.serialize(
		{ unit: 'in' },
		bumper__assembly__jscad_a_().map($=>
			project_colorize(back__project__options, $))
	)[0]
}
export function bumper__assembly__jscad_a_():(Geom3&Colored)[] {
	return [
		frame__jscad_(),
		body__jscad_(),
		// bumper__jscad_()
	]
}
function frame__jscad_():Geom3&Colored {
	return _p_(
		union(
			frame__driver__jscad_(),
			frame__passenger__jscad_(),
		),
		$=>colorize(gray, $),
	)
	function frame__driver__jscad_():Geom3 {
		return cuboid({
			center: [
				receivers__x__in + receiver__inner__width__in / 2,
				frame__z__in + frame__depth__in / 2,
				frame__ground__in + receiver__inner__height__in / 2],
			size: [receiver__inner__width__in, frame__depth__in, receiver__inner__height__in]
		})
	}
	function frame__passenger__jscad_():Geom3 {
		return cuboid({
			center: [
				receivers__x__in + receivers__width__in - receiver__inner__width__in / 2,
				frame__z__in + frame__depth__in / 2,
				frame__ground__in + receiver__inner__height__in / 2],
			size: [receiver__inner__width__in, frame__depth__in, receiver__inner__height__in]
		})
	}
}
function body__jscad_():Geom3&Colored {
	return _p_(
		cuboid({
			center: [
				body__width__in / 2,
				body__depth__in / 2,
				frame__ground__in + receiver__inner__height__in + frame__body__gap__in + body__height__in / 2],
			size: [body__width__in, body__depth__in, body__height__in]
		}),
		$=>colorize(gray, $))
}
// function bumper__jscad_():Geom3&Colored {
// 	return _p_(cuboid({
// 		center: [
// 			body__width__in / 2,
// 			frame__z__in + receiver__inner__width__in,
// 		],
// 	}), $=>colorize([...gray, .8], $))
// }
// function fender__jscad_():Geom3&Colored {
// 	return _p_(
// 		union(camper__back__fender__jscad_()),
// 		$=>colorize([...gray, .6], $)
// 	)
// 	function camper__back__fender__jscad_():Geom3 {
//
// 	}
// }
function project_colorize(
	options:ProjectOptions, $:Geom3, color:RGB|RGBA = $.color
):Geom2&Colored {
	return _p_($,
		$=>project(options, $),
		$=>colorize(color, $))
}
