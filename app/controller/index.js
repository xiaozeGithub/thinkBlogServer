'use strict';

exports.__esModule = true;
/**
 * Controller
 * @return
 */

exports.default = class extends think.controller.base {
    //构造方法
    init(http) {
        //调用父类构造方法
        super.init(http);
    }
    //所有该控制器(含子类)方法前置方法
    __before() {
        console.log('__before');
    }
    //URI定位到该控制器,如果该控制器不存在某个方法时自动调用
    __empty() {
        return this.json('can\'t find action');
    }
    //indexAction前置方法
    _before_index() {
        console.log('_before_index');
    }
    //控制器默认方法
    indexAction() {
        return this.ok('success');
    }
};