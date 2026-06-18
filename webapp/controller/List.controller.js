sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/Sorter',
	'sap/m/MessageBox'
], function (JSONModel, Controller, Filter, FilterOperator, Sorter, MessageBox) {
	"use strict";

    return Controller.extend("zhr.flexiblecolumnlayout.controller.List", {
		onInit: function () {
			this.oRouter = this.getOwnerComponent().getRouter();
			this._bDescendingSort = false;

            // var oOcorrencias = {
            //     "Ocorrencias": [
            //     {   "Periodo": "Janeiro 2024",
            //         "Empregado": "00001234",
            //         "Data": new Date(2024, 0, 1), // janeiro é mês 0
            //         "HoraInicio": "08:00",
            //         "HoraFim": "12:00",
            //         "Diferenca": "",
            //         "TipoOcorrencia": "",
            //         "Justificativa": "",
            //         "ObservacaoSolicitacao": "",
            //         "status": "01", // Novo
            //         "editMode": false
            //         },
            //         {
            //         "Periodo": "Janeiro 2024",
            //         "Empregado": "00001234",
            //         "Data": new Date(2024, 0, 1), // janeiro é mês 0
            //         "HoraInicio": "13:00",
            //         "HoraFim": "17:00",
            //         "Diferenca": "",
            //         "TipoOcorrencia": "",
            //         "Justificativa": "",
            //         "ObservacaoSolicitacao": "",
            //         "status": "02", // Em aprovação
            //         "editMode": false
            //         },
            //         {
            //         "Periodo": "Janeiro 2024",
            //         "Empregado": "00001234",
            //         "Data": new Date(2024, 0, 1), // janeiro é mês 0
            //         "HoraInicio": "08:00",
            //         "HoraFim": "17:00",
            //         "Diferenca": "",
            //         "TipoOcorrencia": "Férias",
            //         "Justificativa": "F001",
            //         "ObservacaoSolicitacao": "Solicitação de férias para o mês de março.",
            //         "status": "03", // Aprovado
            //         "editMode": false
            //         },
            //         {
            //         "Periodo": "Fevereiro 2024",
            //         "Empregado": "00001234",
            //         "Data": new Date(2024, 1, 1), // fevereiro é mês 1
            //         "HoraInicio": "08:00",
            //         "HoraFim": "17:00",
            //         "Diferenca": "",
            //         "TipoOcorrencia": "Licença Médica",
            //         "Justificativa": "L002",
            //         "ObservacaoSolicitacao": "Solicitação de licença médica para tratamento de saúde.",
            //         "status": "04", // Reprovado
            //         "editMode": false
            //         }
            //     ]   
            // };
            // this.getOwnerComponent().setModel(new JSONModel(oOcorrencias), "mdlOcorrencias");

            // this.getView().setModel(new JSONModel(oOcorrencias), "mdlOcorrencias");
		},
		
        onListItemPress: function(oEvent) {


            //teste 3
            const oItem = oEvent.getParameter("listItem");
            const oContext = oItem.getBindingContext("mdlOcorrencias");

            if (!oContext) {
                return;
            }

            const sPath = oContext.getPath();
            const sIndex = sPath.split("/").pop();

            const oNextUIState = this.getOwnerComponent()
                .getHelper()
                .getNextUIState(1);

            this.getOwnerComponent()
                .getRouter()
                .navTo("detail", {
                    ocorrencia: sIndex,
                    layout: oNextUIState.layout
                });


            //teste 2
            // const oItem = oEvent.getParameter("listItem");
            // const oCtx = oItem.getBindingContext("mdlOcorrencias");

            // const sPath = oCtx.getPath();

            // this.getOwnerComponent()
            //     .getRouter()
            //     .navTo("detail", {
            //         id: encodeURIComponent(sPath)
            //     });

            // teste 1
            // var oItem = oEvent.getParameter("listItem");

            // var oContext = oItem.getBindingContext("mdlOcorrencias");

            // var sPath = oContext.getPath();

            // var sIndex = sPath.split("/").pop();

            // var oNextUIState =
            //     this.getOwnerComponent()
            //         .getHelper()
            //         .getNextUIState(1);

            // this.oRouter.navTo("detail", {
            //     layout: oNextUIState.layout,
            //     ocorrencia: sIndex
            // });
        }
        ,
		onSearch: function (oEvent) {
			var oTableSearchState = [],
				sQuery = oEvent.getParameter("query");

			if (sQuery && sQuery.length > 0) {
				oTableSearchState = [new Filter("Empregado", FilterOperator.Contains, sQuery)];
			}

			this.getView().byId("productsTable").getBinding("items").filter(oTableSearchState, "Application");
		},

		onAdd: function (oEvent) {
			MessageBox.show("This functionality is not ready yet.", {
				icon: MessageBox.Icon.INFORMATION,
				title: "Aw, Snap!",
				actions: [MessageBox.Action.OK]
			});
		},

		onSort: function (oEvent) {
			this._bDescendingSort = !this._bDescendingSort;
			var oView = this.getView(),
				oTable = oView.byId("productsTable"),
				oBinding = oTable.getBinding("items"),
				oSorter = new Sorter("Empregado", this._bDescendingSort);

			oBinding.sort(oSorter);
		}


	});
});