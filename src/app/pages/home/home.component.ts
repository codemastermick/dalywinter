import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor( private titleService: Title, private metaTagService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Daly Winter & Associates LLP: Affordable legal access');
// tslint:disable-next-line: max-line-length
    this.metaTagService.updateTag({ name: 'description', content: 'Daly Winter & Associates LLP: legal access for everyone at affordable prices using our unique approach' });
    this.metaTagService.updateTag({ name: 'author', content: 'Daly Winter & Associates LLP' });
    this.metaTagService.updateTag({ name: 'robots', content: 'index, follow' });
  }

}
