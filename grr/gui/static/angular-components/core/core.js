'use strict';

goog.provide('grrUi.core.module');

goog.require('grrUi.core.aff4DownloadLinkDirective.Aff4DownloadLinkDirective');
goog.require('grrUi.core.aff4ObjectRepresentationDirective.Aff4ObjectRepresentationDirective');
goog.require('grrUi.core.apiItemsProviderDirective.ApiItemsProviderDirective');
goog.require('grrUi.core.apiService.ApiService');
goog.require('grrUi.core.basenameFilter.BasenameFilter');
goog.require('grrUi.core.bindKeyDirective.BindKeyDirective');
goog.require('grrUi.core.bytesToHexFilter.BytesToHexFilter');
goog.require('grrUi.core.clockDirective.ClockDirective');
goog.require('grrUi.core.confirmationDialogDirective.ConfirmationDialogDirective');
goog.require('grrUi.core.dialogService.DialogService');
goog.require('grrUi.core.downloadCollectionFilesDirective.DownloadCollectionFilesDirective');
goog.require('grrUi.core.encodeUriComponentFilter.EncodeUriComponentFilter');
goog.require('grrUi.core.forceRefreshDirective.ForceRefreshDirective');
goog.require('grrUi.core.hexNumberFilter.HexNumberFilter');
goog.require('grrUi.core.infiniteTableDirective.InfiniteTableDirective');
goog.require('grrUi.core.legacyRendererDirective.LegacyRendererDirective');
goog.require('grrUi.core.loadingIndicatorDirective.LoadingIndicatorDirective');
goog.require('grrUi.core.loadingIndicatorService.LoadingIndicatorService');
goog.require('grrUi.core.memoryItemsProviderDirective.MemoryItemsProviderDirective');
goog.require('grrUi.core.onScrollIntoViewDirective.OnScrollIntoViewDirective');
goog.require('grrUi.core.pagedFilteredTableDirective.PagedFilteredTableDirective');
goog.require('grrUi.core.pagedFilteredTableDirective.TableBottomDirective');
goog.require('grrUi.core.pagedFilteredTableDirective.TableTopDirective');
goog.require('grrUi.core.reflectionService.ReflectionService');
goog.require('grrUi.core.resultsCollectionDirective.ResultsCollectionDirective');
goog.require('grrUi.core.searchBoxDirective.SearchBoxDirective');
goog.require('grrUi.core.serverErrorButtonDirective.ServerErrorButtonDirective');
goog.require('grrUi.core.serverErrorDialogDirective.ServerErrorDialogDirective');
goog.require('grrUi.core.serverErrorInterceptorFactory.ServerErrorInterceptorFactory');
goog.require('grrUi.core.serverErrorPreviewDirective.ServerErrorPreviewDirective');
goog.require('grrUi.core.splitterDirective.SplitterDirective');
goog.require('grrUi.core.splitterDirective.SplitterPaneDirective');
goog.require('grrUi.core.timeService.TimeService');
goog.require('grrUi.core.timeSinceFilter.TimeSinceFilter');
goog.require('grrUi.core.timestampFilter.TimestampFilter');
goog.require('grrUi.core.versionDropdownDirective.VersionDropdownDirective');
goog.require('grrUi.core.wizardFormDirective.WizardFormDirective');
goog.require('grrUi.core.wizardFormPageDirective.WizardFormPageDirective');


/**
 * Angular module for core GRR UI components.
 */
grrUi.core.module = angular.module('grrUi.core', ['ngCookies',
                                                  'ui.bootstrap']);


grrUi.core.module.directive(
    grrUi.core.aff4ObjectRepresentationDirective.Aff4ObjectRepresentationDirective.directive_name,
    grrUi.core.aff4ObjectRepresentationDirective.Aff4ObjectRepresentationDirective);
grrUi.core.module.directive(
    grrUi.core.aff4DownloadLinkDirective.Aff4DownloadLinkDirective
        .directive_name,
    grrUi.core.aff4DownloadLinkDirective.Aff4DownloadLinkDirective);
grrUi.core.module.directive(
    grrUi.core.apiItemsProviderDirective.
        ApiItemsProviderDirective.directive_name,
    grrUi.core.apiItemsProviderDirective.ApiItemsProviderDirective);
grrUi.core.module.directive(
    grrUi.core.bindKeyDirective.BindKeyDirective.directive_name,
    grrUi.core.bindKeyDirective.BindKeyDirective);
grrUi.core.module.directive(
    grrUi.core.versionDropdownDirective.VersionDropdownDirective.directive_name,
    grrUi.core.versionDropdownDirective.VersionDropdownDirective);
grrUi.core.module.directive(
    grrUi.core.forceRefreshDirective.ForceRefreshDirective.directive_name,
    grrUi.core.forceRefreshDirective.ForceRefreshDirective);
grrUi.core.module.directive(
    grrUi.core.legacyRendererDirective.LegacyRendererDirective.directive_name,
    grrUi.core.legacyRendererDirective.LegacyRendererDirective);
grrUi.core.module.directive(
    grrUi.core.loadingIndicatorDirective.LoadingIndicatorDirective.directive_name,
    grrUi.core.loadingIndicatorDirective.LoadingIndicatorDirective);
grrUi.core.module.directive(
    grrUi.core.onScrollIntoViewDirective.OnScrollIntoViewDirective
        .directive_name,
    grrUi.core.onScrollIntoViewDirective.OnScrollIntoViewDirective);
grrUi.core.module.directive(
    grrUi.core.memoryItemsProviderDirective.
        MemoryItemsProviderDirective.directive_name,
    grrUi.core.memoryItemsProviderDirective.MemoryItemsProviderDirective);
grrUi.core.module.directive(
    grrUi.core.pagedFilteredTableDirective.
        PagedFilteredTableDirective.directive_name,
    grrUi.core.pagedFilteredTableDirective.PagedFilteredTableDirective);
grrUi.core.module.directive(
    grrUi.core.pagedFilteredTableDirective.TableTopDirective.directive_name,
    grrUi.core.pagedFilteredTableDirective.TableTopDirective);
grrUi.core.module.directive(
    grrUi.core.pagedFilteredTableDirective.TableBottomDirective.directive_name,
    grrUi.core.pagedFilteredTableDirective.TableBottomDirective);
grrUi.core.module.directive(
    grrUi.core.infiniteTableDirective.InfiniteTableDirective.directive_name,
    grrUi.core.infiniteTableDirective.InfiniteTableDirective);
grrUi.core.module.service(
    grrUi.core.apiService.ApiService.service_name,
    grrUi.core.apiService.ApiService);
grrUi.core.module.directive(
    grrUi.core.resultsCollectionDirective.ResultsCollectionDirective
        .directive_name,
    grrUi.core.resultsCollectionDirective.ResultsCollectionDirective);
grrUi.core.module.directive(
    grrUi.core.splitterDirective.SplitterDirective.directive_name,
    grrUi.core.splitterDirective.SplitterDirective);
grrUi.core.module.directive(
    grrUi.core.splitterDirective.SplitterPaneDirective.directive_name,
    grrUi.core.splitterDirective.SplitterPaneDirective);
grrUi.core.module.directive(
    grrUi.core.clockDirective.ClockDirective.directive_name,
    grrUi.core.clockDirective.ClockDirective);
grrUi.core.module.directive(
    grrUi.core.downloadCollectionFilesDirective
        .DownloadCollectionFilesDirective.directive_name,
    grrUi.core.downloadCollectionFilesDirective
        .DownloadCollectionFilesDirective);
grrUi.core.module.directive(
    grrUi.core.wizardFormDirective.WizardFormDirective.directive_name,
    grrUi.core.wizardFormDirective.WizardFormDirective);
grrUi.core.module.directive(
    grrUi.core.wizardFormPageDirective.WizardFormPageDirective.directive_name,
    grrUi.core.wizardFormPageDirective.WizardFormPageDirective);
grrUi.core.module.directive(
    grrUi.core.confirmationDialogDirective.ConfirmationDialogDirective.directive_name,
    grrUi.core.confirmationDialogDirective.ConfirmationDialogDirective);
grrUi.core.module.directive(
    grrUi.core.searchBoxDirective.SearchBoxDirective.directive_name,
    grrUi.core.searchBoxDirective.SearchBoxDirective);
grrUi.core.module.directive(
    grrUi.core.serverErrorButtonDirective.ServerErrorButtonDirective.directive_name,
    grrUi.core.serverErrorButtonDirective.ServerErrorButtonDirective);
grrUi.core.module.directive(
    grrUi.core.serverErrorDialogDirective.ServerErrorDialogDirective.directive_name,
    grrUi.core.serverErrorDialogDirective.ServerErrorDialogDirective);
grrUi.core.module.directive(
    grrUi.core.serverErrorPreviewDirective.ServerErrorPreviewDirective.directive_name,
    grrUi.core.serverErrorPreviewDirective.ServerErrorPreviewDirective);

grrUi.core.module.service(
    grrUi.core.reflectionService.ReflectionService.service_name,
    grrUi.core.reflectionService.ReflectionService);
grrUi.core.module.service(
    grrUi.core.timeService.TimeService.service_name,
    grrUi.core.timeService.TimeService);
grrUi.core.module.service(
    grrUi.core.dialogService.DialogService.service_name,
    grrUi.core.dialogService.DialogService);
grrUi.core.module.service(
    grrUi.core.loadingIndicatorService.LoadingIndicatorService.service_name,
    grrUi.core.loadingIndicatorService.LoadingIndicatorService);


grrUi.core.module.filter(grrUi.core.basenameFilter.BasenameFilter.filter_name,
                         grrUi.core.basenameFilter.BasenameFilter);
grrUi.core.module.filter(grrUi.core.bytesToHexFilter.BytesToHexFilter.filter_name,
                         grrUi.core.bytesToHexFilter.BytesToHexFilter);
grrUi.core.module.filter(
    grrUi.core.encodeUriComponentFilter.EncodeUriComponentFilter.filter_name,
    grrUi.core.encodeUriComponentFilter.EncodeUriComponentFilter);
grrUi.core.module.filter(grrUi.core.hexNumberFilter.HexNumberFilter.filter_name,
                         grrUi.core.hexNumberFilter.HexNumberFilter);
grrUi.core.module.filter(grrUi.core.timeSinceFilter.TimeSinceFilter.filter_name,
                         grrUi.core.timeSinceFilter.TimeSinceFilter);
grrUi.core.module.filter(grrUi.core.timestampFilter.TimestampFilter.filter_name,
                         grrUi.core.timestampFilter.TimestampFilter);

grrUi.core.module.factory(
    grrUi.core.serverErrorInterceptorFactory.ServerErrorInterceptorFactory.factory_name,
    grrUi.core.serverErrorInterceptorFactory.ServerErrorInterceptorFactory);


grrUi.core.module.config(function($httpProvider){
    $httpProvider.interceptors.push(
        grrUi.core.serverErrorInterceptorFactory.ServerErrorInterceptorFactory.factory_name
    );
});
