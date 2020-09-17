/*!
* DevExtreme (dx.messages.es.js)
* Version: 20.1.7
* Build date: Tue Aug 25 2020
*
* Copyright (c) 2012 - 2020 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        if ("object" === typeof module && module.exports) {
            factory(require("devextreme/localization"))
        } else {
            factory(DevExpress.localization)
        }
    }
}(this, function(localization) {
    localization.loadMessages({
        es: {
            Yes: "S\xed",
            No: "No",
            Cancel: "Cancelar",
            Clear: "Limpiar",
            Done: "Hecho",
            Loading: "Cargando...",
            Select: "Seleccionar...",
            Search: "Buscar",
            Back: "Volver",
            OK: "Aceptar",
            "dxCollectionWidget-noDataText": "Sin datos para mostrar",
            "dxDropDownEditor-selectLabel": "Seleccionar",
            "validation-required": "Obligatorio",
            "validation-required-formatted": "{0} es obligatorio",
            "validation-numeric": "Valor debe ser un n\xfamero",
            "validation-numeric-formatted": "{0} debe ser un n\xfamero",
            "validation-range": "Valor fuera de rango",
            "validation-range-formatted": "{0} fuera de rango",
            "validation-stringLength": "El tama\xf1o del valor es incorrecto",
            "validation-stringLength-formatted": "El tama\xf1o de {0} es incorrecto",
            "validation-custom": "Valor inv\xe1lido",
            "validation-custom-formatted": "{0} inv\xe1lido",
            "validation-async": "Valor inv\xe1lido",
            "validation-async-formatted": "{0} inv\xe1lido",
            "validation-compare": "Valores no coinciden",
            "validation-compare-formatted": "{0} no coinciden",
            "validation-pattern": "Valor no coincide con el patr\xf3n",
            "validation-pattern-formatted": "{0} no coincide con el patr\xf3n",
            "validation-email": "Email inv\xe1lido",
            "validation-email-formatted": "{0} inv\xe1lido",
            "validation-mask": "Valor inv\xe1lido",
            "dxLookup-searchPlaceholder": "Cantidad m\xednima de caracteres: {0}",
            "dxList-pullingDownText": "Desliza hacia abajo para actualizar...",
            "dxList-pulledDownText": "Suelta para actualizar...",
            "dxList-refreshingText": "Actualizando...",
            "dxList-pageLoadingText": "Cargando...",
            "dxList-nextButtonText": "M\xe1s",
            "dxList-selectAll": "Seleccionar Todo",
            "dxListEditDecorator-delete": "Eliminar",
            "dxListEditDecorator-more": "M\xe1s",
            "dxScrollView-pullingDownText": "Desliza hacia abajo para actualizar...",
            "dxScrollView-pulledDownText": "Suelta para actualizar...",
            "dxScrollView-refreshingText": "Actualizando...",
            "dxScrollView-reachBottomText": "Cargando...",
            "dxDateBox-simulatedDataPickerTitleTime": "Seleccione hora",
            "dxDateBox-simulatedDataPickerTitleDate": "Seleccione fecha",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Seleccione fecha y hora",
            "dxDateBox-validation-datetime": "Valor debe ser una fecha u hora",
            "dxFileUploader-selectFile": "Seleccionar archivo",
            "dxFileUploader-dropFile": "o arrastre un archivo aqu\xed",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Subir",
            "dxFileUploader-uploaded": "Subido",
            "dxFileUploader-readyToUpload": "Listo para subir",
            "dxFileUploader-uploadFailedMessage": "Falla ao subir",
            "dxFileUploader-invalidFileExtension": "Tipo de archivo no est\xe1 permitido",
            "dxFileUploader-invalidMaxFileSize": "Archivo es muy grande",
            "dxFileUploader-invalidMinFileSize": "Archivo es muy peque\xf1o",
            "dxRangeSlider-ariaFrom": "Desde",
            "dxRangeSlider-ariaTill": "Hasta",
            "dxSwitch-switchedOnText": "ENCENDIDO",
            "dxSwitch-switchedOffText": "APAGADO",
            "dxForm-optionalMark": "opcional",
            "dxForm-requiredMessage": "{0} es obligatorio",
            "dxNumberBox-invalidValueMessage": "Valor debe ser un n\xfamero",
            "dxNumberBox-noDataText": "Sin datos",
            "dxDataGrid-columnChooserTitle": "Selector de Columnas",
            "dxDataGrid-columnChooserEmptyText": "Arrastra una columna aqu\xed para ocultarla",
            "dxDataGrid-groupContinuesMessage": "Contin\xfaa en la p\xe1gina siguiente",
            "dxDataGrid-groupContinuedMessage": "Continuaci\xf3n de la p\xe1gina anterior",
            "dxDataGrid-groupHeaderText": "Agrupar por esta columna",
            "dxDataGrid-ungroupHeaderText": "Desagrupar",
            "dxDataGrid-ungroupAllText": "Desagrupar Todo",
            "dxDataGrid-editingEditRow": "Modificar",
            "dxDataGrid-editingSaveRowChanges": "Guardar",
            "dxDataGrid-editingCancelRowChanges": "Cancelar",
            "dxDataGrid-editingDeleteRow": "Eliminar",
            "dxDataGrid-editingUndeleteRow": "Recuperar",
            "dxDataGrid-editingConfirmDeleteMessage": "\xbfEst\xe1 seguro que desea eliminar este registro?",
            "dxDataGrid-validationCancelChanges": "Cancelar cambios",
            "dxDataGrid-groupPanelEmptyText": "Arrastra una columna aqu\xed para agrupar por ella",
            "dxDataGrid-noDataText": "Sin datos",
            "dxDataGrid-searchPanelPlaceholder": "Buscar...",
            "dxDataGrid-filterRowShowAllText": "(Todos)",
            "dxDataGrid-filterRowResetOperationText": "Reestablecer",
            "dxDataGrid-filterRowOperationEquals": "Igual",
            "dxDataGrid-filterRowOperationNotEquals": "No es igual",
            "dxDataGrid-filterRowOperationLess": "Menor que",
            "dxDataGrid-filterRowOperationLessOrEquals": "Menor o igual a",
            "dxDataGrid-filterRowOperationGreater": "Mayor que",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Mayor o igual a",
            "dxDataGrid-filterRowOperationStartsWith": "Empieza con",
            "dxDataGrid-filterRowOperationContains": "Contiene",
            "dxDataGrid-filterRowOperationNotContains": "No contiene",
            "dxDataGrid-filterRowOperationEndsWith": "Termina con",
            "dxDataGrid-filterRowOperationBetween": "Entre",
            "dxDataGrid-filterRowOperationBetweenStartText": "Inicio",
            "dxDataGrid-filterRowOperationBetweenEndText": "Fin",
            "dxDataGrid-applyFilterText": "Filtrar",
            "dxDataGrid-trueText": "verdadero",
            "dxDataGrid-falseText": "falso",
            "dxDataGrid-sortingAscendingText": "Orden Ascendente",
            "dxDataGrid-sortingDescendingText": "Orden Descendente",
            "dxDataGrid-sortingClearText": "Limpiar Ordenamiento",
            "dxDataGrid-editingSaveAllChanges": "Guardar cambios",
            "dxDataGrid-editingCancelAllChanges": "Descartar cambios",
            "dxDataGrid-editingAddRow": "Agregar una fila",
            "dxDataGrid-summaryMin": "M\xedn: {0}",
            "dxDataGrid-summaryMinOtherColumn": "M\xedn de {1} es {0}",
            "dxDataGrid-summaryMax": "M\xe1x: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "M\xe1x de {1} es {0}",
            "dxDataGrid-summaryAvg": "Prom: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Prom de {1} es {0}",
            "dxDataGrid-summarySum": "Suma: {0}",
            "dxDataGrid-summarySumOtherColumn": "Suma de {1} es {0}",
            "dxDataGrid-summaryCount": "Cantidad: {0}",
            "dxDataGrid-columnFixingFix": "Anclar",
            "dxDataGrid-columnFixingUnfix": "Desanclar",
            "dxDataGrid-columnFixingLeftPosition": "A la izquierda",
            "dxDataGrid-columnFixingRightPosition": "A la derecha",
            "dxDataGrid-exportTo": "Exportar",
            "dxDataGrid-exportToExcel": "Exportar a archivo Excel",
            "dxDataGrid-exporting": "Exportar...",
            "dxDataGrid-excelFormat": "Archivo Excel",
            "dxDataGrid-selectedRows": "Filas seleccionadas",
            "dxDataGrid-exportSelectedRows": "Exportar filas seleccionadas",
            "dxDataGrid-exportAll": "Exportar todo",
            "dxDataGrid-headerFilterEmptyValue": "(Vacio)",
            "dxDataGrid-headerFilterOK": "Aceptar",
            "dxDataGrid-headerFilterCancel": "Cancelar",
            "dxDataGrid-ariaColumn": "Columna",
            "dxDataGrid-ariaValue": "Valor",
            "dxDataGrid-ariaFilterCell": "Celda de filtro",
            "dxDataGrid-ariaCollapse": "Colapsar",
            "dxDataGrid-ariaExpand": "Expandir",
            "dxDataGrid-ariaDataGrid": "Tabla de datos",
            "dxDataGrid-ariaSearchInGrid": "Buscar en la tabla de datos",
            "dxDataGrid-ariaSelectAll": "Seleccionar todo",
            "dxDataGrid-ariaSelectRow": "Seleccionar fila",
            "dxDataGrid-filterBuilderPopupTitle": "Constructor de filtro",
            "dxDataGrid-filterPanelCreateFilter": "Crear filtro",
            "dxDataGrid-filterPanelClearFilter": "Limpiar filtro",
            "dxDataGrid-filterPanelFilterEnabledHint": "Habilitar filtro",
            "dxTreeList-ariaTreeList": "Lista de \xe1rbol",
            "dxTreeList-editingAddRowToNode": "A\xf1adir",
            "dxPager-infoText": "P\xe1gina {0} de {1} ({2} \xedtems)",
            "dxPager-pagesCountText": "de",
            "dxPivotGrid-grandTotal": "Gran Total",
            "dxPivotGrid-total": "{0} Total",
            "dxPivotGrid-fieldChooserTitle": "Selector de Campos",
            "dxPivotGrid-showFieldChooser": "Mostrar Selector de Campos",
            "dxPivotGrid-expandAll": "Expandir Todo",
            "dxPivotGrid-collapseAll": "Colapsar Todo",
            "dxPivotGrid-sortColumnBySummary": 'Ordenar "{0}" por esta columna',
            "dxPivotGrid-sortRowBySummary": 'Ordenar "{0}" por esta fila',
            "dxPivotGrid-removeAllSorting": "Remover ordenamiento",
            "dxPivotGrid-dataNotAvailable": "N/A",
            "dxPivotGrid-rowFields": "Campos de fila",
            "dxPivotGrid-columnFields": "Campos de columna",
            "dxPivotGrid-dataFields": "Campos de dato",
            "dxPivotGrid-filterFields": "Campos de filtro",
            "dxPivotGrid-allFields": "Todos los campos",
            "dxPivotGrid-columnFieldArea": "Arrastra campos de columna aqu\xed",
            "dxPivotGrid-dataFieldArea": "Arrastra campos de dato aqu\xed",
            "dxPivotGrid-rowFieldArea": "Arrastra campos de fila aqu\xed",
            "dxPivotGrid-filterFieldArea": "Arrastra campos de filtro aqu\xed",
            "dxScheduler-editorLabelTitle": "Asunto",
            "dxScheduler-editorLabelStartDate": "Fecha inicial",
            "dxScheduler-editorLabelEndDate": "Fecha final",
            "dxScheduler-editorLabelDescription": "Descripci\xf3n",
            "dxScheduler-editorLabelRecurrence": "Repetir",
            "dxScheduler-openAppointment": "Abrir cita",
            "dxScheduler-recurrenceNever": "Nunca",
            "dxScheduler-recurrenceMinutely": "Minutely",
            "dxScheduler-recurrenceHourly": "Hourly",
            "dxScheduler-recurrenceDaily": "Diario",
            "dxScheduler-recurrenceWeekly": "Semanal",
            "dxScheduler-recurrenceMonthly": "Mensual",
            "dxScheduler-recurrenceYearly": "Anual",
            "dxScheduler-recurrenceRepeatEvery": "Cada",
            "dxScheduler-recurrenceRepeatOn": "Repeat On",
            "dxScheduler-recurrenceEnd": "Terminar repetici\xf3n",
            "dxScheduler-recurrenceAfter": "Despu\xe9s",
            "dxScheduler-recurrenceOn": "En",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "d\xeda(s)",
            "dxScheduler-recurrenceRepeatWeekly": "semana(s)",
            "dxScheduler-recurrenceRepeatMonthly": "mes(es)",
            "dxScheduler-recurrenceRepeatYearly": "a\xf1o(s)",
            "dxScheduler-switcherDay": "D\xeda",
            "dxScheduler-switcherWeek": "Semana",
            "dxScheduler-switcherWorkWeek": "Semana Laboral",
            "dxScheduler-switcherMonth": "Mes",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-switcherTimelineDay": "L\xednea de tiempo D\xeda",
            "dxScheduler-switcherTimelineWeek": "L\xednea de tiempo Semana",
            "dxScheduler-switcherTimelineWorkWeek": "L\xednea de tiempo Semana Laboral",
            "dxScheduler-switcherTimelineMonth": "L\xednea de tiempo Mes",
            "dxScheduler-recurrenceRepeatOnDate": "en la fecha",
            "dxScheduler-recurrenceRepeatCount": "ocurrencia(s)",
            "dxScheduler-allDay": "Todo el d\xeda",
            "dxScheduler-confirmRecurrenceEditMessage": "\xbfQuiere modificar solo esta cita o toda la serie?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "\xbfQuiere eliminar solo esta cita o toda la serie?",
            "dxScheduler-confirmRecurrenceEditSeries": "Modificar serie",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Eliminar serie",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Modificar cita",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Eliminar cita",
            "dxScheduler-noTimezoneTitle": "Sin zona horaria",
            "dxScheduler-moreAppointments": "{0} m\xe1s",
            "dxCalendar-todayButtonText": "Hoy",
            "dxCalendar-ariaWidgetName": "Calendario",
            "dxColorView-ariaRed": "Rojo",
            "dxColorView-ariaGreen": "Verde",
            "dxColorView-ariaBlue": "Azul",
            "dxColorView-ariaAlpha": "Transparencia",
            "dxColorView-ariaHex": "C\xf3digo del color",
            "dxTagBox-selected": "{0} seleccionado",
            "dxTagBox-allSelected": "Todos seleccionados ({0})",
            "dxTagBox-moreSelected": "{0} m\xe1s",
            "vizExport-printingButtonText": "Imprimir",
            "vizExport-titleMenuText": "Exportar/Imprimir",
            "vizExport-exportButtonText": "Archivo {0}",
            "dxFilterBuilder-and": "Y",
            "dxFilterBuilder-or": "O",
            "dxFilterBuilder-notAnd": "NO Y",
            "dxFilterBuilder-notOr": "NO O",
            "dxFilterBuilder-addCondition": "A\xf1adir condici\xf3n",
            "dxFilterBuilder-addGroup": "A\xf1adir Grupo",
            "dxFilterBuilder-enterValueText": "<rellene con un valor>",
            "dxFilterBuilder-filterOperationEquals": "Igual",
            "dxFilterBuilder-filterOperationNotEquals": "Diferente",
            "dxFilterBuilder-filterOperationLess": "Menos que",
            "dxFilterBuilder-filterOperationLessOrEquals": "Menor o igual que",
            "dxFilterBuilder-filterOperationGreater": "M\xe1s grande que",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Mayor o igual que",
            "dxFilterBuilder-filterOperationStartsWith": "Comienza con",
            "dxFilterBuilder-filterOperationContains": "Contiene",
            "dxFilterBuilder-filterOperationNotContains": "No contiene",
            "dxFilterBuilder-filterOperationEndsWith": "Termina con",
            "dxFilterBuilder-filterOperationIsBlank": "Vac\xedo",
            "dxFilterBuilder-filterOperationIsNotBlank": "No vac\xedo",
            "dxFilterBuilder-filterOperationBetween": "Entre",
            "dxFilterBuilder-filterOperationAnyOf": "Alguno de",
            "dxFilterBuilder-filterOperationNoneOf": "Ning\xfan de",
            "dxHtmlEditor-dialogColorCaption": "Cambiar el color de la fuente",
            "dxHtmlEditor-dialogBackgroundCaption": "Cambiar el color de fondo",
            "dxHtmlEditor-dialogLinkCaption": "A\xf1adir enlace",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Texto",
            "dxHtmlEditor-dialogLinkTargetField": "Abrir enlace en nueva ventana",
            "dxHtmlEditor-dialogImageCaption": "A\xf1adir imagen",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Texto alternativo",
            "dxHtmlEditor-dialogImageWidthField": "Anchura (px)",
            "dxHtmlEditor-dialogImageHeightField": "Altura (px)",
            "dxHtmlEditor-heading": "Encabezamiento",
            "dxHtmlEditor-normalText": "Texto normal",
            "dxFileManager-newDirectoryName": "Sin t\xedtulo",
            "dxFileManager-rootDirectoryName": "Archivos",
            "dxFileManager-errorNoAccess": "Acceso denegado. La operaci\xf3n no se puede completar.",
            "dxFileManager-errorDirectoryExistsFormat": "Carpeta {0} ya existe.",
            "dxFileManager-errorFileExistsFormat": "Archivo {0} ya existe.",
            "dxFileManager-errorFileNotFoundFormat": "Archivo {0} no encontrado.",
            "dxFileManager-errorDirectoryNotFoundFormat": "TODO",
            "dxFileManager-errorWrongFileExtension": "TODO",
            "dxFileManager-errorMaxFileSizeExceeded": "TODO",
            "dxFileManager-errorInvalidSymbols": "TODO",
            "dxFileManager-errorDefault": "Error no especificado",
            "dxFileManager-errorDirectoryOpenFailed": "TODO",
            "dxFileManager-commandCreate": "TODO",
            "dxFileManager-commandRename": "TODO",
            "dxFileManager-commandMove": "TODO",
            "dxFileManager-commandCopy": "TODO",
            "dxFileManager-commandDelete": "TODO",
            "dxFileManager-commandDownload": "TODO",
            "dxFileManager-commandUpload": "TODO",
            "dxFileManager-commandRefresh": "TODO",
            "dxFileManager-commandThumbnails": "TODO",
            "dxFileManager-commandDetails": "TODO",
            "dxFileManager-commandClearSelection": "TODO",
            "dxFileManager-commandShowNavPane": "TODO",
            "dxFileManager-dialogDirectoryChooserTitle": "TODO",
            "dxFileManager-dialogDirectoryChooserButtonText": "TODO",
            "dxFileManager-dialogRenameItemTitle": "TODO",
            "dxFileManager-dialogRenameItemButtonText": "TODO",
            "dxFileManager-dialogCreateDirectoryTitle": "TODO",
            "dxFileManager-dialogCreateDirectoryButtonText": "TODO",
            "dxFileManager-dialogDeleteItemTitle": "TODO",
            "dxFileManager-dialogDeleteItemButtonText": "TODO",
            "dxFileManager-dialogDeleteItemSingleItemConfirmation": "TODO",
            "dxFileManager-dialogDeleteItemMultipleItemsConfirmation": "TODO",
            "dxFileManager-editingCreateSingleItemProcessingMessage": "TODO",
            "dxFileManager-editingCreateSingleItemSuccessMessage": "TODO",
            "dxFileManager-editingCreateSingleItemErrorMessage": "TODO",
            "dxFileManager-editingCreateCommonErrorMessage": "TODO",
            "dxFileManager-editingRenameSingleItemProcessingMessage": "TODO",
            "dxFileManager-editingRenameSingleItemSuccessMessage": "TODO",
            "dxFileManager-editingRenameSingleItemErrorMessage": "TODO",
            "dxFileManager-editingRenameCommonErrorMessage": "TODO",
            "dxFileManager-editingDeleteSingleItemProcessingMessage": "TODO",
            "dxFileManager-editingDeleteMultipleItemsProcessingMessage": "TODO",
            "dxFileManager-editingDeleteSingleItemSuccessMessage": "TODO",
            "dxFileManager-editingDeleteMultipleItemsSuccessMessage": "TODO",
            "dxFileManager-editingDeleteSingleItemErrorMessage": "TODO",
            "dxFileManager-editingDeleteMultipleItemsErrorMessage": "TODO",
            "dxFileManager-editingDeleteCommonErrorMessage": "TODO",
            "dxFileManager-editingMoveSingleItemProcessingMessage": "TODO",
            "dxFileManager-editingMoveMultipleItemsProcessingMessage": "TODO",
            "dxFileManager-editingMoveSingleItemSuccessMessage": "TODO",
            "dxFileManager-editingMoveMultipleItemsSuccessMessage": "TODO",
            "dxFileManager-editingMoveSingleItemErrorMessage": "TODO",
            "dxFileManager-editingMoveMultipleItemsErrorMessage": "TODO",
            "dxFileManager-editingMoveCommonErrorMessage": "TODO",
            "dxFileManager-editingCopySingleItemProcessingMessage": "TODO",
            "dxFileManager-editingCopyMultipleItemsProcessingMessage": "TODO",
            "dxFileManager-editingCopySingleItemSuccessMessage": "TODO",
            "dxFileManager-editingCopyMultipleItemsSuccessMessage": "TODO",
            "dxFileManager-editingCopySingleItemErrorMessage": "TODO",
            "dxFileManager-editingCopyMultipleItemsErrorMessage": "TODO",
            "dxFileManager-editingCopyCommonErrorMessage": "TODO",
            "dxFileManager-editingUploadSingleItemProcessingMessage": "TODO",
            "dxFileManager-editingUploadMultipleItemsProcessingMessage": "TODO",
            "dxFileManager-editingUploadSingleItemSuccessMessage": "TODO",
            "dxFileManager-editingUploadMultipleItemsSuccessMessage": "TODO",
            "dxFileManager-editingUploadSingleItemErrorMessage": "TODO",
            "dxFileManager-editingUploadMultipleItemsErrorMessage": "TODO",
            "dxFileManager-editingUploadCanceledMessage": "TODO",
            "dxFileManager-listDetailsColumnCaptionName": "TODO",
            "dxFileManager-listDetailsColumnCaptionDateModified": "TODO",
            "dxFileManager-listDetailsColumnCaptionFileSize": "TODO",
            "dxFileManager-listThumbnailsTooltipTextSize": "TODO",
            "dxFileManager-listThumbnailsTooltipTextDateModified": "TODO",
            "dxFileManager-notificationProgressPanelTitle": "TODO",
            "dxFileManager-notificationProgressPanelEmptyListText": "TODO",
            "dxFileManager-notificationProgressPanelOperationCanceled": "TODO",
            "dxDiagram-categoryGeneral": "General",
            "dxDiagram-categoryFlowchart": "Diagrama de flujo",
            "dxDiagram-categoryOrgChart": "Organigrama",
            "dxDiagram-categoryContainers": "Contenedores",
            "dxDiagram-categoryCustom": "Personalizado",
            "dxDiagram-commandExportToSvg": "Exportar a SVG",
            "dxDiagram-commandExportToPng": "Exportar a PNG",
            "dxDiagram-commandExportToJpg": "Exportar a JPG",
            "dxDiagram-commandUndo": "Deshacer",
            "dxDiagram-commandRedo": "Rehacer",
            "dxDiagram-commandFontName": "Nombre de fuente",
            "dxDiagram-commandFontSize": "Tama\xf1o de fuente",
            "dxDiagram-commandBold": "Negrita",
            "dxDiagram-commandItalic": "Cursiva",
            "dxDiagram-commandUnderline": "Subrayado",
            "dxDiagram-commandTextColor": "Color de fuente",
            "dxDiagram-commandLineColor": "Color de l\xednea",
            "dxDiagram-commandLineWidth": "Ancho de l\xednea",
            "dxDiagram-commandLineStyle": "Estilo de l\xednea",
            "dxDiagram-commandLineStyleSolid": "S\xf3lido",
            "dxDiagram-commandLineStyleDotted": "De puntos",
            "dxDiagram-commandLineStyleDashed": "De guiones",
            "dxDiagram-commandFillColor": "Color de relleno",
            "dxDiagram-commandAlignLeft": "Alinear a la izquierda",
            "dxDiagram-commandAlignCenter": "Alinear al centro",
            "dxDiagram-commandAlignRight": "Alinear a la derecha",
            "dxDiagram-commandConnectorLineType": "Tipo de l\xednea de conector",
            "dxDiagram-commandConnectorLineStraight": "Recto",
            "dxDiagram-commandConnectorLineOrthogonal": "Ortogonal",
            "dxDiagram-commandConnectorLineStart": "Conector de inicio de l\xednea",
            "dxDiagram-commandConnectorLineEnd": "Conector de final de l\xednea",
            "dxDiagram-commandConnectorLineNone": "Ninguno",
            "dxDiagram-commandConnectorLineArrow": "Flecha",
            "dxDiagram-commandFullscreen": "Pantalla completa",
            "dxDiagram-commandUnits": "Unidades",
            "dxDiagram-commandPageSize": "Tama\xf1o de p\xe1gina",
            "dxDiagram-commandPageOrientation": "Orientaci\xf3n de p\xe1gina",
            "dxDiagram-commandPageOrientationLandscape": "Horizontal",
            "dxDiagram-commandPageOrientationPortrait": "Vertical",
            "dxDiagram-commandPageColor": "Color de p\xe1gina",
            "dxDiagram-commandShowGrid": "Mostrar cuadr\xedcula",
            "dxDiagram-commandSnapToGrid": "Ajustar a la cuadr\xedcula",
            "dxDiagram-commandGridSize": "Tama\xf1o de cuadr\xedcula",
            "dxDiagram-commandZoomLevel": "Nivel de zoom",
            "dxDiagram-commandAutoZoom": "Zoom autom\xe1tico",
            "dxDiagram-commandFitToContent": "Ajustar al contenido",
            "dxDiagram-commandFitToWidth": "Ajustar al ancho",
            "dxDiagram-commandAutoZoomByContent": "Zoom autom\xe1tico por contenido",
            "dxDiagram-commandAutoZoomByWidth": "Zoom autom\xe1tico por ancho",
            "dxDiagram-commandSimpleView": "Vista Simple",
            "dxDiagram-commandCut": "Cortar",
            "dxDiagram-commandCopy": "Copiar",
            "dxDiagram-commandPaste": "Pegar",
            "dxDiagram-commandSelectAll": "Seleccionar todo",
            "dxDiagram-commandDelete": "Eliminar",
            "dxDiagram-commandBringToFront": "Traer al frente",
            "dxDiagram-commandSendToBack": "Enviar al fondo",
            "dxDiagram-commandLock": "Bloquear",
            "dxDiagram-commandUnlock": "Desbloquear",
            "dxDiagram-commandInsertShapeImage": "Insertar imagen...",
            "dxDiagram-commandEditShapeImage": "Cambiar imagen...",
            "dxDiagram-commandDeleteShapeImage": "Eliminar imagen",
            "dxDiagram-commandLayoutLeftToRight": "De izquierda a derecha",
            "dxDiagram-commandLayoutRightToLeft": "De derecha a izquierda",
            "dxDiagram-commandLayoutTopToBottom": "De arriba a abajo",
            "dxDiagram-commandLayoutBottomToTop": "De abajo a arriba",
            "dxDiagram-unitIn": "pulg.",
            "dxDiagram-unitCm": "cm",
            "dxDiagram-unitPx": "px",
            "dxDiagram-dialogButtonOK": "Aceptar",
            "dxDiagram-dialogButtonCancel": "Cancelar",
            "dxDiagram-dialogInsertShapeImageTitle": "Insertar Imagen",
            "dxDiagram-dialogEditShapeImageTitle": "Cambiar Imagen",
            "dxDiagram-dialogEditShapeImageSelectButton": "Seleccionar imagen",
            "dxDiagram-dialogEditShapeImageLabelText": "o colocar el archivo aqu\xed",
            "dxDiagram-uiExport": "Exportar",
            "dxDiagram-uiProperties": "Propiedades",
            "dxDiagram-uiSettings": "Configuraci\xf3n",
            "dxDiagram-uiShowToolbox": "Cuadro de herramientas",
            "dxDiagram-uiSearch": "Buscar",
            "dxDiagram-uiStyle": "Estilo",
            "dxDiagram-uiLayout": "Dise\xf1o",
            "dxDiagram-uiLayoutTree": "\xc1rbol",
            "dxDiagram-uiLayoutLayered": "Capas",
            "dxDiagram-uiDiagram": "Diagrama",
            "dxDiagram-uiText": "Texto",
            "dxDiagram-uiObject": "Objeto",
            "dxDiagram-uiConnector": "Conector",
            "dxDiagram-uiPage": "P\xe1gina",
            "dxDiagram-shapeText": "Texto",
            "dxDiagram-shapeRectangle": "Rect\xe1ngulo",
            "dxDiagram-shapeEllipse": "Elipse",
            "dxDiagram-shapeCross": "Cruz",
            "dxDiagram-shapeTriangle": "Tri\xe1ngulo",
            "dxDiagram-shapeDiamond": "Rombo",
            "dxDiagram-shapeHeart": "Coraz\xf3n",
            "dxDiagram-shapePentagon": "Pent\xe1gono",
            "dxDiagram-shapeHexagon": "Hex\xe1gono",
            "dxDiagram-shapeOctagon": "Oct\xe1gono",
            "dxDiagram-shapeStar": "Estrella",
            "dxDiagram-shapeArrowLeft": "Flecha izquierda",
            "dxDiagram-shapeArrowUp": "Flecha arriba",
            "dxDiagram-shapeArrowRight": "Flecha derecha",
            "dxDiagram-shapeArrowDown": "Flecha abajo",
            "dxDiagram-shapeArrowUpDown": "Flecha arriba/abajo",
            "dxDiagram-shapeArrowLeftRight": "Flecha izquierda/derecha",
            "dxDiagram-shapeProcess": "Proceso",
            "dxDiagram-shapeDecision": "Decisi\xf3n",
            "dxDiagram-shapeTerminator": "Terminador",
            "dxDiagram-shapePredefinedProcess": "Proceso predefinido",
            "dxDiagram-shapeDocument": "Documento",
            "dxDiagram-shapeMultipleDocuments": "Varios documentos",
            "dxDiagram-shapeManualInput": "Entrada manual",
            "dxDiagram-shapePreparation": "Preparaci\xf3n",
            "dxDiagram-shapeData": "Datos",
            "dxDiagram-shapeDatabase": "Base de datos",
            "dxDiagram-shapeHardDisk": "Disco duro",
            "dxDiagram-shapeInternalStorage": "Almacenamiento interno",
            "dxDiagram-shapePaperTape": "Cinta de papel",
            "dxDiagram-shapeManualOperation": "Operaci\xf3n manual",
            "dxDiagram-shapeDelay": "Retraso",
            "dxDiagram-shapeStoredData": "Datos almacenados",
            "dxDiagram-shapeDisplay": "Pantalla",
            "dxDiagram-shapeMerge": "Combinar",
            "dxDiagram-shapeConnector": "Conector",
            "dxDiagram-shapeOr": "O",
            "dxDiagram-shapeSummingJunction": "Uni\xf3n en Y",
            "dxDiagram-shapeContainerDefaultText": "Contenedor",
            "dxDiagram-shapeVerticalContainer": "Contenedor vertical",
            "dxDiagram-shapeHorizontalContainer": "Contenedor horizontal",
            "dxDiagram-shapeCardDefaultText": "Nombre de persona",
            "dxDiagram-shapeCardWithImageOnLeft": "Tarjeta con imagen a la izquierda",
            "dxDiagram-shapeCardWithImageOnTop": "Tarjeta con imagen en la parte superior",
            "dxDiagram-shapeCardWithImageOnRight": "Tarjeta con imagen a la derecha",
            "dxGantt-dialogTitle": "TODO",
            "dxGantt-dialogStartTitle": "TODO",
            "dxGantt-dialogEndTitle": "TODO",
            "dxGantt-dialogProgressTitle": "TODO",
            "dxGantt-dialogResourcesTitle": "TODO",
            "dxGantt-dialogResourceManagerTitle": "TODO",
            "dxGantt-dialogTaskDetailsTitle": "TODO",
            "dxGantt-dialogEditResourceListHint": "TODO",
            "dxGantt-dialogEditNoResources": "TODO",
            "dxGantt-dialogButtonAdd": "TODO",
            "dxGantt-contextMenuNewTask": "TODO",
            "dxGantt-contextMenuNewSubtask": "TODO",
            "dxGantt-contextMenuDeleteTask": "TODO",
            "dxGantt-contextMenuDeleteDependency": "TODO",
            "dxGantt-dialogTaskDeleteConfirmation": "TODO",
            "dxGantt-dialogDependencyDeleteConfirmation": "TODO",
            "dxGantt-dialogResourcesDeleteConfirmation": "TODO",
            "dxGantt-dialogConstraintCriticalViolationMessage": "TODO",
            "dxGantt-dialogConstraintViolationMessage": "TODO",
            "dxGantt-dialogCancelOperationMessage": "TODO",
            "dxGantt-dialogDeleteDependencyMessage": "TODO",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "TODO",
            "dxGantt-undo": "TODO",
            "dxGantt-redo": "TODO",
            "dxGantt-expandAll": "TODO",
            "dxGantt-collapseAll": "TODO",
            "dxGantt-addNewTask": "TODO",
            "dxGantt-deleteSelectedTask": "TODO",
            "dxGantt-zoomIn": "TODO",
            "dxGantt-zoomOut": "TODO",
            "dxGantt-fullScreen": "TODO"
        }
    })
});
