sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend(
        "zhr.flexiblecolumnlayout.controller.Detail",
        {

            onInit: function () {

                this.getOwnerComponent()
                    .getRouter()
                    .getRoute("detail")
                    .attachPatternMatched(
                        this._onPatternMatched,
                        this
                    );

            },

            _onPatternMatched: function (oEvent) {

                var sIndex =
                    oEvent.getParameter("arguments")
                        .ocorrencia;

                this.getView().bindElement({
                    path: "/Ocorrencias/" + sIndex,
                    model: "mdlOcorrencias"
                });

            },

            handleFullScreen: function () {

                this.getOwnerComponent().getModel("layout").setProperty(
                    "/layout",
                    "MidColumnFullScreen"
                );

            },

            
            handleExitFullScreen: function () {

                this.getModel("layout").setProperty(
                    "/layout",
                    "TwoColumnsMidExpanded"
                );

            },


            handleClose: function () {

                this.getOwnerComponent()
                    .getRouter()
                    .navTo("master");

            }

        }
    );
});

// sap.ui.define([
// 	"sap/ui/model/json/JSONModel",
// 	"sap/ui/core/mvc/Controller"
// ], function (JSONModel, Controller) {
// 	"use strict";

// 	return Controller.extend("zhr.flexiblecolumnlayout.controller.Detail", {


//         onInit: function () {

//             this.getOwnerComponent()
//                 .getRouter()
//                 .getRoute("detail")
//                 .attachPatternMatched(this._onObjectMatched, this);

//         },

//         _onObjectMatched: function (oEvent) {

//             const sPath =
//                 decodeURIComponent(
//                     oEvent.getParameter("arguments").id
//                 );

//             this.getView().bindElement({
//                 path: sPath,
//                 model: "mdlOcorrencias"
//             });

//         }


//         // onInit: function () {

//         //     this.getOwnerComponent()
//         //         .getRouter()
//         //         .getRoute("detail")
//         //         .attachPatternMatched(
//         //             this._onObjectMatched,
//         //             this
//         //         );
//         // },

//         // _onObjectMatched: function(oEvent) {

//         //     var sIndex =
//         //         oEvent.getParameter("arguments").ocorrencia;

//         //     var sPath =
//         //         "/Ocorrencias/" + sIndex;

//         //     this.getView().bindElement({
//         //         path: sPath,
//         //         model: "mdlOcorrencias"
//         //     });
//         // }

// 	});
// });
