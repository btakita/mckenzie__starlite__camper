import { writeFile } from 'fs/promises'
import { dirname, join } from 'path'
import PDFDocument from 'pdfkit'
import SVGToPdf from 'svg-to-pdfkit'
// 96.75
// 8 x 7.5
const bolt__diameter__in = .75
const receiver__bolt__x__in = .75
const receiver__end__x__in = 2
// .75
// 2 *
const in__px = 96
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
const receiver__width__in = 2
const receiver__height__in = 3.75
const back__camper__width__in = 96.75
const back__view__width__in = back__camper__width__in
const back__in__px = in__px / (back__view__width__in / page__width__in)
const back__camper__width = back__camper__width__in * back__in__px
const back__camper__x1 = (doc__width - back__camper__width) / 2
const back__camper__x2 = back__camper__x1 + back__camper__width
const back__screw__y = 1.5 * back__in__px
const back__camper__height = 11.5 * back__in__px
const back__receiver__width = receiver__width__in * back__in__px
const receiver__under__body__y__in = 1
const receiver__under__body__y = receiver__under__body__y__in * back__in__px
const back__receiver__height = receiver__height__in * back__in__px
const back__receivers__mid__distance__width__in = 66
const back__receivers__mid__distance__width = back__receivers__mid__distance__width__in * back__in__px
const back__receivers__y = back__camper__height
const back__receivers__x1 = back__camper__x1
const back__receivers__x2 = back__camper__x2
const back__receivers__width = back__receivers__mid__distance__width + back__receiver__width
const back__receivers__height = back__receiver__height
const back__receivers__offset__x = (back__camper__width - back__receivers__width) / 2
const back__receiver__y1 = receiver__under__body__y
const back__receiver__y2 = back__receiver__y1 + back__receiver__height
const back__receiver__dimensions__width = back__receivers__mid__distance__width
const back__receiver__dimensions__x = (back__camper__width - back__receivers__mid__distance__width) / 2
const back__receiver__dimensions__y = back__receiver__y2 + 24
const back__receiver__dimensions__text__y = 12
const back__receiver__dimensions__line__stroke_width = 1
const back__receiver__dimensions__text__height = 24
const fender__bumper__height__in = 2 * receiver__height__in
const back__receiver__dimensions__height =
	back__receiver__dimensions__line__stroke_width + back__receiver__dimensions__text__height
const back__receivers__svg__height = back__receiver__dimensions__y + back__receiver__dimensions__height
const back__fender__width = back__camper__width
const back__fender__sheet__bumper__height = fender__bumper__height__in * back__in__px
const back__fender__height =
	back__camper__height
	+ receiver__under__body__y
	+ back__fender__sheet__bumper__height
const back__view__height = back__camper__height + back__receivers__svg__height
const side__camper__width__in = 8
const side__camper__height__in = 7.5
const side__fender__height__in =
	side__camper__height__in
	+ receiver__under__body__y__in
	+ fender__bumper__height__in
const side__view__y = back__view__height + 50
const side__fender__width__in = side__camper__width__in + 6
const side__view__frame__width__in = side__fender__width__in - receiver__width__in
const side__in__px = in__px / (side__fender__width__in / content__width__in)
const side__fender__height = side__fender__height__in * side__in__px
const side__fender__width = side__fender__width__in * side__in__px
const side__view__height = side__fender__height
const side__view__width = side__fender__width
const side__camper__width = side__camper__width__in * side__in__px
const side__camper__height = side__camper__height__in * side__in__px
const side__frame__y = side__camper__height + receiver__under__body__y__in * side__in__px
const side__frame__width = side__view__frame__width__in * side__in__px
const side__frame__height = receiver__height__in * side__in__px
const side__bumper__x = side__frame__width
const side__bumper__y = side__frame__y
const side__receiver__height = receiver__height__in * side__in__px
const side__receiver__width = receiver__width__in * side__in__px
const side__bumper__height = side__receiver__height
const side__bumper__width = side__receiver__width
export function bumper__svg_() {
	// language=SVG
	return `
<svg xmlns="http://www.w3.org/2000/svg" class="doc" width="${doc__width}" height="${doc__height}">
	${bumper__page_1__svg_()}
	${bumper__page_2__svg_(page__height)}
</svg>
	`.trim()
}
export function bumper__page_1__svg_() {
	// language=SVG
	return `
		<svg class="page_1" width="${page__width}" height="${page__height}">
			${sheet__pattern_()}
			<svg
				class="page_1__content"
				x="${content__x}"
				y="${content__y}"
				width="${content__width}"
				height="${content__height}"
			>
				${back__view_()}
			</svg>
		</svg>
	`
	function back__view_() {
		// language=SVG
		return `
			<svg class="view__back" height="${back__view__height}">
				${back__camper_()}
				${back__receivers_()}
				${back__bumper_()}
				${back__bumper__sheet_()}
			</svg>
		`
		function back__camper_() {
			// language=SVG
			return `
				<svg class="camper__back" x="${back__camper__x1}" width="${back__camper__width}" height="${back__camper__height}">
					<rect
						width="${back__camper__width}"
						height="${back__camper__height}"
						fill="lightgray"
					>
						<title>camper back</title>
					</rect>
					<line
						class="screw__row"
						x1="0"
						y1="${back__screw__y}"
						x2="${back__camper__width}"
						y2="${back__screw__y}"
						stroke="black"
						stroke-dasharray="3 1"
					>
						<title>screw row</title>	
					</line>
				</svg>
			`.trim()
		}
		function back__receivers_() {
			// language=SVG
			return `
				<svg
					class="back__receivers"
					x="${back__camper__x1}"
					y="${back__receivers__y}"
					width="${back__camper__width}"
					height="${back__receivers__svg__height}"
				>
					<svg
						x="${back__receivers__offset__x}"
						y="${back__receiver__y1}"
						width="${back__receivers__width}"
						height="${back__receivers__height}"
					>
						<rect class="back__driver__receiver" width="${back__receiver__width}" height="${back__receiver__height}" fill="gray">
							<title>driver receiver</title>
						</rect>
						<rect
							class="back__passenger__receiver"
							x="${back__receivers__mid__distance__width}"
							width="${back__receiver__width}"
							height="${back__receiver__height}"
							fill="gray"
						>
							<title>passenger receiver</title>
						</rect>
					</svg>
					<svg
						class="back__receiver__dimensions"
						y="${back__receiver__dimensions__y}"
						width="${back__receiver__dimensions__width}"
						height="${back__receiver__dimensions__height}"
					>
						<line width="${back__receiver__dimensions__width}">
							<title>back receiver dimensions</title>
						</line>
					</svg>
				</svg>
			`.trim()
		}
		function back__bumper_() {
			// language=SVG
			return `
				<svg
					class="bumper__back"
					x="${back__camper__x1}"
					y="${back__camper__height}"
					width="${back__camper__width}"
					height="${back__receivers__svg__height}"
				>
					<rect
						width="${back__camper__width}"
						height="${back__receiver__height}"
						y="${back__receiver__y1}"
						stroke="black"
						fill="gray"
						fill-opacity="0.8"
					></rect>
				</svg>
			`.trim()
		}
		function back__bumper__sheet_() {
			// language=SVG
			return `
				<svg
					class="bumper__sheet"
					x="${back__camper__x1}"
					width="${back__fender__width}"
					height="${back__fender__height}"
				>
					<rect fill="url(#sheet__pattern)" width="100%" height="100%">
						<title>bumper sheet</title>
					</rect>
				</svg>
			`
		}
	}
}
export function bumper__page_2__svg_(y?:number) {
	// language=SVG
	return `
		<svg class="page_2" ${y ? `y="${y}"` : ''} width="${page__width}" height="${page__height}">
			${sheet__pattern_()}
			<svg
				class="page_2__content"
				x="${content__x}"
				y="${content__y}"
				width="${content__width}"
				height="${content__height}"
			>
				${driver__view_()}
			</svg>
		</svg>
	`
	function driver__view_() {
		// language=SVG
		return `
			<svg class="driver__view" width="${side__view__width}" height="${side__view__height}">
				${driver__camper_()}
				${driver__frame_()}
				${driver__bumper_()}
				${driver__sheet_()}
			</svg>
	  `.trim()
		function driver__camper_() {
			// language=SVG
			return `
				<svg class="driver__camper" width="${side__camper__width}" height="${side__camper__height}">
					<rect width="${side__camper__width}" height="${side__camper__height}" fill="lightgray">
						<title>driver camper</title>
					</rect>
				</svg>
			`
		}
		function driver__frame_() {
			// language=SVG
			return `
				<svg
					class="side__frame"
					y="${side__frame__y}"
					width="${side__frame__width}"
					height="${side__frame__height}"
				>
					<rect width="${side__frame__width}" height="${side__frame__height}" fill="gray" fill-opacity="0.8">
						<title>driver frame</title>
					</rect>
				</svg>
			`
		}
		function driver__bumper_() {
			// language=SVG
			return `
				<svg
					class="driver__bumper"
					x="${side__bumper__x}"
					y="${side__bumper__y}"
					width="${side__bumper__width}"
					height="${side__bumper__height}"
				>
					<rect
						width="${side__fender__width}"
						height="${side__fender__height}"
						stroke="black"
						fill="gray"
						fill-opacity="0.8"
					>
						<title>driver bumper</title>
					</rect>
				</svg>
			`
		}
		function driver__sheet_() {
			// language=SVG
			return `
				<svg class="driver__sheet" width="${side__fender__width}" height="${side__fender__height}">
					<path
						d="${[
							`M ${side__camper__width} 0`,
							`V ${side__frame__y}`,
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
						].join(' ')}"
						fill="url(#sheet__pattern)"
					></path>
				</svg>
			`
		}
	}
}
function sheet__pattern_() {
	// language=SVG
	return `
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
	`
}
const url = new URL(import.meta.url)
const { pathname } = url
if (process.argv[1] === pathname) {
	writeFile(join(dirname(pathname), '../../build', 'bumper.svg'), bumper__svg_()).then()
	const pdf = new PDFDocument({ layout: 'portrait' })
	pdf.font('Helvetica-Bold', 'Helvetica-Bold', 16)
	SVGToPdf(pdf, bumper__page_1__svg_())
	pdf.addPage()
	SVGToPdf(pdf, bumper__page_2__svg_())
	pdf.end()
	writeFile(join(dirname(pathname), '../../build', 'bumper.pdf'), pdf).then()
}
