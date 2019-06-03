import {ViewManager} from "./manager/ViewManager";
import BaseMediator from "./base/BaseMediator";
import BaseScene from "./base/BaseScene";
import {BaseView} from "./base/BaseView";
import {OPEN_VIEW_OPTION} from "./Constants";

export class Facade {

    private static _instance: Facade = new Facade();

    private constructor () {

    }

    public static getInstance(): Facade {
        return this._instance;
    }
    /**
     * 运行场景
     * @param {{new(): BaseMediator}} mediator 场景mediator类型，类类型。
     * @param {{new(): BaseScene}} view 场景mediator类型，类类型。
     * @param {Object} data 自定义的任意类型透传数据。（可选）
     */
    public runScene(mediator: {new(): BaseMediator}, view: {new(): BaseScene}, data?: any): void {
        ViewManager.getInstance().__runScene__(mediator, view, data);
    }

    /**
     * 打开view界面
     * @param {{new(): BaseMediator}} mediator 界面mediator类型，类类型。
     * @param {{new(): BaseView}} view view 场景mediator类型，类类型。
     * @param {Object} data 自定义的任意类型透传数据。（可选）
     */
    public popView(mediator: {new(): BaseMediator}, view: {new(): BaseView}, data?: any): void {
        ViewManager.getInstance().__showView__(mediator, view, data, OPEN_VIEW_OPTION.OVERLAY, 0);
    }

    /**
     * 创建view层
     * @param {{new(): BaseMediator}} mediator 界面mediator类型，类类型。
     * @param {{new(): BaseView}} view view 场景mediator类型，类类型。
     * @param {number} zOrder ui层级
     * @param {Object} data 自定义的任意类型透传数据。（可选）
     */
    public addLayer(mediator: {new(): BaseMediator}, view: {new(): BaseView}, zOrder?: number, data?: any): void {
        ViewManager.getInstance().__showView__(mediator, view, data, OPEN_VIEW_OPTION.LAYER, zOrder);
    }

    public registerCmd(): void {

    }

    public __sendCommand(): void {

    }

    public __undoCommand(): void {

    }

    public __sendNotification(): void {

    }
}

/** 导入到全局属性mvc中的对外接口和属性等api */
(<any>(window)).mvc = {
    /** mvc全局控制类 */
    facade: Facade.getInstance(),

};