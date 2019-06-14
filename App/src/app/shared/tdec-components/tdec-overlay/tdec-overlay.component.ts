import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../../services/overlay.service';

@Component({
  selector: 'tdec-overlay',
  templateUrl: './tdec-overlay.component.html',
  styleUrls: ['./tdec-overlay.component.scss']
})
export class TdecOverlayComponent implements OnInit {
  public loadingToggle: boolean;
  public modalToggle: boolean;

  constructor(private overlayService: OverlayService) {}

  ngOnInit() {
    this.overlayService.loadingToggle.subscribe(toggle => {
      this.loadingToggle = toggle;
    });
    this.overlayService.modalToggle.subscribe(toggle => {
      this.modalToggle = toggle;
    });
  }
}
