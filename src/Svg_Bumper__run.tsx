import { writeFile } from 'fs/promises'
import PDFDocument from 'pdfkit'
import { renderToStringAsync } from 'solid-js/web'
import SVGToPdf from 'svg-to-pdfkit'
import { Svg_Bumper, Svg_Bumper_Page_1, Svg_Bumper_page_2 } from '@mckenzie_starlite__camper/bumper'
const svg = await renderToStringAsync(()=><Svg_Bumper/>)
await writeFile('./build/bumper.svg', svg)
const pdf = new PDFDocument({ layout: 'portrait' })
pdf.font('Helvetica-Bold', 'Helvetica-Bold', 16)
SVGToPdf(pdf, await renderToStringAsync(()=><Svg_Bumper_Page_1/>))
pdf.addPage()
SVGToPdf(pdf, await renderToStringAsync(()=><Svg_Bumper_page_2/>))
pdf.end()
writeFile('./build/bumper.pdf', pdf).then()
