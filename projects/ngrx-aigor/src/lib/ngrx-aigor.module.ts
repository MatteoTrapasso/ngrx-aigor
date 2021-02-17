import {NgModule} from '@angular/core';
import {NgrxAigorComponent} from './ngrx-aigor.component';
import {NgrxAigorService} from './ngrx-aigor.service';
import {OrderListModule} from 'primeng/orderlist';
import {CommonModule} from '@angular/common';
import {ListboxModule} from 'primeng/listbox';
import {FormsModule} from '@angular/forms';
import {MonacoEditorModule} from 'ngx-monaco-editor';
import {ButtonModule} from 'primeng/button';
import {SplitterModule} from 'primeng/splitter';
import {NgLetModule} from './utils/ng-let.directive';
import {StateDiffComponent} from './components/state-diff/state-diff.component';
import {CheckboxModule} from 'primeng/checkbox';
import {StateViewComponent} from './components/state-view/state-view.component';
import {TabViewModule} from 'primeng/tabview';
import { ActionViewComponent } from './components/action-view/action-view.component';

@NgModule({
  declarations: [NgrxAigorComponent, StateDiffComponent, StateViewComponent, ActionViewComponent],
  imports: [
    OrderListModule,
    CommonModule,
    ListboxModule,
    FormsModule,
    MonacoEditorModule,
    ButtonModule,
    SplitterModule,
    NgLetModule,
    CheckboxModule,
    TabViewModule
  ],
  exports: [NgrxAigorComponent],
  providers: [NgrxAigorService]
})
export class NgrxAigorModule {
}
