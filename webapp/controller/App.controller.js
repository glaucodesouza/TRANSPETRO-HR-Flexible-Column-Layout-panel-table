sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/f/library"
], (
    BaseController,
    fioriLibrary
) => {
    "use strict";

    const LayoutType = fioriLibrary.LayoutType;

    return BaseController.extend("zhr.flexiblecolumnlayout.controller.App", {
        onInit() {
            this.getOwnerComponent()
                .getRouter()
                .attachRouteMatched(this._onRouteMatched, this);
        },

        _onRouteMatched(oEvent) {
            const oArguments = oEvent.getParameter("arguments") || {};
            const sLayout = oArguments.layout || LayoutType.OneColumn;

            const oLayoutModel = this.getOwnerComponent().getModel("layout");

            oLayoutModel.setProperty("/layout", sLayout);

            const oHelper = this.getOwnerComponent().getHelper();
            const oUIState = oHelper.getCurrentUIState();

            oLayoutModel.setProperty(
                "/actionButtonsInfo",
                oUIState.actionButtonsInfo
            );
        }
    });
});

// TESTE 4
// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/f/library"
// ], (
//     BaseController,
//     fioriLibrary
// ) => {
//     "use strict";

//     const LayoutType = fioriLibrary.LayoutType;

//     return BaseController.extend("zhr.flexiblecolumnlayout.controller.App", {
//         onInit() {
//             this.getOwnerComponent()
//                 .getRouter()
//                 .attachRouteMatched(this._onRouteMatched, this);
//         },

//         _onRouteMatched(oEvent) {
//             const oArguments = oEvent.getParameter("arguments") || {};
//             const sLayout = oArguments.layout || LayoutType.OneColumn;

//             const oLayoutModel = this.getOwnerComponent().getModel("layout");

//             oLayoutModel.setProperty("/layout", sLayout);

//             const oHelper = this.getOwnerComponent().getHelper();
//             const oUIState = oHelper.getCurrentUIState();

//             oLayoutModel.setProperty("/actionButtonsInfo", oUIState.actionButtonsInfo);
//         }
//     });
// });

// TESTE 3
// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/f/library"
// ], (
//     BaseController,
//     fioriLibrary
// ) => {
//     "use strict";

//     const LayoutType = fioriLibrary.LayoutType;

//     return BaseController.extend("zhr.flexiblecolumnlayout.controller.App", {
//         onInit() {
//             this.getOwnerComponent()
//                 .getRouter()
//                 .attachRouteMatched(this._onRouteMatched, this);
//         },

//         _onRouteMatched(oEvent) {
//             const oArguments = oEvent.getParameter("arguments");
//             const sLayout = oArguments.layout || LayoutType.OneColumn;

//             // this.getOwnerComponent()
//             //     .getModel()
//             //     .setProperty("/layout", sLayout);
//             this.getOwnerComponent().getModel("layout").setProperty("/layout", sLayout);
//         }
//     });
// });

//TESTE 2
// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/f/library"
// ], (
//     BaseController,
//     fioriLibrary
// ) => {
//     "use strict";

//     const LayoutType = fioriLibrary.LayoutType;

//     return BaseController.extend("zhr.flexiblecolumnlayout.controller.App", {
//         onInit() {
//             this.getOwnerComponent()
//                 .getRouter()
//                 .attachRouteMatched(this._onRouteMatched, this);
//         },

//         _onRouteMatched(oEvent) {
//             const oArguments = oEvent.getParameter("arguments");
//             const sLayout = oArguments.layout || LayoutType.OneColumn;

//             this.getOwnerComponent()
//                 .getModel()
//                 .setProperty("/layout", sLayout);
//         }
//     });
// });

// TESTE 1
// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ], (BaseController) => {
//     "use strict";

//     return BaseController.extend("zhr.flexiblecolumnlayout.controller.App", {
//         onInit() {
//             this.getOwnerComponent()
//                 .getRouter()
//                 .attachRouteMatched(this._onRouteMatched, this);
//         },

//         _onRouteMatched(oEvent) {

//           console.log("Rota chamada:", oEvent.getParameter("name"));
//           console.log("Argumentos:", oEvent.getParameter("arguments"));

//           const oArguments = oEvent.getParameter("arguments");
//           const sLayout = oArguments.layout;

//           if (sLayout) {
//               this.getOwnerComponent()
//                   .getModel()
//                   .setProperty("/layout", sLayout);
//           }
//         }
//         //     const oArguments = oEvent.getParameter("arguments");
//         //     const sLayout = oArguments.layout;

//         //     if (sLayout) {
//         //         this.getOwnerComponent()
//         //             .getModel()
//         //             .setProperty("/layout", sLayout);
//         //     }
//         // }
//     });
// });