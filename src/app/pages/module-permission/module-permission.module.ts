import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulePermissionRoutingModule } from './module-permission-routing.module';
import { ModuleComponent } from './module/module.component';
import { ActionComponent } from './action/action.component';
import { ModulePermissionComponent } from './module-permission/module-permission.component';


@NgModule({
  declarations: [
    ModuleComponent,
    ActionComponent,
    ModulePermissionComponent
  ],
  imports: [
    CommonModule,
    ModulePermissionRoutingModule
  ]
})
export class ModulePermissionModule { }
