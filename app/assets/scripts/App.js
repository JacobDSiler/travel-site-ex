import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';


var mobileMenu = new MobileMenu();
/*var revealOnScroll =*/
new RevealOnScroll($(".feature-item"),"85%");
new RevealOnScroll($(".testimonial"),"65%");
var stickyHeader = new StickyHeader();
