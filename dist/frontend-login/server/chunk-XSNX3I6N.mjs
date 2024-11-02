import './polyfills.server.mjs';
import{A as j,B as v,C as Ie,D as C,E as Se,F as B,G as V,I as Ne,M as xe,P as w,Q as d,R as Oe,S as ue,U as Pe,V as ke,W as Re,X as Ge,Y as Te,Z as je,a as De,aa as Be,b as be,c as Me,d as Ae,e as k,ea as He,f as R,g as Fe,ga as H,h as G,ha as Ue,i as p,j as y,k as T,l as c,m as ne,n as Ee,o as F,p as re,q as oe,r as s,s as se,t as E,u as m,v as we,w as ae,x as le,y as g,z as _}from"./chunk-7C6JBFLL.mjs";import{a as l,b as u}from"./chunk-5XUXGTUW.mjs";var U=class i{title="frontend-login";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["app-root"]],standalone:!0,features:[V],decls:1,vars:0,template:function(t,n){t&1&&j(0,"router-outlet")},dependencies:[He]})};var Je=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(s(se),s(re))}}static{this.\u0275dir=c({type:i})}}return i})(),It=(()=>{class i extends Je{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Ee(i)))(r||i)}})()}static{this.\u0275dir=c({type:i,features:[m]})}}return i})(),Qe=new p("");var St={provide:Qe,useExisting:R(()=>J),multi:!0};function Nt(){let i=ue()?ue().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var xt=new p(""),J=(()=>{class i extends Je{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Nt())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(s(se),s(re),s(xt,8))}}static{this.\u0275dir=c({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&v("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},features:[B([St]),m]})}}return i})();function h(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function et(i){return i!=null&&typeof i.length=="number"}var tt=new p(""),it=new p(""),Ot=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,O=class{static min(e){return Pt(e)}static max(e){return kt(e)}static required(e){return Rt(e)}static requiredTrue(e){return Gt(e)}static email(e){return Tt(e)}static minLength(e){return jt(e)}static maxLength(e){return Bt(e)}static pattern(e){return Ht(e)}static nullValidator(e){return nt(e)}static compose(e){return ut(e)}static composeAsync(e){return dt(e)}};function Pt(i){return e=>{if(h(e.value)||h(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<i?{min:{min:i,actual:e.value}}:null}}function kt(i){return e=>{if(h(e.value)||h(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>i?{max:{max:i,actual:e.value}}:null}}function Rt(i){return h(i.value)?{required:!0}:null}function Gt(i){return i.value===!0?null:{required:!0}}function Tt(i){return h(i.value)||Ot.test(i.value)?null:{email:!0}}function jt(i){return e=>h(e.value)||!et(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function Bt(i){return e=>et(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function Ht(i){if(!i)return nt;let e,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=i.toString(),e=i),n=>{if(h(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function nt(i){return null}function rt(i){return i!=null}function ot(i){return Ne(i)?be(i):i}function st(i){let e={};return i.forEach(t=>{e=t!=null?l(l({},e),t):e}),Object.keys(e).length===0?null:e}function at(i,e){return e.map(t=>t(i))}function Ut(i){return!i.validate}function lt(i){return i.map(e=>Ut(e)?e:t=>e.validate(t))}function ut(i){if(!i)return null;let e=i.filter(rt);return e.length==0?null:function(t){return st(at(t,e))}}function ct(i){return i!=null?ut(lt(i)):null}function dt(i){if(!i)return null;let e=i.filter(rt);return e.length==0?null:function(t){let n=at(t,e).map(ot);return Ae(n).pipe(Me(st))}}function ht(i){return i!=null?dt(lt(i)):null}function $e(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function ft(i){return i._rawValidators}function pt(i){return i._rawAsyncValidators}function de(i){return i?Array.isArray(i)?i:[i]:[]}function W(i,e){return Array.isArray(i)?i.includes(e):i===e}function We(i,e){let t=de(e);return de(i).forEach(r=>{W(t,r)||t.push(r)}),t}function qe(i,e){return de(e).filter(t=>!W(i,t))}var q=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ct(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ht(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},M=class extends q{get formDirective(){return null}get path(){return null}},P=class extends q{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},z=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Lt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ki=u(l({},Lt),{"[class.ng-submitted]":"isSubmitted"}),mt=(()=>{class i extends z{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(s(P,2))}}static{this.\u0275dir=c({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&le("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[m]})}}return i})(),gt=(()=>{class i extends z{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(s(M,10))}}static{this.\u0275dir=c({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&le("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[m]})}}return i})();var I="VALID",L="INVALID",D="PENDING",S="DISABLED",f=class{},Z=class extends f{constructor(e,t){super(),this.value=e,this.source=t}},N=class extends f{constructor(e,t){super(),this.pristine=e,this.source=t}},x=class extends f{constructor(e,t){super(),this.touched=e,this.source=t}},b=class extends f{constructor(e,t){super(),this.status=e,this.source=t}},he=class extends f{constructor(e){super(),this.source=e}},fe=class extends f{constructor(e){super(),this.source=e}};function ge(i){return(Q(i)?i.validators:i)||null}function $t(i){return Array.isArray(i)?ct(i):i||null}function _e(i,e){return(Q(e)?e.asyncValidators:i)||null}function Wt(i){return Array.isArray(i)?ht(i):i||null}function Q(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function _t(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new k(1e3,"");if(!n[t])throw new k(1001,"")}function vt(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new k(1002,"")})}var A=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=w(()=>this.statusReactive()),this.statusReactive=E(void 0),this._pristine=w(()=>this.pristineReactive()),this.pristineReactive=E(!0),this._touched=w(()=>this.touchedReactive()),this.touchedReactive=E(!1),this._events=new De,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return d(this.statusReactive)}set status(e){d(()=>this.statusReactive.set(e))}get valid(){return this.status===I}get invalid(){return this.status===L}get pending(){return this.status==D}get disabled(){return this.status===S}get enabled(){return this.status!==S}get pristine(){return d(this.pristineReactive)}set pristine(e){d(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return d(this.touchedReactive)}set touched(e){d(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(We(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(We(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(qe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(qe(e,this._rawAsyncValidators))}hasValidator(e){return W(this._rawValidators,e)}hasAsyncValidator(e){return W(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(u(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new x(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new x(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(u(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new N(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new N(!0,n))}markAsPending(e={}){this.status=D;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new b(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(u(l({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(r=>{r.disable(u(l({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Z(this.value,n)),this._events.next(new b(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(u(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(n=>{n.enable(u(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(u(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===D)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Z(this.value,t)),this._events.next(new b(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(u(l({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=ot(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new b(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?L:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(L)?L:I}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new N(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new x(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=$t(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Wt(this._rawAsyncValidators)}},X=class extends A{constructor(e,t,n){super(ge(t),_e(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){vt(this,!0,e),Object.keys(e).forEach(n=>{_t(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,o)=>{n=t(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var pe=class extends X{};var ve=new p("CallSetDisabledState",{providedIn:"root",factory:()=>ee}),ee="always";function qt(i,e){return[...e.path,i]}function ze(i,e,t=ee){ye(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Zt(i,e),Yt(i,e),Xt(i,e),zt(i,e)}function Ze(i,e,t=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),K(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Y(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function zt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function ye(i,e){let t=ft(i);e.validator!==null?i.setValidators($e(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=pt(i);e.asyncValidator!==null?i.setAsyncValidators($e(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Y(e._rawValidators,r),Y(e._rawAsyncValidators,r)}function K(i,e){let t=!1;if(i!==null){if(e.validator!==null){let r=ft(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.validator);o.length!==r.length&&(t=!0,i.setValidators(o))}}if(e.asyncValidator!==null){let r=pt(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==e.asyncValidator);o.length!==r.length&&(t=!0,i.setAsyncValidators(o))}}}let n=()=>{};return Y(e._rawValidators,n),Y(e._rawAsyncValidators,n),t}function Zt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&yt(i,e)})}function Xt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&yt(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function yt(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Yt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Kt(i,e){i==null,ye(i,e)}function Jt(i,e){return K(i,e)}function Qt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function ei(i){return Object.getPrototypeOf(i.constructor)===It}function ti(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function ii(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(o=>{o.constructor===J?t=o:ei(o)?n=o:r=o}),r||n||t||null}function ni(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Xe(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Ye(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var $=class extends A{constructor(e=null,t,n){super(ge(t),_e(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Q(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ye(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Xe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Xe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ye(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ri=i=>i instanceof $;var Ct=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=c({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var Vt=new p("");var oi={provide:M,useExisting:R(()=>Ce)},Ce=(()=>{class i extends M{get submitted(){return d(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=w(()=>this._submittedReactive()),this._submittedReactive=E(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new F,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(K(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return ze(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){Ze(t.control||null,t,!1),ni(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),ti(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new he(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new fe(this.form))}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,r=this.form.get(t.path);n!==r&&(Ze(n||null,t),ri(r)&&(ze(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);Kt(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&Jt(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ye(this.form,this),this._oldForm&&K(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(s(tt,10),s(it,10),s(ve,8))}}static{this.\u0275dir=c({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&v("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[B([oi]),m,ne]})}}return i})();var si={provide:P,useExisting:R(()=>Ve)},Ve=(()=>{class i extends P{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,n,r,o,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new F,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=ii(this,o)}ngOnChanges(t){this._added||this._setUpControl(),Qt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return qt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(s(M,13),s(tt,10),s(it,10),s(Qe,10),s(Vt,8))}}static{this.\u0275dir=c({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[B([si]),m,ne]})}}return i})();var Dt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=T({type:i})}static{this.\u0275inj=G({})}}return i})(),me=class extends A{constructor(e,t,n){super(ge(t),_e(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,n={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,t={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){vt(this,!1,e),e.forEach((n,r)=>{_t(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,n)=>{e(t,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Ke(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var bt=(()=>{class i{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new i;return t.useNonNullable=!0,t}group(t,n=null){let r=this._reduceControls(t),o={};return Ke(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new X(r,o)}record(t,n=null){let r=this._reduceControls(t);return new pe(r,n)}control(t,n,r){let o={};return this.useNonNullable?(Ke(n)?o=n:(o.validators=n,o.asyncValidators=r),new $(t,u(l({},o),{nonNullable:!0}))):new $(t,n,r)}array(t,n,r){let o=t.map(a=>this._createControl(a));return new me(o,n,r)}_reduceControls(t){let n={};return Object.keys(t).forEach(r=>{n[r]=this._createControl(t[r])}),n}_createControl(t){if(t instanceof $)return t;if(t instanceof A)return t;if(Array.isArray(t)){let n=t[0],r=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(n,r,o)}else return this.control(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Fe({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Mt=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:ve,useValue:t.callSetDisabledState??ee}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=T({type:i})}static{this.\u0275inj=G({imports:[Dt]})}}return i})(),At=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Vt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:ve,useValue:t.callSetDisabledState??ee}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=T({type:i})}static{this.\u0275inj=G({imports:[Dt]})}}return i})();function ui(i,e){if(i&1&&(g(0,"div",5),C(1),_()),i&2){let t=Ie();oe(),Se(t.errorMessage)}}var te=class i{constructor(e,t,n){this.fb=e;this.http=t;this.router=n;this.loginForm=this.fb.group({username:["",O.required],password:["",O.required]})}loginForm;errorMessage=null;onLogin(){if(this.loginForm.invalid){this.errorMessage="Por favor, completa todos los campos";return}let e=this.loginForm.value;this.http.post("http://3.23.112.121:3000/api/auth/login",e).subscribe(t=>{let n=t.token;n&&n.length>0?(localStorage.setItem("token",n),this.router.navigateByUrl("/home")):this.errorMessage="Token inv\xE1lido recibido."},t=>{t.status===401?this.errorMessage="Credenciales incorrectas. Por favor, int\xE9ntalo de nuevo.":this.errorMessage="Error al iniciar sesi\xF3n. Por favor, verifica tus credenciales.",console.error("Login failed",t)})}static \u0275fac=function(t){return new(t||i)(s(bt),s(Re),s(H))};static \u0275cmp=y({type:i,selectors:[["app-login"]],standalone:!0,features:[V],decls:6,vars:2,consts:[[3,"ngSubmit","formGroup"],["formControlName","username","placeholder","Nombre de usuario"],["type","password","formControlName","password","placeholder","Contrase\xF1a"],["type","submit"],["class","error",4,"ngIf"],[1,"error"]],template:function(t,n){t&1&&(g(0,"form",0),v("ngSubmit",function(){return n.onLogin()}),j(1,"input",1)(2,"input",2),g(3,"button",3),C(4,"Iniciar sesi\xF3n"),_(),we(5,ui,2,1,"div",4),_()),t&2&&(ae("formGroup",n.loginForm),oe(5),ae("ngIf",n.errorMessage))},dependencies:[ke,Pe,At,Ct,J,mt,gt,Ce,Ve,Ge,Mt],styles:[".login-container[_ngcontent-%COMP%]{max-width:400px;margin:0 auto;padding:20px;border:1px solid #ccc;border-radius:5px}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}label[_ngcontent-%COMP%]{display:block;margin-top:10px}input[_ngcontent-%COMP%]{width:100%;padding:8px;margin-top:5px;box-sizing:border-box}button[_ngcontent-%COMP%]{width:100%;padding:10px;margin-top:20px;background-color:#007bff;color:#fff;border:none;border-radius:5px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}"]})};var ie=class i{constructor(e){this.router=e}logout(){localStorage.removeItem("token"),this.router.navigate(["/login"])}static \u0275fac=function(t){return new(t||i)(s(H))};static \u0275cmp=y({type:i,selectors:[["app-home"]],standalone:!0,features:[V],decls:7,vars:0,consts:[[1,"sidebar"],[3,"click"]],template:function(t,n){t&1&&(g(0,"aside",0)(1,"h2"),C(2,"Men\xFA"),_(),g(3,"ul")(4,"li")(5,"a",1),v("click",function(){return n.logout()}),C(6,"Salir"),_()()()())}})};var Ft=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:te},{path:"home",component:ie}];var Et={providers:[xe({eventCoalescing:!0}),Ue(Ft),je()]};var ci={providers:[Be()]},wt=Oe(Et,ci);var di=()=>Te(U,wt),hn=di;export{hn as a};
