import { Component } from '@angular/core';
// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent implements OnInit {
export class AppComponent {
  title = 'Rate My Meeting Room';

  // ngOnInit() {
  //   const defTop = document.getElementById('def-top');
  //   defTop.outerHTML = wet.builder.appTop({
  //     cdnEnv: 'dev',
  //     appName: [{text: 'Rate My Meeting Room', href: '#'}],
  //     lngLinks: [{lang: 'fr',	href: 'apptop_custommenu-fr.shtml', text: 'Français'}],
  //     breadcrumbs: [{
  //       title: 'My application',
  //       href: '/home'
  //     }, {
  //       title: 'Home',
  //       href: '#'
  //     }, {
  //       title: 'Review'
  //     }],
  //     menuPath: '/assets/html/custommenu-eng.html'
  //   });
  // }
}
