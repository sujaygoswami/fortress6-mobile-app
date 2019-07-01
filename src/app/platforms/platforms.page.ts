import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { PlatformDetailPage } from '../platform-detail/platform-detail.page';



@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.page.html',
  styleUrls: ['./platforms.page.scss'],
})
export class PlatformsPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }


  platforms:any[] = [
  	{
      icon: "assets/icon/html5-128_01.png",
      text: "HTML5",
      excerpt: "<p>HTML5 is the latest evolution of the standard that defines HTML. The term represents two different concepts. It is a new version of the language HTML, with new elements, attributes, and behaviors, and a larger set of technologies that allows the building of more diverse and powerful Web sites and applications. This set is sometimes called HTML5 & friends and often shortened to just HTML5.</p><p>Designed to be usable by all Open Web developers, this reference page links to numerous resources about HTML5 technologies, classified into several groups based on their function.</p>",
    },
    {
      icon: "assets/icon/node_js-128_01.png",
      text: "NodeJS",
      excerpt: "<p>Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.</p><p>Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.</p>"
    },
    {
      icon: "assets/icon/angularjs-128_01.png",
      text: "AngularJS",
      excerpt: "<p>AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.</p>"
    },
    {
      icon: "assets/icon/typo3-128_01.png",
      text: "TYPO3",
      excerpt: "<p>TYPO3 is a free and open-source Web content management system written in PHP. It is released under the GNU General Public License. It can run on several web servers, such as Apache or IIS, on top of many operating systems, among them Linux, Microsoft Windows, FreeBSD, macOS and OS/2.</p><p>TYPO3 is, along with Drupal, Joomla! and WordPress, among the most popular content management systems worldwide, however it is more widespread in Europe than in other regions. The biggest market share can be found in German-speaking countries.</p><p>TYPO3 is credited to be highly flexible, as code and content are operated separately. It can be extended by new functions without writing any program code. Also, the software is available in more than 50 languages and has a built-in localization system, therefore supports publishing content in multiple languages. Due to its features like editorial workplace and workflow, advanced frontend editing, scalability and maturity, TYPO3 is used to build and manage websites of different types and size ranges, from small sites for individuals or nonprofit organizations to multilingual enterprise solutions for large corporations. According to the ability to support a corporate environment, it classifies itself as an enterprise level content management system.</p>"
    },
    {
      icon: "assets/icon/php-128_01.png",
      text: "PHP",
      excerpt: "<p>PHP: Hypertext Preprocessor (or simply PHP) is a general-purpose programming language originally designed for web development. It was originally created by Rasmus Lerdorf in 1994;[6] the PHP reference implementation is now produced by The PHP Group.[7] PHP originally stood for Personal Home Page,[6] but it now stands for the recursive initialism PHP: Hypertext Preprocessor.[8]</p><p>PHP code may be executed with a command line interface (CLI), embedded into HTML code, or it can be used in combination with various web template systems, web content management systems, and web frameworks. PHP code is usually processed by a PHP interpreter implemented as a module in a web server or as a Common Gateway Interface (CGI) executable. The web server combines the results of the interpreted and executed PHP code, which may be any type of data, including images, with the generated web page. PHP can be used for many programming tasks outside of the web context, such as standalone graphical applications[9] and robotic drone control[10].</p><p>The standard PHP interpreter, powered by the Zend Engine, is free software released under the PHP License. PHP has been widely ported and can be deployed on most web servers on almost every operating system and platform, free of charge.[11]</p><p>The PHP language evolved without a written formal specification or standard until 2014, with the original implementation acting as the de facto standard which other implementations aimed to follow. Since 2014, work has gone on to create a formal PHP specification.</p>"
    },
    {
      icon: "assets/icon/my_sql-128_01.png",
      text: "My SQL",
      excerpt: "<p>MySQL is the world's most popular open source database. With its proven performance, reliability and ease-of-use, MySQL has become the leading database choice for web-based applications, used by high profile web properties including Facebook, Twitter, YouTube, Yahoo! and many more.</p><p>Oracle drives MySQL innovation, delivering new capabilities to power next generation web, cloud, mobile and embedded applications.</p>"
    },
    {
      icon: "assets/icon/Magento-128_01.png",
      text: "Magento",
      excerpt: "<p>Magento is an open-source e-commerce platform written in PHP. The software was originally developed by Varien, Inc, a US private company headquartered in Culver City, California, with assistance from volunteers.</p><p>Varien published the first general-availability release of the software on March 31, 2008. Roy Rubin, the former CEO of Varien, later sold a substantial share of the company to eBay, which eventually completely acquired and then sold the company to Permira;[2] Permira later sold it to Adobe.[3]</p><p>On November 17, 2015, Magento 2.0 was released. Among the features changed in V2 are the following: reduced table locking issues, improved page caching, enterprise-grade scalability, inbuilt rich snippets for structured data, new file structure with easier customization, CSS Preprocessing using LESS & CSS URL resolver, improved performance and a more structured code base. Magento employs the MySQL or MariaDB relational database management system, the PHP programming language, and elements of the Zend Framework.[4] It applies the conventions of object-oriented programming and model–view–controller architecture. Magento also uses the entity–attribute–value model to store data.[5] On top of that, Magento 2 introduced the Model-View-ViewModel pattern to its front-end code using the JavaScript library Knockout.js.</p>"
    },
    {
      icon: "assets/icon/WordPress-128_01.png",
      text: "Wordpress",
      excerpt: "<p>WordPress (WordPress.org) is a free and open-source content management system (CMS) based on PHP & MySQL.[4] Features include a plugin architecture and a template system. It is most associated with blogging but supports other types of web content including more traditional mailing lists and forums, media galleries, and online stores. Used by more than 60 million websites,[5] including 33.6% of the top 10 million websites as of April 2019,[6][7] WordPress is the most popular website management system in use.[8] WordPress has also been used for other application domains such as pervasive display systems (PDS).[9]</p><p>WordPress was released on May 27, 2003, by its founders, Matt Mullenweg[1] and Mike Little,[10][11] as a fork of b2/cafelog. The software is released under the GPLv2 (or later) license.[12]</p><p>To function, WordPress has to be installed on a web server, either part of an Internet hosting service like WordPress.com or a computer running the software package WordPress.org in order to serve as a network host in its own right.[13] A local computer may be used for single-user testing and learning purposes.</p>"
    }

  ];


  async openModal(platform) {
  const modal = await this.modalController.create({
    component: PlatformDetailPage,
    componentProps: { platform: platform }
  });
  return await modal.present();
  }




}















