import { NgModule } from '@angular/core';
import { OpenviduSessionComponent } from './openvidu-angular.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';

// Components
import { VideoRoomComponent } from './video-room/video-room.component';
import { StreamComponent } from './shared/components/stream/stream.component';
import { ChatComponent } from './shared/components/chat/chat.component';
import { DialogExtensionComponent } from './shared/components/dialog-extension/dialog-extension.component';
import { OpenViduVideoComponent } from './shared/components/stream/ov-video.component';
import { DialogErrorComponent } from './shared/components/dialog-error/dialog-error.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { OpenViduService } from './shared/services/openvidu.service';
import { ApiService } from './shared/services/api.service';
import { LinkifyPipe } from './shared/pipes/linkfy';
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';
import { DialogChooseRoomComponent } from './shared/components/dialog-choose-room/dialog-choose-room.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTooltipModule,
    MatBadgeModule,
    MatGridListModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSidenavModule,
    AppRoutingModule,
    MatChipsModule,
    NgxLinkifyjsModule.forRoot()
  ],
  declarations: [
    OpenviduSessionComponent,
    VideoRoomComponent,
    StreamComponent,
    ChatComponent,
    DialogExtensionComponent,
    OpenViduVideoComponent,
    DialogErrorComponent,
    DialogChooseRoomComponent,
    ToolbarComponent,
    LinkifyPipe
  ],
  entryComponents: [
    DialogErrorComponent,
  ],
  providers: [OpenViduService, ApiService],
  exports: [OpenviduSessionComponent],
})
export class OpenviduSessionModule {}
