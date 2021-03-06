/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './users.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './users.service';
import * as import9 from '../shared/services/session-storage.service';
import * as import10 from '../flash-message/flash-messages.service';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '@angular/common/src/directives/ng_if';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/common/src/directives/ng_for';
import * as import16 from '../shared/pipes/order-by.pipe';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/router/src/directives/router_link';
import * as import19 from '@angular/router/src/router';
import * as import20 from '@angular/router/src/router_state';
import * as import21 from '@angular/common/src/location/location_strategy';
var renderType_UsersComponent_Host = null;
var _View_UsersComponent_Host0 = (function (_super) {
    __extends(_View_UsersComponent_Host0, _super);
    function _View_UsersComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_UsersComponent_Host0, renderType_UsersComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_UsersComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-users', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_UsersComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._UsersComponent_0_4 = new import3.UsersComponent(this.parentInjector.get(import8.UsersService), this.parentInjector.get(import9.SessionStorageService), this.parentInjector.get(import10.FlashMessageService));
        this._appEl_0.initComponent(this._UsersComponent_0_4, [], compView_0);
        compView_0.create(this._UsersComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_UsersComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.UsersComponent) && (0 === requestNodeIndex))) {
            return this._UsersComponent_0_4;
        }
        return notFoundResult;
    };
    _View_UsersComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._UsersComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_UsersComponent_Host0;
}(import1.AppView));
function viewFactory_UsersComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_UsersComponent_Host === null)) {
        (renderType_UsersComponent_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_UsersComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var UsersComponentNgFactory = new import12.ComponentFactory('app-users', viewFactory_UsersComponent_Host0, import3.UsersComponent);
var styles_UsersComponent = [];
var renderType_UsersComponent = null;
var _View_UsersComponent0 = (function (_super) {
    __extends(_View_UsersComponent0, _super);
    function _View_UsersComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_UsersComponent0, renderType_UsersComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_UsersComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'data-target', '#deleteUser');
        this.renderer.setElementAttribute(this._el_0, 'data-toggle', 'modal');
        this.renderer.setElementAttribute(this._el_0, 'id', 'openModalDelete');
        this._text_1 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_2 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'aria-hidden', 'true');
        this.renderer.setElementAttribute(this._el_2, 'class', 'modal fade');
        this.renderer.setElementAttribute(this._el_2, 'id', 'deleteUser');
        this.renderer.setElementAttribute(this._el_2, 'role', 'dialog');
        this.renderer.setElementAttribute(this._el_2, 'tabindex', '-1');
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'modal-dialog');
        this.renderer.setElementAttribute(this._el_4, 'role', 'document');
        this._text_5 = this.renderer.createText(this._el_4, '\n        ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'div', null);
        this.renderer.setElementAttribute(this._el_6, 'class', 'modal-content');
        this._text_7 = this.renderer.createText(this._el_6, '\n            ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_8, 'class', 'modal-body');
        this.renderer.setElementAttribute(this._el_8, 'style', 'text-align: center; padding: 5% 0 5% 0');
        this._text_9 = this.renderer.createText(this._el_8, '\n                Are you sure you want to delete this user?\n            ', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n            ', null);
        this._el_11 = this.renderer.createElement(this._el_6, 'div', null);
        this.renderer.setElementAttribute(this._el_11, 'class', 'modal-footer');
        this._text_12 = this.renderer.createText(this._el_11, '\n                ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'btn btn-primary');
        this.renderer.setElementAttribute(this._el_13, 'data-dismiss', 'modal');
        this.renderer.setElementAttribute(this._el_13, 'type', 'button');
        this._text_14 = this.renderer.createText(this._el_13, 'OK', null);
        this._text_15 = this.renderer.createText(this._el_11, '\n                ', null);
        this._el_16 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_16, 'class', 'btn btn-default');
        this.renderer.setElementAttribute(this._el_16, 'data-dismiss', 'modal');
        this.renderer.setElementAttribute(this._el_16, 'type', 'button');
        this._text_17 = this.renderer.createText(this._el_16, 'Close', null);
        this._text_18 = this.renderer.createText(this._el_11, '\n            ', null);
        this._text_19 = this.renderer.createText(this._el_6, '\n        ', null);
        this._text_20 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_21 = this.renderer.createText(this._el_2, '\n', null);
        this._text_22 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_23 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_23, 'class', 'col-xs-12');
        this.renderer.setElementAttribute(this._el_23, 'style', 'margin-top: 3%');
        this._text_24 = this.renderer.createText(this._el_23, '\n    ', null);
        this._el_25 = this.renderer.createElement(this._el_23, 'div', null);
        this._text_26 = this.renderer.createText(this._el_25, '\n        ', null);
        this._el_27 = this.renderer.createElement(this._el_25, 'button', null);
        this.renderer.setElementAttribute(this._el_27, 'class', 'btn btn-primary btn-xs');
        this.renderer.setElementAttribute(this._el_27, 'type', 'button');
        this._text_28 = this.renderer.createText(this._el_27, '\n        ', null);
        this._el_29 = this.renderer.createElement(this._el_27, 'span', null);
        this.renderer.setElementAttribute(this._el_29, 'class', 'glyphicon glyphicon-file');
        this._text_30 = this.renderer.createText(this._el_27, '??Download as CSV\n        ', null);
        this._text_31 = this.renderer.createText(this._el_25, '\n    ', null);
        this._text_32 = this.renderer.createText(this._el_23, '\n    ', null);
        this._anchor_33 = this.renderer.createTemplateAnchor(this._el_23, null);
        this._appEl_33 = new import2.AppElement(33, 23, this, this._anchor_33);
        this._TemplateRef_33_5 = new import14.TemplateRef_(this._appEl_33, viewFactory_UsersComponent1);
        this._NgIf_33_6 = new import13.NgIf(this._appEl_33.vcRef, this._TemplateRef_33_5);
        this._text_34 = this.renderer.createText(this._el_23, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_13, 'click', this.eventHandler(this._handle_click_13_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_27, 'click', this.eventHandler(this._handle_click_27_0.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._anchor_33,
            this._text_34
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_UsersComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (33 === requestNodeIndex))) {
            return this._TemplateRef_33_5;
        }
        if (((token === import13.NgIf) && (33 === requestNodeIndex))) {
            return this._NgIf_33_6;
        }
        return notFoundResult;
    };
    _View_UsersComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3 = this.context.users;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._NgIf_33_6.ngIf = currVal_3;
            this._expr_3 = currVal_3;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = true;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_0, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_UsersComponent0.prototype._handle_click_13_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.onOk() !== false);
        return (true && pd_0);
    };
    _View_UsersComponent0.prototype._handle_click_27_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.onImportIntoCsvFile() !== false);
        return (true && pd_0);
    };
    return _View_UsersComponent0;
}(import1.AppView));
export function viewFactory_UsersComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_UsersComponent === null)) {
        (renderType_UsersComponent = viewUtils.createRenderComponentType('C:/Users/Silvia/OneDrive/Bc/web-competition/assets/app/users/users.component.html', 0, import11.ViewEncapsulation.None, styles_UsersComponent, {}));
    }
    return new _View_UsersComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_UsersComponent1 = (function (_super) {
    __extends(_View_UsersComponent1, _super);
    function _View_UsersComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_UsersComponent1, renderType_UsersComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_UsersComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'table-responsive');
        this._text_3 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'table', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'table');
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'thead', null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_8 = this.renderer.createElement(this._el_6, 'tr', null);
        this._text_9 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_10 = this.renderer.createElement(this._el_8, 'th', null);
        this._text_11 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_12 = this.renderer.createElement(this._el_8, 'th', null);
        this._text_13 = this.renderer.createText(this._el_12, 'First name', null);
        this._text_14 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_15 = this.renderer.createElement(this._el_8, 'th', null);
        this._text_16 = this.renderer.createText(this._el_15, 'Last name', null);
        this._text_17 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_18 = this.renderer.createElement(this._el_8, 'th', null);
        this._text_19 = this.renderer.createText(this._el_18, 'Email address', null);
        this._text_20 = this.renderer.createText(this._el_8, '\n                    ', null);
        this._el_21 = this.renderer.createElement(this._el_8, 'th', null);
        this._text_22 = this.renderer.createText(this._el_21, 'Role', null);
        this._text_23 = this.renderer.createText(this._el_8, '\n                ', null);
        this._text_24 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_25 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_26 = this.renderer.createElement(this._el_4, 'tbody', null);
        this._text_27 = this.renderer.createText(this._el_26, '\n                ', null);
        this._anchor_28 = this.renderer.createTemplateAnchor(this._el_26, null);
        this._appEl_28 = new import2.AppElement(28, 26, this, this._anchor_28);
        this._TemplateRef_28_5 = new import14.TemplateRef_(this._appEl_28, viewFactory_UsersComponent2);
        this._NgFor_28_6 = new import15.NgFor(this._appEl_28.vcRef, this._TemplateRef_28_5, this.parent.parentInjector.get(import17.IterableDiffers), this.parent.ref);
        this._text_29 = this.renderer.createText(this._el_26, '\n            ', null);
        this._text_30 = this.renderer.createText(this._el_4, '\n            ', null);
        this._text_31 = this.renderer.createText(this._el_2, '\n        ', null);
        this._text_32 = this.renderer.createText(this._el_0, '\n    ', null);
        this._arr_0 = import4.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        this._pipe_orderBy_0 = new import16.OrderByPipe();
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._anchor_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._text_32
        ], [], []);
        return null;
    };
    _View_UsersComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === import15.NgFor) && (28 === requestNodeIndex))) {
            return this._NgFor_28_6;
        }
        return notFoundResult;
    };
    _View_UsersComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        var valUnwrapper = new import7.ValueUnwrapper();
        changes = null;
        valUnwrapper.reset();
        var currVal_0 = valUnwrapper.unwrap(this._pipe_orderBy_0.transform(this.parent.context.users, this._arr_0('lastName', 'firstName')));
        if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange, this._expr_0, currVal_0))) {
            this._NgFor_28_6.ngForOf = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._NgFor_28_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_28_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_UsersComponent1;
}(import1.AppView));
function viewFactory_UsersComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_UsersComponent1(viewUtils, parentInjector, declarationEl);
}
var _View_UsersComponent2 = (function (_super) {
    __extends(_View_UsersComponent2, _super);
    function _View_UsersComponent2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_UsersComponent2, renderType_UsersComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_UsersComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'tr', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'td', null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'td', null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_8 = this.renderer.createElement(this._el_0, 'td', null);
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_11 = this.renderer.createElement(this._el_0, 'td', null);
        this._text_12 = this.renderer.createText(this._el_11, '', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_14 = this.renderer.createElement(this._el_0, 'td', null);
        this._text_15 = this.renderer.createText(this._el_14, '', null);
        this._text_16 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._anchor_17 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_17 = new import2.AppElement(17, 0, this, this._anchor_17);
        this._TemplateRef_17_5 = new import14.TemplateRef_(this._appEl_17, viewFactory_UsersComponent3);
        this._NgIf_17_6 = new import13.NgIf(this._appEl_17.vcRef, this._TemplateRef_17_5);
        this._text_18 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_19 = new import2.AppElement(19, 0, this, this._anchor_19);
        this._TemplateRef_19_5 = new import14.TemplateRef_(this._appEl_19, viewFactory_UsersComponent4);
        this._NgIf_19_6 = new import13.NgIf(this._appEl_19.vcRef, this._TemplateRef_19_5);
        this._text_20 = this.renderer.createText(this._el_0, '\n                ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._anchor_17,
            this._text_18,
            this._anchor_19,
            this._text_20
        ], [], []);
        return null;
    };
    _View_UsersComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (17 === requestNodeIndex))) {
            return this._TemplateRef_17_5;
        }
        if (((token === import13.NgIf) && (17 === requestNodeIndex))) {
            return this._NgIf_17_6;
        }
        if (((token === import14.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import13.NgIf) && (19 === requestNodeIndex))) {
            return this._NgIf_19_6;
        }
        return notFoundResult;
    };
    _View_UsersComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5 = !this.parent.parent.context.isMe(this.context.$implicit);
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this._NgIf_17_6.ngIf = currVal_5;
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this.parent.parent.context.isMe(this.context.$implicit);
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._NgIf_19_6.ngIf = currVal_6;
            this._expr_6 = currVal_6;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', (this.context.index + 1), ' ');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_3, currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = import4.interpolate(1, '', this.context.$implicit.firstName, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_6, currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.lastName, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_9, currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = import4.interpolate(1, '', this.context.$implicit.email, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_12, currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = import4.interpolate(1, '', this.context.$implicit.role, '');
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_15, currVal_4);
            this._expr_4 = currVal_4;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_UsersComponent2;
}(import1.AppView));
function viewFactory_UsersComponent2(viewUtils, parentInjector, declarationEl) {
    return new _View_UsersComponent2(viewUtils, parentInjector, declarationEl);
}
var _View_UsersComponent3 = (function (_super) {
    __extends(_View_UsersComponent3, _super);
    function _View_UsersComponent3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_UsersComponent3, renderType_UsersComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_UsersComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'td', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'btn-group');
        this.renderer.setElementAttribute(this._el_0, 'style', 'vertical-align: middle; border: none;');
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'button', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'btn btn-info btn-xs');
        this.renderer.setElementAttribute(this._el_2, 'title', 'Edit profile');
        this._RouterLink_2_3 = new import18.RouterLink(this.parent.parent.parent.parentInjector.get(import19.Router), this.parent.parent.parent.parentInjector.get(import20.ActivatedRoute), this.parent.parent.parent.parentInjector.get(import21.LocationStrategy));
        this._text_3 = this.renderer.createText(this._el_2, '\n                            ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'span', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'glyphicon glyphicon-pencil');
        this._text_5 = this.renderer.createText(this._el_2, '??Profile\n                        ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_7 = this.renderer.createElement(this._el_0, 'button', null);
        this.renderer.setElementAttribute(this._el_7, 'class', 'btn btn-primary btn-xs');
        this.renderer.setElementAttribute(this._el_7, 'title', 'Change password');
        this._RouterLink_7_3 = new import18.RouterLink(this.parent.parent.parent.parentInjector.get(import19.Router), this.parent.parent.parent.parentInjector.get(import20.ActivatedRoute), this.parent.parent.parent.parentInjector.get(import21.LocationStrategy));
        this._text_8 = this.renderer.createText(this._el_7, '\n                            ', null);
        this._el_9 = this.renderer.createElement(this._el_7, 'span', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'glyphicon glyphicon-pencil');
        this._text_10 = this.renderer.createText(this._el_7, '??Password\n                        ', null);
        this._text_11 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_12 = this.renderer.createElement(this._el_0, 'button', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'btn btn-danger btn-xs');
        this.renderer.setElementAttribute(this._el_12, 'title', 'Delete');
        this._text_13 = this.renderer.createText(this._el_12, '\n                            ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'span', null);
        this.renderer.setElementAttribute(this._el_14, 'class', 'glyphicon glyphicon-trash');
        this._text_15 = this.renderer.createText(this._el_14, '??User', null);
        this._text_16 = this.renderer.createText(this._el_12, '\n                        ', null);
        this._text_17 = this.renderer.createText(this._el_0, '\n                    ', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        this._arr_0 = import4.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_7, 'click', this.eventHandler(this._handle_click_7_0.bind(this)));
        this._arr_1 = import4.pureProxy2(function (p0, p1) {
            return [
                p0,
                p1
            ];
        });
        this._expr_3 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_12, 'click', this.eventHandler(this._handle_click_12_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._text_17
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], []);
        return null;
    };
    _View_UsersComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.RouterLink) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._RouterLink_2_3;
        }
        if (((token === import18.RouterLink) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._RouterLink_7_3;
        }
        return notFoundResult;
    };
    _View_UsersComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this._arr_0('/users/edit', this.parent.context.$implicit.userId);
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._RouterLink_2_3.routerLink = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_3 = this._arr_1('/users/editpass', this.parent.context.$implicit.userId);
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._RouterLink_7_3.routerLink = currVal_3;
            this._expr_3 = currVal_3;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_UsersComponent3.prototype._handle_click_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLink_2_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    _View_UsersComponent3.prototype._handle_click_7_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLink_7_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    _View_UsersComponent3.prototype._handle_click_12_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.parent.parent.context.onDelete(this.parent.context.$implicit) !== false);
        return (true && pd_0);
    };
    return _View_UsersComponent3;
}(import1.AppView));
function viewFactory_UsersComponent3(viewUtils, parentInjector, declarationEl) {
    return new _View_UsersComponent3(viewUtils, parentInjector, declarationEl);
}
var _View_UsersComponent4 = (function (_super) {
    __extends(_View_UsersComponent4, _super);
    function _View_UsersComponent4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_UsersComponent4, renderType_UsersComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_UsersComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'td', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'btn-group');
        this.renderer.setElementAttribute(this._el_0, 'style', 'vertical-align: middle; border: none;');
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'button', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'btn btn-info btn-xs');
        this.renderer.setElementAttribute(this._el_2, 'title', 'Edit profile');
        this._RouterLink_2_3 = new import18.RouterLink(this.parent.parent.parent.parentInjector.get(import19.Router), this.parent.parent.parent.parentInjector.get(import20.ActivatedRoute), this.parent.parent.parent.parentInjector.get(import21.LocationStrategy));
        this._text_3 = this.renderer.createText(this._el_2, '\n                            ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'span', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'glyphicon glyphicon-pencil');
        this._text_5 = this.renderer.createText(this._el_2, '??Profile\n                        ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_7 = this.renderer.createElement(this._el_0, 'button', null);
        this.renderer.setElementAttribute(this._el_7, 'class', 'btn btn-primary btn-xs');
        this.renderer.setElementAttribute(this._el_7, 'title', 'Change password');
        this._RouterLink_7_3 = new import18.RouterLink(this.parent.parent.parent.parentInjector.get(import19.Router), this.parent.parent.parent.parentInjector.get(import20.ActivatedRoute), this.parent.parent.parent.parentInjector.get(import21.LocationStrategy));
        this._text_8 = this.renderer.createText(this._el_7, '\n                            ', null);
        this._el_9 = this.renderer.createElement(this._el_7, 'span', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'glyphicon glyphicon-pencil');
        this._text_10 = this.renderer.createText(this._el_7, '??Password\n                        ', null);
        this._text_11 = this.renderer.createText(this._el_0, '\n                    ', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        this._arr_0 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_7, 'click', this.eventHandler(this._handle_click_7_0.bind(this)));
        this._arr_1 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._expr_3 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_UsersComponent4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.RouterLink) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._RouterLink_2_3;
        }
        if (((token === import18.RouterLink) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._RouterLink_7_3;
        }
        return notFoundResult;
    };
    _View_UsersComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this._arr_0('/profile/edit');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._RouterLink_2_3.routerLink = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_3 = this._arr_1('/profile/editpass');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._RouterLink_7_3.routerLink = currVal_3;
            this._expr_3 = currVal_3;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_UsersComponent4.prototype._handle_click_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLink_2_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    _View_UsersComponent4.prototype._handle_click_7_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._RouterLink_7_3.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_0);
    };
    return _View_UsersComponent4;
}(import1.AppView));
function viewFactory_UsersComponent4(viewUtils, parentInjector, declarationEl) {
    return new _View_UsersComponent4(viewUtils, parentInjector, declarationEl);
}
