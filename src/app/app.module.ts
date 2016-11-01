import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage }  from "@ionic/storage";

import { UCFirst } from "../pipes/uc-first";

import { MyApp } from './app.component';
import { HymnDetail, HymnView, NewHymnal, OldHymnal } from '../pages/hymnal';
import { NumberSearch }  from "../pages/number-search/number-search";
import { Favorites } from '../pages/favorites/favorites';
import { FeedbackPage } from '../pages/feedback/feedback';
import { DonationPage } from '../pages/donation/donation';
import { ContactUs } from '../pages/contact-us/contact-us';
import { TabsPage, TabHeaderComponent } from '../pages/tabs';
import { HymnalReader, HymnalFaves }  from "../providers";

@NgModule({
  declarations: [
    MyApp,
    HymnDetail,
    HymnView,
    NewHymnal,
    OldHymnal,
    NumberSearch,
    Favorites,
    FeedbackPage,
    DonationPage,
    ContactUs,
    TabsPage,
    TabHeaderComponent,
    UCFirst
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HymnDetail,
    HymnView,
    NewHymnal,
    OldHymnal,
    NumberSearch,
    Favorites,
    FeedbackPage,
    DonationPage,
    ContactUs,
    TabsPage,
    TabHeaderComponent
  ],
  providers: [HymnalReader, HymnalFaves, Storage]
})
export class AppModule {}
