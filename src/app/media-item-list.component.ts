import { Component, OnInit } from '@angular/core';
import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit{
  mediaItems;

  constructor(private mediaItemSevice:MediaItemService){}

  ngOnInit(){
    this.mediaItems = this.mediaItemSevice.get();
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemSevice.delete(mediaItem);
   }
}
