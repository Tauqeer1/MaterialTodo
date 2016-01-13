/**
 * Created by Tauqeer Ahmed on 1/13/2016.
 */


    angular.module('mainApp',['ngMaterial','ngMdIcons'])
           .controller('appCtrl',[appController]);


    function appController(){
        var _self = this;

        _self.itemsArray = [];
        _self.AddItemTodoList = function () {
            if (_self.todoitem) {
                _self.itemsArray.push({item: _self.todoitem, checked: false});
                _self.todoitem = '';
                _self.RemainingItemInList();
            }
        };
        _self.RemainingItemInList = function () {

            _self.count = _self.itemsArray.length;
            for (var i = 0; i < _self.itemsArray.length; i++) {
                if (_self.itemsArray[i].checked) {
                    _self.count--;
                }
            }
        };
        _self.DeleteSelectedItems = function () {

            var countItems = 0;
            for (var i = 0; i < _self.itemsArray.length; i++) {

                if (_self.itemsArray[i].checked) {
                    _self.itemsArray.splice(i--, 1);
                }
            }
        }

    }

