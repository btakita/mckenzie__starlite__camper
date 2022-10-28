import { Svg_Bumper, Svg_Bumper_Page_1, Svg_Bumper_page_2 } from '@mckenzie_starlite__camper/bumper'
import { resolve } from 'path'
import { writeFile } from 'fs/promises'
import PDFDocument from 'pdfkit'
import { createComponent, renderToStringAsync } from 'solid-js/web'
import SVGToPdf from 'svg-to-pdfkit'
const url = new URL(import.meta.url)
const { pathname } = url
const build_dir = resolve(pathname, '../../build')
const svg = await renderToStringAsync(()=>createComponent(Svg_Bumper, {}))
await writeFile(resolve(build_dir, 'bumper.svg'), svg)
const pdf = new PDFDocument({
	layout: 'portrait'
})
pdf.font('Helvetica-Bold', 'Helvetica-Bold', 16)
SVGToPdf(pdf, await renderToStringAsync(()=>createComponent(Svg_Bumper_Page_1, {})))
pdf.addPage()
SVGToPdf(pdf, await renderToStringAsync(()=>createComponent(Svg_Bumper_page_2, {})))
pdf.end()
writeFile(resolve(build_dir, 'bumper.pdf'), pdf).then()
