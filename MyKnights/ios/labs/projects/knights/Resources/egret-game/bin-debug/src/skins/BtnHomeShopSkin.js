var skins;
(function (skins) {
    var BtnHomeShopSkin = (function (_super) {
        __extends(BtnHomeShopSkin, _super);
        function BtnHomeShopSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [];
            this.__4_i();
            this.__5_i();
            this.__6_i();
            this.__7_i();
            this.states = [
                new egret.gui.State("up", [
                    new egret.gui.AddItems("__6", "", "last", "")
                ]),
                new egret.gui.State("down", [
                    new egret.gui.AddItems("__4", "", "last", ""),
                    new egret.gui.AddItems("__5", "", "last", "")
                ]),
                new egret.gui.State("disabled", [
                    new egret.gui.AddItems("__7", "", "last", "")
                ])
            ];
        }
        var __egretProto__ = BtnHomeShopSkin.prototype;
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__4 = t;
            this.__s(t, ["source", "x", "y"], ["shop_light_png", 25, -14]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__5 = t;
            this.__s(t, ["source", "x", "y"], ["shop_png", 0, 0]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__6 = t;
            this.__s(t, ["source", "x", "y"], ["shop_png", 0, 0]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__7 = t;
            this.__s(t, ["source", "x", "y"], ["shop_png", 0, 0]);
            return t;
        };
        return BtnHomeShopSkin;
    })(egret.gui.Skin);
    skins.BtnHomeShopSkin = BtnHomeShopSkin;
    BtnHomeShopSkin.prototype.__class__ = "skins.BtnHomeShopSkin";
})(skins || (skins = {}));
