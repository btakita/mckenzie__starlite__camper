import { writeFile } from 'fs/promises'
import { join, resolve } from 'path'
import { renderToStringAsync } from 'solid-js/web'
import { Svg__jscad__bumper_assembly } from './Svg__jscad__bumper_assembly.jsx'
// import PDFDocument from 'pdfkit'
// import SVGToPdf from 'svg-to-pdfkit'
export async function Svg__jscad__bumper_assembly__run() {
	const url = new URL(import.meta.url)
	const { pathname } = url
	const build_dir = resolve(pathname, '../../../../build')
	const svg = await renderToStringAsync(()=><Svg__jscad__bumper_assembly/>)
	let bumper__path = join(build_dir, 'jscad__bumper_assembly.svg')
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
	// const pdf__path = join(build_dir, 'jscad__bumper_assembly.pdf')
	// writeFile(pdf__path, pdf).then()
	// console.info(pdf__path)
}
