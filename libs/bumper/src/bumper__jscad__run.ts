import { writeFile } from 'fs/promises'
import { join, resolve } from 'path'
import PDFDocument from 'pdfkit'
import SVGToPdf from 'svg-to-pdfkit'
import { back__bumper__jscad_, bumper__jscad_ } from './bumper__jscad_.js'
export async function bumper__jscad__run() {
	const url = new URL(import.meta.url)
	const { pathname } = url
	const build_dir = resolve(pathname, '../../../../build')
	const svg = await bumper__jscad_()
	let bumper__path = join(build_dir, 'bumper__jscad.svg')
	await writeFile(bumper__path, svg)
	console.info(bumper__path)
	const pdf = new PDFDocument({
		layout: 'portrait'
	})
	pdf.font('Helvetica-Bold', 'Helvetica-Bold', 16)
	SVGToPdf(pdf, back__bumper__jscad_())
	// pdf.addPage()
	// SVGToPdf(pdf, await renderToStringAsync(()=>createComponent(C__page_2, {})))
	pdf.end()
	const pdf__path = join(build_dir, 'bumper__jscad.pdf')
	writeFile(pdf__path, pdf).then()
	console.info(pdf__path)
}
