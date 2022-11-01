import { C__page_1, C__page_2, C__page_3, Svg_bumper_assembly } from '@mckenzie_starlite__camper/bumper'
import { writeFile } from 'fs/promises'
import { join, resolve } from 'path'
import PDFDocument from 'pdfkit'
import { createComponent, renderToStringAsync } from 'solid-js/web'
import SVGToPdf from 'svg-to-pdfkit'
export async function Svg_bumper_assembly__run() {
	const url = new URL(import.meta.url)
	const { pathname } = url
	const build_dir = resolve(pathname, '../../../../build')
	const svg = await renderToStringAsync(()=>createComponent(Svg_bumper_assembly, {}))
	let bumper__path = join(build_dir, 'bumper_assembly.svg')
	await writeFile(bumper__path, svg)
	console.info(bumper__path)
	const pdf = new PDFDocument({
		layout: 'portrait'
	})
	pdf.font('Helvetica-Bold', 'Helvetica-Bold', 16)
	SVGToPdf(pdf, await renderToStringAsync(()=>createComponent(C__page_1, {})))
	pdf.addPage()
	SVGToPdf(pdf, await renderToStringAsync(()=>createComponent(C__page_2, {})))
	pdf.addPage()
	SVGToPdf(pdf, await renderToStringAsync(()=>createComponent(C__page_3, {})))
	pdf.end()
	const pdf__path = join(build_dir, 'bumper_assembly.pdf')
	writeFile(pdf__path, pdf).then()
	console.info(pdf__path)
}
