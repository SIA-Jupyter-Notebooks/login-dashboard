import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatListModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DatabaseComponent } from "./database/database.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import {
  ConnectModule,
  ConnectConfig,
  AuthModule,
  DatabaseModule,
  UploaderModule
} from "./connect";


const config: ConnectConfig = {
  appname: "sia-2715",
  firebase: {
    apiKey: "AIzaSyClRrA1ELQCkeggMg8VFomCTn-sDFHh9NE",
    authDomain: "sia-2715.firebaseapp.com",
    databaseURL: "https://sia-2715.firebaseio.com",
    projectId: "sia-2715",
    storageBucket: "sia-2715.appspot.com",
    messagingSenderId: "55300333865",
    appId: "1:55300333865:web:c6c5cfc9c7599ff43c9738",measurementId: "G-5T9L8ESP6K"
  }
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatListModule,

    // Initialize the connect module
    ConnectModule.init(config),
    AuthModule,
    DatabaseModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    DatabaseComponent
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {}
