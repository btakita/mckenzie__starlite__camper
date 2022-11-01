import { _p_ } from '@ctx-core/function'
import modeling from '@jscad/modeling'
import type { RGB, RGBA } from '@jscad/modeling/src/colors'
import type { Colored, Geom2, Geom3 } from '@jscad/modeling/src/geometries/types'
import type { ProjectOptions } from '@jscad/modeling/src/operations/extrusions'
import svg_serializer from '@jscad/svg-serializer'
import {
	body__depth__in,
	body__height__in,
	body__width__in,
	frame__body__gap__in,
	frame__depth__in,
	frame__ground__in,
	frame__z__in,
	receiver__inner__height__in,
	receiver__inner__width__in,
	receiver__outer__height__in,
	receiver__outer__width__in,
	receivers__width__in,
	receivers__x__in
} from './_lib.js'
const { project } = modeling.extrusions
const { subtract, union } = modeling.booleans
const { colorize, cssColors } = modeling.colors
const { gray } = cssColors
const { cuboid } = modeling.primitives
const { rotateZ } = modeling.transforms
const project__options:ProjectOptions = {
	axis: [0, -1, 0],
	origin: [0, -1, 0]
}
function degrees__radians_(degrees:number) {
	return degrees * Math.PI / 180
}
export function back__bumper_assembly__svg_():string {
	return svg_serializer.serialize(
		{ unit: 'in' },
		bumper_assembly__jscad_a_().map($=>
			project_colorize(project__options, $))
	)[0]
}
export function driver__bumper_assembly__svg_():string {
	return svg_serializer.serialize(
		{ unit: 'in' },
		bumper_assembly__jscad_a_().map($=>
			_p_(rotateZ(degrees__radians_(90), $),
				$=>project_colorize(project__options, $)))
	)[0]
}
export function bumper_assembly__jscad_a_():(Geom3&Colored)[] {
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
		return subtract(
			cuboid({
				center: [
					receivers__x__in + receiver__outer__width__in / 2,
					frame__z__in + frame__depth__in / 2,
					frame__ground__in + receiver__outer__height__in / 2],
				size: [receiver__outer__width__in, frame__depth__in, receiver__outer__height__in]
			}),
			cuboid({
				center: [
					receivers__x__in + receiver__outer__width__in / 2,
					frame__z__in + frame__depth__in / 2,
					frame__ground__in + receiver__outer__height__in / 2],
				size: [receiver__inner__width__in, frame__depth__in, receiver__inner__height__in]
			})
		)
	}
	function frame__passenger__jscad_():Geom3 {
		return subtract(
			cuboid({
				center: [
					receivers__x__in + receivers__width__in - receiver__outer__width__in / 2,
					frame__z__in + frame__depth__in / 2,
					frame__ground__in + receiver__outer__height__in / 2],
				size: [receiver__outer__width__in, frame__depth__in, receiver__outer__height__in]
			}),
			cuboid({
				center: [
					receivers__x__in + receivers__width__in - receiver__outer__width__in / 2,
					frame__z__in + frame__depth__in / 2,
					frame__ground__in + receiver__outer__height__in / 2],
				size: [receiver__inner__width__in, frame__depth__in, receiver__inner__height__in]
			})
		)
	}
}
function body__jscad_():Geom3&Colored {
	return _p_(
		cuboid({
			center: [
				body__width__in / 2,
				body__depth__in / 2,
				frame__ground__in + receiver__outer__height__in + frame__body__gap__in + body__height__in / 2],
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
