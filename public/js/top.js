// JavaScript Document
pathis=location.pathname;
new_array=pathis.split("/");
var arrlen = new_array.length-2
subdirectory=new_array[arrlen]; 
var arrlen = new_array.length-1
file=new_array[arrlen];

$(document).ready(function(){
		$('.navbar-fostrap').click(function(){
			$('.nav-fostrap').toggleClass('visible');
			$('body,html').toggleClass('cover-bg');
		});
	});
  
document.write('<div class="top-header show-in-desktop">');
document.write('  <div class="wrap">');
document.write('  <div class="top-header-content">');
document.write('  <div class="top-header-details">');
// document.write('<a href=" #/company/" target="_blank" class="top-page-link">About</a>');
document.write('<a href="/faqs/faqs" class="top-page-link">FAQ&rsquo;s</a>');
// document.write('<a href="//blog/" class="top-page-link">Blog</a>');
// document.write('<a href="//supply-region/" class="top-page-link">Supply Region</a>');
document.write('<span class="top-page-link2"><a href="/datasheets/datasheets" >Datasheets</a></span>');
document.write('<span class="top-page-link2"><a href="mailto:thesigmaindustry@gmail.com"><i class="fa fa-envelope-o" aria-hidden="true"></i>thesigmaindustry@gmail.com</a></span>');
document.write('<i class="fa fa-phone" aria-hidden="true"></i>+91 8983185004</p>');
document.write('</div>');
document.write('  </div>');
 document.write(' </div>');
 document.write(' </div>');
  

document.write('  <div class="wrap" >');
document.write('      <!-- :::: HEADER CONTENT STARTS :::: -->');
document.write('      <div class="header-content" >');
document.write('      <!--:::: MAIN MENU ::::-->');
document.write('      <div class="header-logo">');
document.write('      <a href="/"> <img style="" src="/images/logo.webp" alt="Sigma Industry Fasteners Logo" title="Sigma Industry Fasteners Logo"></a>');
document.write('      </div>');
document.write('      <nav>');
document.write('      <div class="nav-fostrap">');
document.write('      <h2 class="desktop-hide">Menu</h2>');
 document.write('       <ul>');
document.write('          <li><a href="/"><i class="fa fa-home" aria-hidden="true"></i></a></li>');
document.write('          <li class="desktop-hide"><a href="//about/">About Us</a></li>');
document.write('          <li>');
document.write('          <a href="javascript:void(0)" class="desktop-hide">Products</a>');
document.write('          <a class="mobile-hide" href="">Products</a>');
document.write('            <ul class="dropdown">');
// document.write('       <li class="desktop-hide"><a href="//products/">Overview</a></li>');
document.write('      <li><a href="/pages/products/blots">Bolts</a></li>');
document.write('      <li><a href="/pages/products/screws/screws/products/screws">Screws</a></li>');
document.write('      <li><a href="/pages/products/stud-bolts/stud-bolts/products/stud-bolts">Stud Bolts</a></li>');
document.write('      <li> <a href="/pages/products/threaded-rods/threaded-rods/products/threaded-rods" >Threaded Rods</a></li>');
document.write('      <li><a href="/pages/products/nuts/nuts/products/nuts" >Nuts</a></li>');
document.write('      <li><a href="/pages/products/washers/washers/products/washers" >Washers</a></li>');
document.write('      <li> <a href="/pages/products/coated-fasteners/products/coated-fasteners/" >Coated Fasteners</a></li>');
document.write('      <li> <a href="/pages/products/springs/springs/products/springs" >Springs</a></li>');
document.write('            </ul>');
document.write('          </li>');
document.write('          <li><a href="/materials">Materials</a></li>');
document.write('          <li>');
document.write('          <a href="javascript:void(0)" class="desktop-hide">Technical</a>');
document.write('          <a href="//technical/" class="mobile-hide">Technical</a>');
document.write('            <ul class="dropdown">');
document.write('              <li class="desktop-hide"><a href="//technical/">Overview</a></li>');
document.write('<li><a href="//standards/">Standards</a></li>');
document.write('<li><a href="//specifications/">Specifications</a></li>');
document.write('<li><a href="//threads/">Threads</a></li>');
document.write('<li><a href="//weights/">Weights</a></li>');
document.write('<li><a href="//applications/">Applications</a></li>');
document.write('            </ul>');
document.write('          </li>');
document.write('          <li class="desktop-hide"><a href="//datasheets/">Datasheets</a></li>');
document.write('          <li class="desktop-hide"><a href="/faqs/faqs/index.html">FAQ&rsquo;s</a></li>');
document.write('          <li class="desktop-hide"><a href="//blog/">Blog</a></li>');
document.write('          <li><a href="//contact/">Contact</a></li>');
          
document.write('        </ul>');
document.write('      </div>');
document.write('      <div class="nav-bg-fostrap">');
document.write('        <div class="navbar-fostrap"> <span></span> <span></span> <span></span> </div>');
document.write('      </div>');
document.write('    </nav>');
document.write('      </div>');
document.write('   </div>');
