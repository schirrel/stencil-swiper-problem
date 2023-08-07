import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { register } from 'swiper/element/bundle';
register();

import 'swiper/element/css/autoplay'
import 'swiper/swiper-bundle.css'

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}
    
    <swiper-container
    slides-per-view="3"
    grid-rows="3"
    mousewheel-force-to-axis="true"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper-container>
    </div>;
  }
}
