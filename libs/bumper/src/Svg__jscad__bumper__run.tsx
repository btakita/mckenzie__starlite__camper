import { writeFile } from 'fs/promises'
import { join, resolve } from 'path'
import { renderToStringAsync } from 'solid-js/web'
import { Svg__jscad__bumper } from './Svg__jscad__bumper.jsx'
// import PDFDocument from 'pdfkit'
// import SVGToPdf from 'svg-to-pdfkit'
export async function Svg__jscad__bumper__run() {
	const url = new URL(import.meta.url)
	const { pathname } = url
	const build_dir = resolve(pathname, '../../../../build')
	const svg = await renderToStringAsync(()=><Svg__jscad__bumper/>)
	let bumper__path = join(build_dir, 'bumper__jscad.svg')
	await writeFile(bumper__path, svg)
	console.info(bumper__path)
	// const pdf = new PDFDocument({
	// 	layout: 'portrait'
	// })
	// pdf.font('Helvetica-Bold', 'Helvetica-Bold', 16)
	// SVGToPdf(pdf, back__bumper__jscad_())
	// // pdf.addPage()
	// // SVGToPdf(pdf, await renderToStringAsync(()=>createComponent(C__page_2, {})))
	// pdf.end()
	// const pdf__path = join(build_dir, 'bumper__jscad.pdf')
	// writeFile(pdf__path, pdf).then()
	// console.info(pdf__path)
}
