import { XMLParser } from 'fast-xml-parser'
import { type VoidProps } from 'solid-js'
import {
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
import { back__bumper_assembly__svg_, driver__bumper_assembly__svg_ } from './bumper_assembly__jscad.js'
export function Svg__bumper_assembly__jscad() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" class="doc" width={in_s_(doc__width__in)} height={in_s_(doc__height__in)}>
			<C__jscad__page_1/>
			<C__jscad__page_2 y={in_s_(page__height__in)}/>
		</svg>
	)
}
export function C__jscad__page_1($p:VoidProps<{ y?:number|string }>) {
	const back__assembly__svg_a = back__bumper_assembly__svg_().split('\n').slice(3)
	const parser = new XMLParser({ ignoreAttributes: false })
	const scene_o = parser.parse(`${back__assembly__svg_a[0]}</svg>`).svg
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
				viewBox={`0 0 ${in__px_(scene__width__in)} ${in__px_(scene__height__in)}`}
				innerHTML={back__assembly__svg_a.join('\n')}
			/>
		</svg>
	)
}
export function C__jscad__page_2($p:VoidProps<{ y?:number|string }>) {
	const driver__assembly__svg_a = driver__bumper_assembly__svg_().split('\n').slice(3)
	const parser = new XMLParser({ ignoreAttributes: false })
	const scene_o = parser.parse(`${driver__assembly__svg_a[0]}</svg>`).svg
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
				viewBox={`0 0 ${in__px_(scene__width__in)} ${in__px_(scene__height__in)}`}
				innerHTML={driver__assembly__svg_a.join('\n')}
			/>
		</svg>
	)
}
