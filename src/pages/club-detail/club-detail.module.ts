import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClubDetailPage } from './club-detail';

@NgModule({
  declarations: [
    ClubDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ClubDetailPage),
  ],
})
export class ClubDetailPageModule {}
