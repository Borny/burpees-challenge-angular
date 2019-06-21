import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ModalComponent } from './modal/modal.component';
import { CardApi, SDKModels, LoopBackAuth, InternalStorage } from 'sdk';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SocketConnection } from 'sdk/sockets/socket.connections';
import { SocketDriver } from 'sdk/sockets/socket.driver';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CardComponent,
    ProgressBarComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    CardApi,
    HttpClient,
    SocketConnection,
    SocketDriver,
    SDKModels,
    LoopBackAuth,
    InternalStorage,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
