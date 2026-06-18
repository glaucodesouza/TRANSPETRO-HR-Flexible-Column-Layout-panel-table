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
            const oArguments = oEvent.getParameter("arguments");
            const sLayout = oArguments.layout || LayoutType.OneColumn;

            this.getOwnerComponent()
                .getModel()
                .setProperty("/layout", sLayout);
        }
    });
});

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