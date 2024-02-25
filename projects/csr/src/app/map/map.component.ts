import { Component, inject } from '@angular/core';
import { Deck } from '@deck.gl/core/typed';
import { ClipExtension } from '@deck.gl/extensions/typed';
import * as WeatherLayers from 'weatherlayers-gl';
import $ from 'jquery';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  url = '';
  text: SafeHtml = 'Something';
  sanitizer: DomSanitizer = inject(DomSanitizer);

  ngOnit(){
    this.changeColor()
  }

  async loadMap() {
    const image = await WeatherLayers.loadTextureData(this.url);

    const deckgl = new Deck({
      layers: [
        new WeatherLayers.RasterLayer({
          id: 'raster',
          // data properties
          image: image,
          bounds: [-180, -90, 180, 90],
          // style properties
          palette: [
            [0, [255, 255, 255]],
            [5, [127, 255, 255]],
            [10, [127, 255, 127]],
            [15, [255, 255, 127]],
            [20, [255, 127, 127]],
            [25, [127, 0, 0]],
          ],
          extensions: [new ClipExtension()],
          clipBounds: [-181, -85.051129, 181, 85.051129],
        }),
      ],
    });

    return deckgl;
  }

  changeColor(color: string = 'yellow') {
    this.text = this.sanitizer.bypassSecurityTrustHtml(
      `<p id="change">We did it!!</p>`
    );
    $('#change').css('color', 'red');
  }
}
