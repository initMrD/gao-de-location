var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array && function (d, b) {
                d.__proto__ = b;
            }) ||
            function (d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import {IonicNativePlugin, cordova} from '@ionic-native/core';
import {Observable} from 'rxjs';

var GaoDeLocationOriginal = /** @class */ (function (_super) {
    __extends(GaoDeLocationOriginal, _super);

    function GaoDeLocationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }

    GaoDeLocationOriginal.prototype.getCurrentPosition = function (positionOptions) {
        return cordova(this, "getCurrentPosition", {"callbackOrder": "reverse"}, arguments);
    };
    GaoDeLocationOriginal.prototype.startSerialLocation = function (positionOptions) {
        return cordova(this, "startSerialLocation", {"callbackOrder": "reverse", "observable": true}, arguments);
    };
    GaoDeLocationOriginal.prototype.stopSerialLocation = function () {
        return cordova(this, "stopSerialLocation", {"callbackOrder": "reverse"}, arguments);
    };
    GaoDeLocation.prototype.getAddress = function (lonlat) {
        return cordova(this, "getAddress", {"callbackOrder": "reverse", "observable": true}, arguments);
    };
    GaoDeLocationOriginal.pluginName = "GaoDeLocation";
    GaoDeLocationOriginal.plugin = "cordova-plugin-gaodelocation-chenyu";
    GaoDeLocationOriginal.pluginRef = "GaoDe";
    GaoDeLocationOriginal.repo = "https://github.com/waliu/cordova-plugin-gaodelocation-chenyu.git";
    GaoDeLocationOriginal.install = "ionic cordova plugin add cordova-plugin-gaodelocation-chenyu --variable  ANDROID_API_KEY=your android key --variable  IOS_API_KEY=your ios key";
    GaoDeLocationOriginal.installVariables = ["ANDROID_API_KEY", "IOS_API_KEY"];
    GaoDeLocationOriginal.platforms = ["Android", "iOS"];
    return GaoDeLocationOriginal;
}(IonicNativePlugin));
var GaoDeLocation = new GaoDeLocationOriginal();
export {GaoDeLocation};
/**
 * ios positioning accuracy
 * https://developer.apple.com/documentation/corelocation/kcllocationaccuracybestfornavigation
 */
export var DesiredAccuracyEnum;
(function (DesiredAccuracyEnum) {
    /**
     * The highest possible accuracy that uses additional sensor data to facilitate navigation apps.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyBestForNavigation"] = 1] = "kCLLocationAccuracyBestForNavigation";
    /**
     * The best level of accuracy available.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyBest"] = 2] = "kCLLocationAccuracyBest";
    /**
     * Accurate to within ten meters of the desired target.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyNearestTenMeters"] = 3] = "kCLLocationAccuracyNearestTenMeters";
    /**
     * Accurate to within one hundred meters.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyHundredMeters"] = 4] = "kCLLocationAccuracyHundredMeters";
    /**
     * Accurate to the nearest kilometer.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyKilometer"] = 5] = "kCLLocationAccuracyKilometer";
    /**
     * Accurate to the nearest three kilometers.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyThreeKilometers"] = 6] = "kCLLocationAccuracyThreeKilometers";
})(DesiredAccuracyEnum || (DesiredAccuracyEnum = {}));
/**
 * locationModeEnum
 */
export var LocationModeEnum;
(function (LocationModeEnum) {
    LocationModeEnum[LocationModeEnum["Hight_Accuracy"] = 1] = "Hight_Accuracy";
    LocationModeEnum[LocationModeEnum["Battery_Saving"] = 2] = "Battery_Saving";
    LocationModeEnum[LocationModeEnum["Device_Sensors"] = 3] = "Device_Sensors";
})(LocationModeEnum || (LocationModeEnum = {}));
/**
 * locationProtocolEnum
 */
export var LocationProtocolEnum;
(function (LocationProtocolEnum) {
    LocationProtocolEnum[LocationProtocolEnum["HTTP"] = 1] = "HTTP";
    LocationProtocolEnum[LocationProtocolEnum["HTTPS"] = 2] = "HTTPS";
})(LocationProtocolEnum || (LocationProtocolEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dhby1kZS1sb2NhdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWlFQyxpQ0FBaUI7Ozs7SUFTbEQsMENBQWtCLGFBQUMsZUFBZ0M7SUFhbkQsMkNBQW1CLGFBQUMsZUFBZ0M7SUFXcEQsMENBQWtCOzs7Ozs7Ozt3QkFwR3BCO0VBbUVtQyxpQkFBaUI7U0FBdkMsYUFBYTtBQXNJMUI7OztHQUdHO0FBQ0gsTUFBTSxDQUFOLElBQVksbUJBeUJYO0FBekJELFdBQVksbUJBQW1CO0lBQzdCOztPQUVHO0lBQ0gsNkhBQXdDLENBQUE7SUFDeEM7O09BRUc7SUFDSCxtR0FBMkIsQ0FBQTtJQUMzQjs7T0FFRztJQUNILDJIQUF1QyxDQUFBO0lBQ3ZDOztPQUVHO0lBQ0gscUhBQW9DLENBQUE7SUFDcEM7O09BRUc7SUFDSCw2R0FBZ0MsQ0FBQTtJQUNoQzs7T0FFRztJQUNILHlIQUFzQyxDQUFBO0FBQ3hDLENBQUMsRUF6QlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQXlCOUI7QUFFRDs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLGdCQUlYO0FBSkQsV0FBWSxnQkFBZ0I7SUFDMUIsMkVBQWtCLENBQUE7SUFDbEIsMkVBQWtCLENBQUE7SUFDbEIsMkVBQWtCLENBQUE7QUFDcEIsQ0FBQyxFQUpXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFJM0I7QUFFRDs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLG9CQUdYO0FBSEQsV0FBWSxvQkFBb0I7SUFDOUIsK0RBQVEsQ0FBQTtJQUNSLGlFQUFTLENBQUE7QUFDWCxDQUFDLEVBSFcsb0JBQW9CLEtBQXBCLG9CQUFvQixRQUcvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIEdhbyBEZSBMb2NhdGlvblxuICogQGRlc2NyaXB0aW9uXG4gKiBCZWNhdXNlIHRoZSBvcmlnaW5hbCBHUFMgcG9zaXRpb25pbmcgdXNlcyBHb29nbGUgQnJvd3NlciBwb3NpdGlvbmluZywgYW5kIEdvb2dsZSB3aXRoZHJhd3MgZnJvbSBDaGluYSwgcmVzdWx0aW5nIGluIEdQUyBBbmRyb2lkIHBvc2l0aW9uaW5nIGNhbiBub3QgYmUgcG9zaXRpb25lZC5cbiAqIEdhb2RlIGxvY2F0aW9uIGNhbiBkaXJlY3RseSByZXR1cm4gYWRkcmVzcyBpbmZvcm1hdGlvbkdhb2RlIGxvY2F0aW9uIGNhbiBkaXJlY3RseSByZXR1cm4gYWRkcmVzcyBpbmZvcm1hdGlvblxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgR2FvRGVMb2NhdGlvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZ2FvLWRlLWxvY2F0aW9uL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2FvRGVMb2NhdGlvbjogR2FvRGVMb2NhdGlvbikgeyB9XG4gKlxuICpcbiAqIGNvbnN0IHBvc2l0aW9uT3B0aW9uczogUG9zaXRpb25PcHRpb25zID0ge1xuICogICAgIGFuZHJvaWRPcHRpb246IHtcbiAqICAgICAgbG9jYXRpb25Nb2RlOiBMb2NhdGlvbk1vZGVFbnVtLkhpZ2h0X0FjY3VyYWN5LFxuICogICAgICBncHNGaXJzdDogZmFsc2UsXG4gKiAgICAgICBIdHRwVGltZU91dDogMzAwMDAsXG4gKiAgICAgICBpbnRlcnZhbDogMjAwMCxcbiAqICAgICAgIG5lZWRBZGRyZXNzOiB0cnVlLFxuICogICAgICAgb25jZUxvY2F0aW9uOiBmYWxzZSxcbiAqICAgICAgIG9uY2VMb2NhdGlvbkxhdGVzdDogZmFsc2UsXG4gKiAgICAgICBsb2NhdGlvblByb3RvY29sOiBMb2NhdGlvblByb3RvY29sRW51bS5IVFRQLFxuICogICAgICAgc2Vuc29yRW5hYmxlOiBmYWxzZSxcbiAqICAgICAgIHdpZmlTY2FuOiB0cnVlLFxuICogICAgICAgbG9jYXRpb25DYWNoZUVuYWJsZTogdHJ1ZVxuICogICAgIH0sIGlvc09wdGlvbjoge1xuICogICAgICAgZGVzaXJlZEFjY3VyYWN5OiBEZXNpcmVkQWNjdXJhY3lFbnVtLmtDTExvY2F0aW9uQWNjdXJhY3lCZXN0LFxuICogICAgICAgcGF1c2VzTG9jYXRpb25VcGRhdGVzQXV0b21hdGljYWxseTogJ1lFUycsXG4gKiAgICAgICBhbGxvd3NCYWNrZ3JvdW5kTG9jYXRpb25VcGRhdGVzOiAnTk8nLFxuICogICAgICAgbG9jYXRpb25UaW1lb3V0OiAxMCxcbiAqICAgICAgIHJlR2VvY29kZVRpbWVvdXQ6IDUsXG4gKiAgICAgfVxuICogICB9O1xuICogY29uc3QgcG9zaXRpb25SZXM6IFBvc2l0aW9uUmVzID0gYXdhaXQgdGhpcy5nYW9EZUxvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbk9wdGlvbnMpLmNhdGNoKChlOiBhbnkpID0+IHtcbiAqICAgICBjb25zb2xlLmxvZyhlKTtcbiAqICAgfSkgfHwgbnVsbDtcbiAqIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHBvc2l0aW9uUmVzKSk7XG4gKlxuICpcbiAqIHRoaXMuZ2FvRGVMb2NhdGlvbi5zdGFydFNlcmlhbExvY2F0aW9uKHBvc2l0aW9uT3B0aW9ucykuc3Vic2NyaWJlKChwb3NpdGlvblJlczogUG9zaXRpb25SZXMpID0+IHtcbiAqICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHBvc2l0aW9uUmVzKSk7XG4gKiB9KTtcbiAqXG4gKiBjb25zdCBwb3NpdGlvblJlczogYW55ID0gdGhpcy5nYW9EZUxvY2F0aW9uLnN0b3BTZXJpYWxMb2NhdGlvbigpLmNhdGNoKChlKSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2coZSk7XG4gKiAgIH0pIHx8IG51bGw7XG4gKiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwb3NpdGlvblJlcykpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dhb0RlTG9jYXRpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nYW9kZWxvY2F0aW9uLWNoZW55dScsXG4gIHBsdWdpblJlZjogJ0dhb0RlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS93YWxpdS9jb3Jkb3ZhLXBsdWdpbi1nYW9kZWxvY2F0aW9uLWNoZW55dS5naXQnLFxuICBpbnN0YWxsOlxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZ2FvZGVsb2NhdGlvbi1jaGVueXUgLS12YXJpYWJsZSAgQU5EUk9JRF9BUElfS0VZPXlvdXIgYW5kcm9pZCBrZXkgLS12YXJpYWJsZSAgSU9TX0FQSV9LRVk9eW91ciBpb3Mga2V5JyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBTkRST0lEX0FQSV9LRVknLCAnSU9TX0FQSV9LRVknXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdhb0RlTG9jYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTaW5nbGUgbG9jYXRpb25cbiAgICogQHBhcmFtIHBvc2l0aW9uT3B0aW9uc1xuICAgKiBAcmV0dXJuIFByb21pc2U8UG9zaXRpb25SZXM+XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb25PcHRpb25zOiBQb3NpdGlvbk9wdGlvbnMpOiBQcm9taXNlPFBvc2l0aW9uUmVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHNlcmlhbCBsb2NhdGlvblxuICAgKiBAcGFyYW0gcG9zaXRpb25PcHRpb25zXG4gICAqIEByZXR1cm4gUHJvbWlzZTxQb3NpdGlvblJlcz5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgc3RhcnRTZXJpYWxMb2NhdGlvbihwb3NpdGlvbk9wdGlvbnM6IFBvc2l0aW9uT3B0aW9ucyk6IE9ic2VydmFibGU8UG9zaXRpb25SZXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBTZXJpYWwgTG9jYXRpb25cbiAgICogQHJldHVybiBQcm9taXNlPGFueT5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIHN0b3BTZXJpYWxMb2NhdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIExvY2F0aW9uIHBhcmFtZXRlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBhbmRyb2lkIG9wdGlvbnNcbiAgICovXG4gIGFuZHJvaWRPcHRpb246IEFuZHJvaWRPcHRpb25zO1xuICAvKipcbiAgICogaW9zIG9wdGlvbnNcbiAgICovXG4gIGlvc09wdGlvbjogSW9zT3B0aW9ucztcbn1cblxuLyoqXG4gKiBhbmRyb2lkIHBvc2l0aW9uaW5nIGFjY3VyYWN5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQW5kcm9pZE9wdGlvbnMge1xuICAvKipcbiAgICogbG9jYXRpb24gbW9kZVxuICAgKi9cbiAgbG9jYXRpb25Nb2RlOiBMb2NhdGlvbk1vZGVFbnVtO1xuICAvKipcbiAgICogZ3BzIGZpcnN0XG4gICAqL1xuICBncHNGaXJzdDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEh0dHAgdGltZU91dFxuICAgKi9cbiAgSHR0cFRpbWVPdXQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIExvY2F0aW9uIGludGVydmFsXG4gICAqL1xuICBpbnRlcnZhbDogbnVtYmVyO1xuICAvKipcbiAgICogT3BlbiByZXZlcnNlIGFkZHJlc3NcbiAgICovXG4gIG5lZWRBZGRyZXNzOiBib29sZWFuO1xuICAvKipcbiAgICogb25jZSBsb2NhdGlvblxuICAgKi9cbiAgb25jZUxvY2F0aW9uOiBib29sZWFuO1xuICAvKipcbiAgICogb25jZSBsb2NhdGlvbiBsYXRlc3RcbiAgICovXG4gIG9uY2VMb2NhdGlvbkxhdGVzdDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGxvY2F0aW9uIHByb3RvY29sXG4gICAqL1xuICBsb2NhdGlvblByb3RvY29sOiBMb2NhdGlvblByb3RvY29sRW51bTtcbiAgLyoqXG4gICAqIHNlbnNvciBlbmFibGVcbiAgICovXG4gIHNlbnNvckVuYWJsZTogYm9vbGVhbjtcbiAgLyoqXG4gICAqIHdpZmkgc2NhblxuICAgKi9cbiAgd2lmaVNjYW46IGJvb2xlYW47XG4gIC8qKlxuICAgKiBsb2NhdGlvbiBjYWNoZSBlbmFibGVcbiAgICovXG4gIGxvY2F0aW9uQ2FjaGVFbmFibGU6IGJvb2xlYW47XG59XG5cbi8qKlxuICpcbiAqIElPUyBwb3NpdGlvbmluZyBwYXJhbWV0ZXJzXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElvc09wdGlvbnMge1xuICAvKipcbiAgICogZGVzaXJlZCBhY2N1cmFjeVxuICAgKi9cbiAgZGVzaXJlZEFjY3VyYWN5PzogRGVzaXJlZEFjY3VyYWN5RW51bTtcbiAgLyoqXG4gICAqIHBhdXNlcyBsb2NhdGlvbiB1cGRhdGVzIGF1dG9tYXRpY2FsbHlcbiAgICovXG4gIHBhdXNlc0xvY2F0aW9uVXBkYXRlc0F1dG9tYXRpY2FsbHk6IElvc0Jvb2xlYW47XG4gIC8qKlxuICAgKiBhbGxvd3MgYmFja2dyb3VuZCBsb2NhdGlvbiB1cGRhdGVzXG4gICAqL1xuICBhbGxvd3NCYWNrZ3JvdW5kTG9jYXRpb25VcGRhdGVzOiBJb3NCb29sZWFuO1xuICAvKipcbiAgICogbG9jYXRpb24gdGltZW91dFxuICAgKi9cbiAgbG9jYXRpb25UaW1lb3V0OiBudW1iZXI7XG4gIC8qKlxuICAgKiByZSBnZW9jb2RlIHRpbWVvdXRcbiAgICovXG4gIHJlR2VvY29kZVRpbWVvdXQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBsb2NhdGluZyB3aXRoIHJlIGdlb2NvZGVcbiAgICovXG4gIGxvY2F0aW5nV2l0aFJlR2VvY29kZT86IElvc0Jvb2xlYW47XG59XG5cbi8qKlxuICogaW9zIHBvc2l0aW9uaW5nIGFjY3VyYWN5XG4gKiBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9jb3JlbG9jYXRpb24va2NsbG9jYXRpb25hY2N1cmFjeWJlc3Rmb3JuYXZpZ2F0aW9uXG4gKi9cbmV4cG9ydCBlbnVtIERlc2lyZWRBY2N1cmFjeUVudW0ge1xuICAvKipcbiAgICogVGhlIGhpZ2hlc3QgcG9zc2libGUgYWNjdXJhY3kgdGhhdCB1c2VzIGFkZGl0aW9uYWwgc2Vuc29yIGRhdGEgdG8gZmFjaWxpdGF0ZSBuYXZpZ2F0aW9uIGFwcHMuXG4gICAqL1xuICBrQ0xMb2NhdGlvbkFjY3VyYWN5QmVzdEZvck5hdmlnYXRpb24gPSAxLFxuICAvKipcbiAgICogVGhlIGJlc3QgbGV2ZWwgb2YgYWNjdXJhY3kgYXZhaWxhYmxlLlxuICAgKi9cbiAga0NMTG9jYXRpb25BY2N1cmFjeUJlc3QgPSAyLFxuICAvKipcbiAgICogQWNjdXJhdGUgdG8gd2l0aGluIHRlbiBtZXRlcnMgb2YgdGhlIGRlc2lyZWQgdGFyZ2V0LlxuICAgKi9cbiAga0NMTG9jYXRpb25BY2N1cmFjeU5lYXJlc3RUZW5NZXRlcnMgPSAzLFxuICAvKipcbiAgICogQWNjdXJhdGUgdG8gd2l0aGluIG9uZSBodW5kcmVkIG1ldGVycy5cbiAgICovXG4gIGtDTExvY2F0aW9uQWNjdXJhY3lIdW5kcmVkTWV0ZXJzID0gNCxcbiAgLyoqXG4gICAqIEFjY3VyYXRlIHRvIHRoZSBuZWFyZXN0IGtpbG9tZXRlci5cbiAgICovXG4gIGtDTExvY2F0aW9uQWNjdXJhY3lLaWxvbWV0ZXIgPSA1LFxuICAvKipcbiAgICogQWNjdXJhdGUgdG8gdGhlIG5lYXJlc3QgdGhyZWUga2lsb21ldGVycy5cbiAgICovXG4gIGtDTExvY2F0aW9uQWNjdXJhY3lUaHJlZUtpbG9tZXRlcnMgPSA2LFxufVxuXG4vKipcbiAqIGxvY2F0aW9uTW9kZUVudW1cbiAqL1xuZXhwb3J0IGVudW0gTG9jYXRpb25Nb2RlRW51bSB7XG4gIEhpZ2h0X0FjY3VyYWN5ID0gMSxcbiAgQmF0dGVyeV9TYXZpbmcgPSAyLFxuICBEZXZpY2VfU2Vuc29ycyA9IDMsXG59XG5cbi8qKlxuICogbG9jYXRpb25Qcm90b2NvbEVudW1cbiAqL1xuZXhwb3J0IGVudW0gTG9jYXRpb25Qcm90b2NvbEVudW0ge1xuICBIVFRQID0gMSxcbiAgSFRUUFMgPSAyLFxufVxuXG4vKipcbiAqIGlvcyBib29sZWFuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIHR5cGUgSW9zQm9vbGVhbiA9ICdZRVMnIHwgJ05PJztcblxuLyoqXG4gKiBQb3NpdGlvbmluZyByZXR1cm4gcmVzdWx0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25SZXMge1xuICAvKipcbiAgICogU3RhdHVzIGNvZGVcbiAgICovXG4gIGNvZGU6IG51bWJlcjtcbiAgLyoqXG4gICAqIGxhdGl0dWRlXG4gICAqL1xuICBsYXRpdHVkZTogc3RyaW5nO1xuICAvKipcbiAgICogbG9uZ2l0dWRlXG4gICAqL1xuICBsb25naXR1ZGU6IHN0cmluZztcbiAgLyoqXG4gICAqIGFjY3VyYWN5XG4gICAqL1xuICBhY2N1cmFjeTogc3RyaW5nO1xuICAvKipcbiAgICogYWRkcmVzc1xuICAgKi9cbiAgZm9ybWF0dGVkQWRkcmVzczogc3RyaW5nO1xuICAvKipcbiAgICogY291bnRyeVxuICAgKi9cbiAgY291bnRyeTogc3RyaW5nO1xuICAvKipcbiAgICogcHJvdmluY2VcbiAgICovXG4gIHByb3ZpbmNlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjaXR5XG4gICAqL1xuICBjaXR5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBkaXN0cmljdFxuICAgKi9cbiAgZGlzdHJpY3Q6IHN0cmluZztcbiAgLyoqXG4gICAqIGNpdHljb2RlXG4gICAqL1xuICBjaXR5Y29kZTogc3RyaW5nO1xuICAvKipcbiAgICogYWRjb2RlXG4gICAqL1xuICBhZGNvZGU6IHN0cmluZztcbiAgLyoqXG4gICAqIHN0cmVldFxuICAgKi9cbiAgc3RyZWV0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTdHJlZXQgbnVtYmVyIGluZm9ybWF0aW9uXG4gICAqL1xuICBudW1iZXI6IHN0cmluZztcbiAgLyoqXG4gICAqIFBPSSBuYW1lXG4gICAqL1xuICBQT0lOYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBT0kgTmFtZVxuICAgKi9cbiAgQU9JTmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogYWx0aXR1ZGVcbiAgICovXG4gIGFsdGl0dWRlPzogc3RyaW5nO1xuICAvKipcbiAgICogc3BlZWRcbiAgICovXG4gIHNwZWVkPzogc3RyaW5nO1xuICAvKipcbiAgICogYmVhcmluZ1xuICAgKi9cbiAgYmVhcmluZz86IHN0cmluZztcbiAgLyoqXG4gICAqIGJ1aWxkaW5nIGlkXG4gICAqL1xuICBidWlsZGluZ0lkPzogc3RyaW5nO1xuICAvKipcbiAgICogZmxvb3JcbiAgICovXG4gIGZsb29yPzogc3RyaW5nO1xuICAvKipcbiAgICogZ3BzIGFjY3VyYWN5IHN0YXR1c1xuICAgKi9cbiAgZ3BzQWNjdXJhY3lTdGF0dXM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBHZXQgbG9jYXRpb24gcmVzdWx0IHNvdXJjZVxuICAgKi9cbiAgbG9jYXRpb25UeXBlPzogc3RyaW5nO1xuICAvKipcbiAgICogTG9jYXRpb24gZGV0YWlsXG4gICAqL1xuICBsb2NhdGlvbkRldGFpbD86IHN0cmluZztcbn1cbiJdfQ==
