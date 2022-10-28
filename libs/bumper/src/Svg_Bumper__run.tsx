import { Svg_Bumper, Svg_Bumper_Page_1, Svg_Bumper_page_2 } from '@mckenzie_starlite__camper/bumper'
import { writeFile } from 'fs/promises'
import { join, resolve } from 'path'
import PDFDocument from 'pdfkit'
import { createComponent, renderToStringAsync } from 'solid-js/web'
import SVGToPdf from 'svg-to-pdfkit'
export async function Svg_Bumper__run() {
	const url = new URL(import.meta.url)
	const { pathname } = url
	const build_dir = resolve(pathname, '../../../../build')
	const svg = await renderToStringAsync(()=>createComponent(Svg_Bumper, {}))
	let bumper__path = join(build_dir, 'bumper.svg')
	await writeFile(bumper__path, svg)
	console.info(bumper__path)
	const pdf = new PDFDocument({
		layout: 'portrait'
	})
	pdf.font('Helvetica-Bold', 'Helvetica-Bold', 16)
	SVGToPdf(pdf, await renderToStringAsync(()=>createComponent(Svg_Bumper_Page_1, {})))
	pdf.addPage()
	SVGToPdf(pdf, await renderToStringAsync(()=>createComponent(Svg_Bumper_page_2, {})))
	pdf.end()
	const pdf__path = join(build_dir, 'bumper.pdf')
	writeFile(pdf__path, pdf).then()
	console.info(pdf__path)
}
