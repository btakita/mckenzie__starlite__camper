import modeling from '@jscad/modeling'
import svg_serializer from '@jscad/svg-serializer'
import { camper__back__height__in, camper__back__width__in } from './_const.js'
export function bumper__jscad_() {
	return [back__bumper__jscad_()]
}
export function back__bumper__jscad_() {
	const { square } = modeling.primitives
	const { extrudeRectangular, project } = modeling.extrusions
	const camper__back = extrudeRectangular({
		size: camper__back__width__in,
		height: camper__back__height__in
	}, square({ size: 1 }))
	const svg_a = svg_serializer.serialize({ unit: 'in' }, project({
		axis: [0, 0, 1],
		origin: [0, 0, 20]
	}, camper__back))
	return svg_a[0]
}
