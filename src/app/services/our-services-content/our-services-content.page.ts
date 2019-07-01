import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';


interface OurServicesContents {
  id: string,	
  serviceicon: string,
  servicename: string,
  bg: string,
  content: string
}

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-our-services-content',
  templateUrl: './our-services-content.page.html',
  styleUrls: ['./our-services-content.page.scss'],
})


export class OurServicesContentPage implements OnInit {

	public ourservicescontents: OurServicesContents[] = [];


  constructor() { 

  	// Set some test todos
    this.ourservicescontents = [
      { id: '1', serviceicon: 'fa-globe', servicename: 'Web Desigining', bg: 'assets/images/webdesign-service-bg.jpg', content: '<p><em>We bring the best work for you!</em></p><p>We create websites that help you to be a successful business owner. Better to explain, we make your online establishment. Most customers are likely to have a user-friendly and customized website which is easy to operate as well as perform various functionalities. Fortress Technologies is one of the best website designing company in India that delivers creative designing services by an efficient team of web professionals who not only makes your site looks good online but also ensures  growth of your business. The design and development processes of our company have been optimized, tweaked and improved over the years and thus, it successfully renders web designing services to more than 1000 clients across the globe.  We always take active interest to understand our clients’ business, their target markets, and competitors so that every element we design helps them achieving their marketing goals.</p><p>As a leading web designing company in India, we work on various online design strategies that help them fulfilling their business needs from branding to development. In fact, with us, you can experience cross domain expertise and technology competence. We follow modern website design trends and elements such as large and unique typography, responsive images, background videos, semi-flat design, giant product images and many more.</p>'},

      { id: '2', serviceicon: 'fa-code', servicename: 'Web Application', bg: 'assets/images/webapplication-service-bg.jpg', content: '<p><em>We strive to develop the best websites!</em></p><p>Fortress Technologies is one of the few companies in INDIA, specialized in providing TYPO3 open source solutions to small, medium and large enterprises. Our expert development team also works on other development platforms such as CMS website development, WordPress development and Custom application development. Our professionals have many years of technical expertise and knowledge to offer progressive end-to-end solutions to websites.</p><p>We, at Fortress Technologies, always strive hard to address a variety of business requirements by rendering CMS integration with a standalone web based applications.</p>'},

      { id: '3', serviceicon: 'fa-shopping-cart', servicename: 'Ecommerce Application', bg: 'assets/images/ecom-service-bg.jpg', content: '<p>At Fortress Technologies, you will get customized e-commerce solutions to boost your business. We understand the growing popularity of online purchase and this is the one and only reason that makes it essential for every business to ensure round the clock presence for their prospects. Right from shopping cart integration, product catalog management to customized search fields, our e-commerce design and development solutions encompass each and every thing to boost online business. Our expert ecommerce developers work on the following platforms—</p><ul><li>Magento</li><li>OScommerce</li><li>Opencart</li></ul><p>Our e-commerce web development team offers business specific solutions understanding the requirements of clients. We create an online store with attractive features that compliment your niche or target customers. We have already worked on hundreds of e-commerce projects and know well what it actually takes to generate sales.</p>'},

      { id: '4', serviceicon: 'fa-mobile-phone', servicename: 'Mobile Application', bg: 'assets/images/mobileapplication-service-bg.jpg', content: '<p><em>Jazz up users experience with custom mobile applications!</em></p><p>The growing use of Smartphones and tablets has replaced the use of conventional phones and personal computers. With the rise of various mobile applications, several business enterprises have witnessed an immediate increase in sales due to the implementation of mobile apps. To put in simple words, mobile apps have empowered businesses to control their annual sales figure.</p><p>Mobile applications allow businesses to convey viable information to potential customers, regarding their products and services, anywhere and at any time via apps. With mobile applications, businesses can establish their brands and target prospective customers.</p><p>At Fortress6 Technologies, we have an efficient team of mobile application developers who cater to the varying needs of businesses and connect you with your target customers. We provide end-to-end mobile apps solutions following different frameworks such as jQuery Mobile, PhoneGap, Ionic, Sencha Touch, jQT etc.  We ensure the highest technical standard along with usability and functionality of the app we develop. We maintain a flexible business model that helps choosing the most viable development solution for your business.</p>'}
    ];

  }


  getTodo(id): OurServicesContents {
    return this.ourservicescontents.find(ourservicescontent => ourservicescontent.id === id);
  }

  ngOnInit() {
  }

}
