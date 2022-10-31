export const in__px = 96
export const px__in = 1. / 96
export const page__width__in = 8.5
export const page__height__in = 11
export const page__margin_x__in = .25
export const content__width__in = page__width__in - (2 * page__margin_x__in)
export const page__margin_y__in = .25
export const doc__width__in = page__width__in
export const content__height__in = page__height__in - (2 * page__margin_y__in)
export const page__count = 3
export const doc__height__in = page__height__in * page__count
export const content__x__in = page__margin_x__in
export const content__y__in = page__margin_y__in
export const title__font_size = 30
export const title__font_height = 36
export const axis__across__in = 1
export const receiver__inner__width__in = 1.75
export const receiver__inner__height__in = 3.75
export const receiver__thickness__in = .125
export const receiver__outer__width__in = receiver__inner__width__in + 2 * receiver__thickness__in
export const receiver__outer__height__in = receiver__inner__height__in + 2 * receiver__thickness__in
export const frame__ground__in = 10
export const fender__thickness__in = .1
export const body__width__in = 96.75
export const body__height__in = 11.5
export const body__x__in = 0
export const receivers__mid__width__in = 66
export const frame__body__gap__in = 1
export const receivers__y__in = body__height__in + frame__body__gap__in
export const receivers__width__in = receivers__mid__width__in + receiver__outer__width__in
export const receivers__height__in = receiver__outer__height__in
export const receivers__x__in = (body__width__in - receivers__width__in) / 2
export const bumper__x__in = body__x__in
export const bumper__y__in = body__height__in + frame__body__gap__in + receiver__thickness__in
export const bumper__width__in = body__width__in
export const bumper__height__in = receiver__inner__height__in
export const fender__width__in = body__width__in
export const fender__height__in = body__height__in + frame__body__gap__in + receiver__outer__height__in
export const back__width__in = body__width__in + 2 * fender__thickness__in
export const back__scale = content__width__in / back__width__in
export const back__in__px = in__px * back__scale
export const back__px__in = 1. / back__in__px
export const back__screw__y__in = 1.5
export const back__title__height__in = title__font_height * px__in / back__scale
export const back__receivers__axis__height = 24
export const back__receivers__axis__height__in = back__receivers__axis__height * back__px__in
export const back__receivers__axis__width__in = receivers__mid__width__in + receiver__inner__width__in
export const back__receivers__axis__x1__in = (body__width__in - back__receivers__axis__width__in) / 2
export const back__receivers__axis__x2__in = back__receivers__axis__x1__in + back__receivers__axis__width__in
export const back__fender__x_axis__height__in = .24 / back__scale
export const back__fender__x_axis__x__in = 0
export const back__fender__x_axis__width__in = body__width__in
export const back__fender__x_axis__y__in = fender__height__in + back__receivers__axis__height__in
export const back__content__height__in = back__fender__x_axis__y__in + back__fender__x_axis__height__in
export const back__height__in = back__title__height__in + back__content__height__in + 1 / back__scale
export const bolt__diameter__in = .75
export const receiver__bolt__dx__in = .75
export const body__depth__in = 8
export const side__body__height__in = 7.5
export const side__fender__height__in =
	side__body__height__in + frame__body__gap__in + receiver__outer__height__in
export const side__frame__extension__in = 4
export const fender__depth__in =
	body__depth__in + side__frame__extension__in + receiver__outer__width__in
export const frame__body__dz = 2
export const frame__z__in = fender__thickness__in + frame__body__dz
export const frame__depth__in = body__depth__in - frame__body__dz
export const side__scale = content__width__in / (fender__depth__in + axis__across__in)
export const side__in__px = in__px * side__scale
export const side__px__in = 1. / side__in__px
export const side__title__height__in = title__font_height * px__in / side__scale
export const side__content__height__in = side__fender__height__in + axis__across__in
export const side__height__in = side__content__height__in + side__title__height__in
export const side__width__in = fender__depth__in + axis__across__in
export const side__y_axis__x__in = fender__depth__in
export const axis__line__position__in = .1
export const side__y_axis__height__in = side__fender__height__in
export const side__frame__top__y__in = side__body__height__in + frame__body__gap__in
export const side__frame__bottom__y__in = side__frame__top__y__in + receiver__outer__height__in
export const bumper__z__in = fender__thickness__in
export const side__bumper__x__in = 0
export const side__bumper__y__in = side__frame__top__y__in + receiver__thickness__in
export const frame__hole__r__in = bolt__diameter__in / 2
export const frame__hole__cz__in = frame__depth__in - receiver__bolt__dx__in - frame__hole__r__in
export const frame__hole__cy__in = receiver__outer__height__in / 2
export const side__frame__hole__placement__axis__x__in = frame__hole__cz__in + frame__hole__r__in
export const side__frame__hole__placement__axis__y__in = frame__hole__cy__in - 2 * frame__hole__r__in
export const side__frame__hole__placement__axis__width__in = receiver__bolt__dx__in
export const side__frame__hole__placement__axis__height__in = frame__hole__r__in * 4
export const side__frame__hole__axis__x__in = frame__hole__cz__in - frame__hole__r__in
export const side__frame__hole__axis__y__in = frame__hole__cy__in + frame__hole__r__in
export const side__frame__hole__axis__width__in = frame__hole__r__in * 2
export const side__frame__hole__axis__height__in = frame__hole__r__in * 2
export const side__bumper__frame__join__x__in = fender__depth__in - receiver__outer__width__in
export const bumper__depth__in = fender__depth__in
export const side__x_axis__y__in = side__fender__height__in
export const side__x_axis__width__in = fender__depth__in
export const C__back__receiver__width__in = receiver__outer__width__in + axis__across__in
export const C__back__receiver__height__in = receiver__outer__height__in + axis__across__in
export const C__back__receiver__scale = content__height__in / C__back__receiver__height__in
export const C__back__receiver__in__px = in__px * C__back__receiver__scale
export const C__back__receiver__px__in = 1. / C__back__receiver__in__px
export const C__back__receiver__y_axis__x__in = receiver__outer__width__in
export const C__back__receiver__y_axis__y1__in = 0
export const C__back__receiver__y_axis__y2__in = receiver__outer__height__in
export const C__back__receiver__x_axis__x1__in = 0
export const C__back__receiver__x_axis__x2__in = receiver__outer__width__in
export const C__back__receiver__x_axis__y__in = receiver__outer__height__in
export function in_s_(inches:number) {
	return `${inches}in`
}
export function in__px_(inches:number) {
	return inches * in__px
}
