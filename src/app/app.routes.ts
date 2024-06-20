import { Routes } from '@angular/router';
import {AuthComponent} from "./core/auth/auth.component";
import {ProfileComponent} from "./features/profile/components/profile/profile.component";
import {ChatComponent} from "./features/chat/pages/chat/chat.component";
import {SpotComponent} from "./features/spot/components/spot/spot.component";
import {MapComponent} from "./features/map/pages/map/map.component";


export const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
  },
  {
    path: "login",
    component: AuthComponent,
  },
  {
    path: "register",
    component: AuthComponent,
  },
  {
    path: "spot",
    component: SpotComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "chat",
    component: ChatComponent,
  },
  {
    path: "map",
    component: MapComponent,
  }
];
