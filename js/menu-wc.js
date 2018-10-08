'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">@deja-js/component documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="changelog.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CHANGELOG
                        </a>
                    </li>
                    <li class="link">
                            <a href="contributing.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CONTRIBUTING
                        </a>
                    </li>
                    <li class="link">
                            <a href="license.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>LICENSE
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/CloningModule.html" data-type="entity-link">CloningModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-CloningModule-a5cd276ff25a1415196ce04e465d04b6"' : 'data-target="#xs-injectables-links-module-CloningModule-a5cd276ff25a1415196ce04e465d04b6"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-CloningModule-a5cd276ff25a1415196ce04e465d04b6"' : 'id="xs-injectables-links-module-CloningModule-a5cd276ff25a1415196ce04e465d04b6"' }>
                                        <li class="link">
                                            <a href="injectables/CloningService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>CloningService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaAccordionModule.html" data-type="entity-link">DejaAccordionModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaAccordionModule-d376aefc8737bbec45159b6895856e3f"' : 'data-target="#xs-components-links-module-DejaAccordionModule-d376aefc8737bbec45159b6895856e3f"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaAccordionModule-d376aefc8737bbec45159b6895856e3f"' : 'id="xs-components-links-module-DejaAccordionModule-d376aefc8737bbec45159b6895856e3f"' }>
                                        <li class="link">
                                            <a href="components/DejaAccordionBodyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaAccordionBodyComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaAccordionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaAccordionComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaAccordionGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaAccordionGroupComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaAccordionHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaAccordionHeaderComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaAutosizeTextAreaModule.html" data-type="entity-link">DejaAutosizeTextAreaModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DejaAutosizeTextAreaModule-7fd67af02500c8e48edacce8b198809e"' : 'data-target="#xs-directives-links-module-DejaAutosizeTextAreaModule-7fd67af02500c8e48edacce8b198809e"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DejaAutosizeTextAreaModule-7fd67af02500c8e48edacce8b198809e"' : 'id="xs-directives-links-module-DejaAutosizeTextAreaModule-7fd67af02500c8e48edacce8b198809e"' }>
                                        <li class="link">
                                            <a href="directives/DejaAutosizeTextAreaDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaAutosizeTextAreaDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaBoldQueryModule.html" data-type="entity-link">DejaBoldQueryModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaBoldQueryModule-cf4ad136bc1c2e208f1ff62ba62c212d"' : 'data-target="#xs-components-links-module-DejaBoldQueryModule-cf4ad136bc1c2e208f1ff62ba62c212d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaBoldQueryModule-cf4ad136bc1c2e208f1ff62ba62c212d"' : 'id="xs-components-links-module-DejaBoldQueryModule-cf4ad136bc1c2e208f1ff62ba62c212d"' }>
                                        <li class="link">
                                            <a href="components/DejaBoldQueryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaBoldQueryComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaChildValidatorModule.html" data-type="entity-link">DejaChildValidatorModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DejaChildValidatorModule-8962e933b78ff4d8ebee3b2e3891463a"' : 'data-target="#xs-directives-links-module-DejaChildValidatorModule-8962e933b78ff4d8ebee3b2e3891463a"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DejaChildValidatorModule-8962e933b78ff4d8ebee3b2e3891463a"' : 'id="xs-directives-links-module-DejaChildValidatorModule-8962e933b78ff4d8ebee3b2e3891463a"' }>
                                        <li class="link">
                                            <a href="directives/DejaChildValidatorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaChildValidatorDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaChipsModule.html" data-type="entity-link">DejaChipsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaChipsModule-ead8078a587e2ab4c010d9bf06c3d2b0"' : 'data-target="#xs-components-links-module-DejaChipsModule-ead8078a587e2ab4c010d9bf06c3d2b0"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaChipsModule-ead8078a587e2ab4c010d9bf06c3d2b0"' : 'id="xs-components-links-module-DejaChipsModule-ead8078a587e2ab4c010d9bf06c3d2b0"' }>
                                        <li class="link">
                                            <a href="components/DejaChipsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaChipsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaCircularPickerModule.html" data-type="entity-link">DejaCircularPickerModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaCircularPickerModule-e99d27f21db2ed76bea5ca9311a51ebb"' : 'data-target="#xs-components-links-module-DejaCircularPickerModule-e99d27f21db2ed76bea5ca9311a51ebb"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaCircularPickerModule-e99d27f21db2ed76bea5ca9311a51ebb"' : 'id="xs-components-links-module-DejaCircularPickerModule-e99d27f21db2ed76bea5ca9311a51ebb"' }>
                                        <li class="link">
                                            <a href="components/DejaCircularPickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaCircularPickerComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaClipboardModule.html" data-type="entity-link">DejaClipboardModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-DejaClipboardModule-00b1c225c2e82ea5428bd743565eb319"' : 'data-target="#xs-injectables-links-module-DejaClipboardModule-00b1c225c2e82ea5428bd743565eb319"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-DejaClipboardModule-00b1c225c2e82ea5428bd743565eb319"' : 'id="xs-injectables-links-module-DejaClipboardModule-00b1c225c2e82ea5428bd743565eb319"' }>
                                        <li class="link">
                                            <a href="injectables/DejaClipboardService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DejaClipboardService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaColorPickerModule.html" data-type="entity-link">DejaColorPickerModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaColorPickerModule-fd1854eaefacb72b61c8fe673edf6cd6"' : 'data-target="#xs-components-links-module-DejaColorPickerModule-fd1854eaefacb72b61c8fe673edf6cd6"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaColorPickerModule-fd1854eaefacb72b61c8fe673edf6cd6"' : 'id="xs-components-links-module-DejaColorPickerModule-fd1854eaefacb72b61c8fe673edf6cd6"' }>
                                        <li class="link">
                                            <a href="components/DejaColorPickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaColorPickerComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaColorSelectorModule.html" data-type="entity-link">DejaColorSelectorModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaColorSelectorModule-f9bfd9ade1b6276825ab4939b5894942"' : 'data-target="#xs-components-links-module-DejaColorSelectorModule-f9bfd9ade1b6276825ab4939b5894942"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaColorSelectorModule-f9bfd9ade1b6276825ab4939b5894942"' : 'id="xs-components-links-module-DejaColorSelectorModule-f9bfd9ade1b6276825ab4939b5894942"' }>
                                        <li class="link">
                                            <a href="components/DejaColorFabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaColorFabComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaColorSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaColorSelectorComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaComboListModule.html" data-type="entity-link">DejaComboListModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaComboListModule-5b10f61b17a5588f77ea05b4c6994a3c"' : 'data-target="#xs-components-links-module-DejaComboListModule-5b10f61b17a5588f77ea05b4c6994a3c"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaComboListModule-5b10f61b17a5588f77ea05b4c6994a3c"' : 'id="xs-components-links-module-DejaComboListModule-5b10f61b17a5588f77ea05b4c6994a3c"' }>
                                        <li class="link">
                                            <a href="components/DejaComboListActionbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaComboListActionbarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaComboListChildComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaComboListChildComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaComboListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaComboListComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaDatePickerModule.html" data-type="entity-link">DejaDatePickerModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaDatePickerModule-f98891f54f8e37d8095cb7300a3335cf"' : 'data-target="#xs-components-links-module-DejaDatePickerModule-f98891f54f8e37d8095cb7300a3335cf"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaDatePickerModule-f98891f54f8e37d8095cb7300a3335cf"' : 'id="xs-components-links-module-DejaDatePickerModule-f98891f54f8e37d8095cb7300a3335cf"' }>
                                        <li class="link">
                                            <a href="components/DejaDatePickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaDatePickerComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaDateSelectorModule.html" data-type="entity-link">DejaDateSelectorModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaDateSelectorModule-8bf5cf5236ce2d08e9a87844eac0e5ad"' : 'data-target="#xs-components-links-module-DejaDateSelectorModule-8bf5cf5236ce2d08e9a87844eac0e5ad"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaDateSelectorModule-8bf5cf5236ce2d08e9a87844eac0e5ad"' : 'id="xs-components-links-module-DejaDateSelectorModule-8bf5cf5236ce2d08e9a87844eac0e5ad"' }>
                                        <li class="link">
                                            <a href="components/DejaDateSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaDateSelectorComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-DejaDateSelectorModule-8bf5cf5236ce2d08e9a87844eac0e5ad"' : 'data-target="#xs-pipes-links-module-DejaDateSelectorModule-8bf5cf5236ce2d08e9a87844eac0e5ad"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-DejaDateSelectorModule-8bf5cf5236ce2d08e9a87844eac0e5ad"' : 'id="xs-pipes-links-module-DejaDateSelectorModule-8bf5cf5236ce2d08e9a87844eac0e5ad"' }>
                                        <li class="link">
                                            <a href="pipes/DejaDateFormatPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaDateFormatPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaDialogModule.html" data-type="entity-link">DejaDialogModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaDialogModule-720c60aada53f7ef4f8dae2ecdb22578"' : 'data-target="#xs-components-links-module-DejaDialogModule-720c60aada53f7ef4f8dae2ecdb22578"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaDialogModule-720c60aada53f7ef4f8dae2ecdb22578"' : 'id="xs-components-links-module-DejaDialogModule-720c60aada53f7ef4f8dae2ecdb22578"' }>
                                        <li class="link">
                                            <a href="components/DejaDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaDialogComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaDragDropModule.html" data-type="entity-link">DejaDragDropModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DejaDragDropModule-9a3980448d5fd5bdacf2d648907f0795"' : 'data-target="#xs-directives-links-module-DejaDragDropModule-9a3980448d5fd5bdacf2d648907f0795"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DejaDragDropModule-9a3980448d5fd5bdacf2d648907f0795"' : 'id="xs-directives-links-module-DejaDragDropModule-9a3980448d5fd5bdacf2d648907f0795"' }>
                                        <li class="link">
                                            <a href="directives/DejaDraggableDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaDraggableDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DejaDroppableDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaDroppableDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaEditableModule.html" data-type="entity-link">DejaEditableModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DejaEditableModule-6d469de760109c740a416d2169d91181"' : 'data-target="#xs-directives-links-module-DejaEditableModule-6d469de760109c740a416d2169d91181"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DejaEditableModule-6d469de760109c740a416d2169d91181"' : 'id="xs-directives-links-module-DejaEditableModule-6d469de760109c740a416d2169d91181"' }>
                                        <li class="link">
                                            <a href="directives/DejaEditableDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaEditableDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaEditorModule.html" data-type="entity-link">DejaEditorModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaEditorModule-3f2f1d1f1410644346f38108a4b13552"' : 'data-target="#xs-components-links-module-DejaEditorModule-3f2f1d1f1410644346f38108a4b13552"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaEditorModule-3f2f1d1f1410644346f38108a4b13552"' : 'id="xs-components-links-module-DejaEditorModule-3f2f1d1f1410644346f38108a4b13552"' }>
                                        <li class="link">
                                            <a href="components/DejaEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaEditorComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-DejaEditorModule-3f2f1d1f1410644346f38108a4b13552"' : 'data-target="#xs-injectables-links-module-DejaEditorModule-3f2f1d1f1410644346f38108a4b13552"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-DejaEditorModule-3f2f1d1f1410644346f38108a4b13552"' : 'id="xs-injectables-links-module-DejaEditorModule-3f2f1d1f1410644346f38108a4b13552"' }>
                                        <li class="link">
                                            <a href="injectables/DejaEditorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DejaEditorService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaFormModule.html" data-type="entity-link">DejaFormModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DejaFormModule-f91d41e915ecd80b768fa409f2d8762f"' : 'data-target="#xs-directives-links-module-DejaFormModule-f91d41e915ecd80b768fa409f2d8762f"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DejaFormModule-f91d41e915ecd80b768fa409f2d8762f"' : 'id="xs-directives-links-module-DejaFormModule-f91d41e915ecd80b768fa409f2d8762f"' }>
                                        <li class="link">
                                            <a href="directives/PendingOnFocusDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PendingOnFocusDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ValidateOnBlurDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ValidateOnBlurDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaGridModule.html" data-type="entity-link">DejaGridModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaGridModule-b7024b279eeb105f9c116b34fd09400d"' : 'data-target="#xs-components-links-module-DejaGridModule-b7024b279eeb105f9c116b34fd09400d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaGridModule-b7024b279eeb105f9c116b34fd09400d"' : 'id="xs-components-links-module-DejaGridModule-b7024b279eeb105f9c116b34fd09400d"' }>
                                        <li class="link">
                                            <a href="components/DejaGridComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaGridComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaGridGroupAreaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaGridGroupAreaComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaGridHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaGridHeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaGridParentRowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaGridParentRowComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaGridRowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaGridRowComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaIFrameModule.html" data-type="entity-link">DejaIFrameModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaIFrameModule-1cc494693d95b5f912050f650e436486"' : 'data-target="#xs-components-links-module-DejaIFrameModule-1cc494693d95b5f912050f650e436486"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaIFrameModule-1cc494693d95b5f912050f650e436486"' : 'id="xs-components-links-module-DejaIFrameModule-1cc494693d95b5f912050f650e436486"' }>
                                        <li class="link">
                                            <a href="components/DejaIFrameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaIFrameComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaItemModule.html" data-type="entity-link">DejaItemModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaItemModule-c006e08daed358193e4f1ea8476f9b80"' : 'data-target="#xs-components-links-module-DejaItemModule-c006e08daed358193e4f1ea8476f9b80"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaItemModule-c006e08daed358193e4f1ea8476f9b80"' : 'id="xs-components-links-module-DejaItemModule-c006e08daed358193e4f1ea8476f9b80"' }>
                                        <li class="link">
                                            <a href="components/DejaItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaItemComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaListLoaderModule.html" data-type="entity-link">DejaListLoaderModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaListLoaderModule-2f88b20f3df529534a299f04b98ea6c8"' : 'data-target="#xs-components-links-module-DejaListLoaderModule-2f88b20f3df529534a299f04b98ea6c8"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaListLoaderModule-2f88b20f3df529534a299f04b98ea6c8"' : 'id="xs-components-links-module-DejaListLoaderModule-2f88b20f3df529534a299f04b98ea6c8"' }>
                                        <li class="link">
                                            <a href="components/DejaListLoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaListLoaderComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaMatEditorModule.html" data-type="entity-link">DejaMatEditorModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaMatEditorModule-fa75b82aa4ae16161e17576fb60a1383"' : 'data-target="#xs-components-links-module-DejaMatEditorModule-fa75b82aa4ae16161e17576fb60a1383"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaMatEditorModule-fa75b82aa4ae16161e17576fb60a1383"' : 'id="xs-components-links-module-DejaMatEditorModule-fa75b82aa4ae16161e17576fb60a1383"' }>
                                        <li class="link">
                                            <a href="components/DejaEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaEditorComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DejaMatEditorModule-fa75b82aa4ae16161e17576fb60a1383"' : 'data-target="#xs-directives-links-module-DejaMatEditorModule-fa75b82aa4ae16161e17576fb60a1383"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DejaMatEditorModule-fa75b82aa4ae16161e17576fb60a1383"' : 'id="xs-directives-links-module-DejaMatEditorModule-fa75b82aa4ae16161e17576fb60a1383"' }>
                                        <li class="link">
                                            <a href="directives/DejaEditorSelectorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaEditorSelectorDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaMaterialColorsModule.html" data-type="entity-link">DejaMaterialColorsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-DejaMaterialColorsModule-21d1891369eedd493dbe511c723384d1"' : 'data-target="#xs-injectables-links-module-DejaMaterialColorsModule-21d1891369eedd493dbe511c723384d1"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-DejaMaterialColorsModule-21d1891369eedd493dbe511c723384d1"' : 'id="xs-injectables-links-module-DejaMaterialColorsModule-21d1891369eedd493dbe511c723384d1"' }>
                                        <li class="link">
                                            <a href="injectables/MaterialColors.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>MaterialColors</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaMessageBoxModule.html" data-type="entity-link">DejaMessageBoxModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaMessageBoxModule-c8649a514989d6849c376f6451a7a1f8"' : 'data-target="#xs-components-links-module-DejaMessageBoxModule-c8649a514989d6849c376f6451a7a1f8"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaMessageBoxModule-c8649a514989d6849c376f6451a7a1f8"' : 'id="xs-components-links-module-DejaMessageBoxModule-c8649a514989d6849c376f6451a7a1f8"' }>
                                        <li class="link">
                                            <a href="components/DejaMessageBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaMessageBoxComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaMonacoEditorModule.html" data-type="entity-link">DejaMonacoEditorModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaMonacoEditorModule-e4b75884807074b10890a404cd826855"' : 'data-target="#xs-components-links-module-DejaMonacoEditorModule-e4b75884807074b10890a404cd826855"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaMonacoEditorModule-e4b75884807074b10890a404cd826855"' : 'id="xs-components-links-module-DejaMonacoEditorModule-e4b75884807074b10890a404cd826855"' }>
                                        <li class="link">
                                            <a href="components/DejaMonacoEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaMonacoEditorComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-DejaMonacoEditorModule-e4b75884807074b10890a404cd826855"' : 'data-target="#xs-injectables-links-module-DejaMonacoEditorModule-e4b75884807074b10890a404cd826855"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-DejaMonacoEditorModule-e4b75884807074b10890a404cd826855"' : 'id="xs-injectables-links-module-DejaMonacoEditorModule-e4b75884807074b10890a404cd826855"' }>
                                        <li class="link">
                                            <a href="injectables/MonacoEditorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>MonacoEditorService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaMouseDragDropModule.html" data-type="entity-link">DejaMouseDragDropModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaMouseDragDropModule-3c28145ee95d8075f1d2e2a889e5111a"' : 'data-target="#xs-components-links-module-DejaMouseDragDropModule-3c28145ee95d8075f1d2e2a889e5111a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaMouseDragDropModule-3c28145ee95d8075f1d2e2a889e5111a"' : 'id="xs-components-links-module-DejaMouseDragDropModule-3c28145ee95d8075f1d2e2a889e5111a"' }>
                                        <li class="link">
                                            <a href="components/DejaMouseDragDropCursorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaMouseDragDropCursorComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DejaMouseDragDropModule-3c28145ee95d8075f1d2e2a889e5111a"' : 'data-target="#xs-directives-links-module-DejaMouseDragDropModule-3c28145ee95d8075f1d2e2a889e5111a"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DejaMouseDragDropModule-3c28145ee95d8075f1d2e2a889e5111a"' : 'id="xs-directives-links-module-DejaMouseDragDropModule-3c28145ee95d8075f1d2e2a889e5111a"' }>
                                        <li class="link">
                                            <a href="directives/DejaMouseDraggableDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaMouseDraggableDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DejaMouseDroppableDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaMouseDroppableDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaNumericStepperModule.html" data-type="entity-link">DejaNumericStepperModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaNumericStepperModule-021e34afa1c92cdd6f2d21d3ecc3e4e2"' : 'data-target="#xs-components-links-module-DejaNumericStepperModule-021e34afa1c92cdd6f2d21d3ecc3e4e2"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaNumericStepperModule-021e34afa1c92cdd6f2d21d3ecc3e4e2"' : 'id="xs-components-links-module-DejaNumericStepperModule-021e34afa1c92cdd6f2d21d3ecc3e4e2"' }>
                                        <li class="link">
                                            <a href="components/DejaNumericStepperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaNumericStepperComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaOverlayModule.html" data-type="entity-link">DejaOverlayModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaOverlayModule-755af29df33153847b264f1cc1d63188"' : 'data-target="#xs-components-links-module-DejaOverlayModule-755af29df33153847b264f1cc1d63188"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaOverlayModule-755af29df33153847b264f1cc1d63188"' : 'id="xs-components-links-module-DejaOverlayModule-755af29df33153847b264f1cc1d63188"' }>
                                        <li class="link">
                                            <a href="components/DejaOverlayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaOverlayComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaPipeModule.html" data-type="entity-link">DejaPipeModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-DejaPipeModule-ac6a22f6ea5eeb81c16b88d817e688b6"' : 'data-target="#xs-pipes-links-module-DejaPipeModule-ac6a22f6ea5eeb81c16b88d817e688b6"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-DejaPipeModule-ac6a22f6ea5eeb81c16b88d817e688b6"' : 'id="xs-pipes-links-module-DejaPipeModule-ac6a22f6ea5eeb81c16b88d817e688b6"' }>
                                        <li class="link">
                                            <a href="pipes/KeysPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">KeysPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/SafeHTMLPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SafeHTMLPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/SafeStylePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SafeStylePipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/StringToDateFormatPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StringToDateFormatPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/TimeAgoPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimeAgoPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaPopupModule.html" data-type="entity-link">DejaPopupModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaPopupModule-382aa8daf0e5518efce016371bce6fa4"' : 'data-target="#xs-components-links-module-DejaPopupModule-382aa8daf0e5518efce016371bce6fa4"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaPopupModule-382aa8daf0e5518efce016371bce6fa4"' : 'id="xs-components-links-module-DejaPopupModule-382aa8daf0e5518efce016371bce6fa4"' }>
                                        <li class="link">
                                            <a href="components/DejaPopupActionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaPopupActionsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaPopupAdvancedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaPopupAdvancedComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaPopupBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaPopupBoxComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaPopupComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaPopupContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaPopupContentComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaPopupToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaPopupToolbarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaPopupTrayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaPopupTrayComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-DejaPopupModule-382aa8daf0e5518efce016371bce6fa4"' : 'data-target="#xs-injectables-links-module-DejaPopupModule-382aa8daf0e5518efce016371bce6fa4"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-DejaPopupModule-382aa8daf0e5518efce016371bce6fa4"' : 'id="xs-injectables-links-module-DejaPopupModule-382aa8daf0e5518efce016371bce6fa4"' }>
                                        <li class="link">
                                            <a href="injectables/DejaPopupService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DejaPopupService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaRangeModule.html" data-type="entity-link">DejaRangeModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaRangeModule-20d077f152346b1e3a406819764e8c2a"' : 'data-target="#xs-components-links-module-DejaRangeModule-20d077f152346b1e3a406819764e8c2a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaRangeModule-20d077f152346b1e3a406819764e8c2a"' : 'id="xs-components-links-module-DejaRangeModule-20d077f152346b1e3a406819764e8c2a"' }>
                                        <li class="link">
                                            <a href="components/DejaRangeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaRangeComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaSelectModule.html" data-type="entity-link">DejaSelectModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaSelectModule-58df6d4b56b3ceadacf83b7d51d39d25"' : 'data-target="#xs-components-links-module-DejaSelectModule-58df6d4b56b3ceadacf83b7d51d39d25"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaSelectModule-58df6d4b56b3ceadacf83b7d51d39d25"' : 'id="xs-components-links-module-DejaSelectModule-58df6d4b56b3ceadacf83b7d51d39d25"' }>
                                        <li class="link">
                                            <a href="components/DejaSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaSelectComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaSidenavModule.html" data-type="entity-link">DejaSidenavModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaSidenavModule-aaeb57f87c9e54a920368cc43f18c6d8"' : 'data-target="#xs-components-links-module-DejaSidenavModule-aaeb57f87c9e54a920368cc43f18c6d8"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaSidenavModule-aaeb57f87c9e54a920368cc43f18c6d8"' : 'id="xs-components-links-module-DejaSidenavModule-aaeb57f87c9e54a920368cc43f18c6d8"' }>
                                        <li class="link">
                                            <a href="components/DejaSidenavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaSidenavComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DejaSidenavModule-aaeb57f87c9e54a920368cc43f18c6d8"' : 'data-target="#xs-directives-links-module-DejaSidenavModule-aaeb57f87c9e54a920368cc43f18c6d8"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DejaSidenavModule-aaeb57f87c9e54a920368cc43f18c6d8"' : 'id="xs-directives-links-module-DejaSidenavModule-aaeb57f87c9e54a920368cc43f18c6d8"' }>
                                        <li class="link">
                                            <a href="directives/DejaSidenavContentDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaSidenavContentDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DejaSidenavHeaderDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaSidenavHeaderDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DejaSidenavMenuDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaSidenavMenuDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DejaSidenavMenuSeparatorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaSidenavMenuSeparatorDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaSlimScrollModule.html" data-type="entity-link">DejaSlimScrollModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DejaSlimScrollModule-21d1fd6674719d117232975f9604d564"' : 'data-target="#xs-directives-links-module-DejaSlimScrollModule-21d1fd6674719d117232975f9604d564"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DejaSlimScrollModule-21d1fd6674719d117232975f9604d564"' : 'id="xs-directives-links-module-DejaSlimScrollModule-21d1fd6674719d117232975f9604d564"' }>
                                        <li class="link">
                                            <a href="directives/DejaSlimScrollDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaSlimScrollDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaSnackbarModule.html" data-type="entity-link">DejaSnackbarModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaSnackbarModule-64723512153e9d696f7d259d4aa8510e"' : 'data-target="#xs-components-links-module-DejaSnackbarModule-64723512153e9d696f7d259d4aa8510e"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaSnackbarModule-64723512153e9d696f7d259d4aa8510e"' : 'id="xs-components-links-module-DejaSnackbarModule-64723512153e9d696f7d259d4aa8510e"' }>
                                        <li class="link">
                                            <a href="components/DejaSnackbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaSnackbarComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaSortingModule.html" data-type="entity-link">DejaSortingModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaSortingModule-cbac391a34d1e5882903c006ff861f14"' : 'data-target="#xs-components-links-module-DejaSortingModule-cbac391a34d1e5882903c006ff861f14"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaSortingModule-cbac391a34d1e5882903c006ff861f14"' : 'id="xs-components-links-module-DejaSortingModule-cbac391a34d1e5882903c006ff861f14"' }>
                                        <li class="link">
                                            <a href="components/DejaSortIndicatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaSortIndicatorComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaSplitterModule.html" data-type="entity-link">DejaSplitterModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaSplitterModule-9a104bb2c62339d2388d7cfe938da29c"' : 'data-target="#xs-components-links-module-DejaSplitterModule-9a104bb2c62339d2388d7cfe938da29c"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaSplitterModule-9a104bb2c62339d2388d7cfe938da29c"' : 'id="xs-components-links-module-DejaSplitterModule-9a104bb2c62339d2388d7cfe938da29c"' }>
                                        <li class="link">
                                            <a href="components/DejaSplitterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaSplitterComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DejaSplitterModule-9a104bb2c62339d2388d7cfe938da29c"' : 'data-target="#xs-directives-links-module-DejaSplitterModule-9a104bb2c62339d2388d7cfe938da29c"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DejaSplitterModule-9a104bb2c62339d2388d7cfe938da29c"' : 'id="xs-directives-links-module-DejaSplitterModule-9a104bb2c62339d2388d7cfe938da29c"' }>
                                        <li class="link">
                                            <a href="directives/SplitAreaDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SplitAreaDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SplitGutterDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SplitGutterDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaTagModule.html" data-type="entity-link">DejaTagModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaTagModule-a10a4cc305dc01fc60107309f7482465"' : 'data-target="#xs-components-links-module-DejaTagModule-a10a4cc305dc01fc60107309f7482465"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaTagModule-a10a4cc305dc01fc60107309f7482465"' : 'id="xs-components-links-module-DejaTagModule-a10a4cc305dc01fc60107309f7482465"' }>
                                        <li class="link">
                                            <a href="components/DejaTagComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaTagComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaTextMetricsModule.html" data-type="entity-link">DejaTextMetricsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-DejaTextMetricsModule-f8716153b0414ab9d2c2564247d4b370"' : 'data-target="#xs-injectables-links-module-DejaTextMetricsModule-f8716153b0414ab9d2c2564247d4b370"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-DejaTextMetricsModule-f8716153b0414ab9d2c2564247d4b370"' : 'id="xs-injectables-links-module-DejaTextMetricsModule-f8716153b0414ab9d2c2564247d4b370"' }>
                                        <li class="link">
                                            <a href="injectables/DejaTextMetricsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DejaTextMetricsService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaTilesModule.html" data-type="entity-link">DejaTilesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaTilesModule-6bd5b6162d450ce0ad7d362e0550555a"' : 'data-target="#xs-components-links-module-DejaTilesModule-6bd5b6162d450ce0ad7d362e0550555a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaTilesModule-6bd5b6162d450ce0ad7d362e0550555a"' : 'id="xs-components-links-module-DejaTilesModule-6bd5b6162d450ce0ad7d362e0550555a"' }>
                                        <li class="link">
                                            <a href="components/DejaTileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaTileComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaTileGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaTileGroupComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DejaTilesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaTilesComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DejaTilesModule-6bd5b6162d450ce0ad7d362e0550555a"' : 'data-target="#xs-directives-links-module-DejaTilesModule-6bd5b6162d450ce0ad7d362e0550555a"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DejaTilesModule-6bd5b6162d450ce0ad7d362e0550555a"' : 'id="xs-directives-links-module-DejaTilesModule-6bd5b6162d450ce0ad7d362e0550555a"' }>
                                        <li class="link">
                                            <a href="directives/DejaTilePositionDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaTilePositionDirective</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-DejaTilesModule-6bd5b6162d450ce0ad7d362e0550555a"' : 'data-target="#xs-injectables-links-module-DejaTilesModule-6bd5b6162d450ce0ad7d362e0550555a"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-DejaTilesModule-6bd5b6162d450ce0ad7d362e0550555a"' : 'id="xs-injectables-links-module-DejaTilesModule-6bd5b6162d450ce0ad7d362e0550555a"' }>
                                        <li class="link">
                                            <a href="injectables/DejaMouseDragDropService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DejaMouseDragDropService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaTooltipModule.html" data-type="entity-link">DejaTooltipModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaTooltipModule-d2fb5add02b095d223eb0f904f9dcc16"' : 'data-target="#xs-components-links-module-DejaTooltipModule-d2fb5add02b095d223eb0f904f9dcc16"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaTooltipModule-d2fb5add02b095d223eb0f904f9dcc16"' : 'id="xs-components-links-module-DejaTooltipModule-d2fb5add02b095d223eb0f904f9dcc16"' }>
                                        <li class="link">
                                            <a href="components/DejaTooltipComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaTooltipComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DejaTooltipModule-d2fb5add02b095d223eb0f904f9dcc16"' : 'data-target="#xs-directives-links-module-DejaTooltipModule-d2fb5add02b095d223eb0f904f9dcc16"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DejaTooltipModule-d2fb5add02b095d223eb0f904f9dcc16"' : 'id="xs-directives-links-module-DejaTooltipModule-d2fb5add02b095d223eb0f904f9dcc16"' }>
                                        <li class="link">
                                            <a href="directives/DejaTooltipDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaTooltipDirective</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-DejaTooltipModule-d2fb5add02b095d223eb0f904f9dcc16"' : 'data-target="#xs-injectables-links-module-DejaTooltipModule-d2fb5add02b095d223eb0f904f9dcc16"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-DejaTooltipModule-d2fb5add02b095d223eb0f904f9dcc16"' : 'id="xs-injectables-links-module-DejaTooltipModule-d2fb5add02b095d223eb0f904f9dcc16"' }>
                                        <li class="link">
                                            <a href="injectables/DejaTooltipService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DejaTooltipService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaTreeListModule.html" data-type="entity-link">DejaTreeListModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaTreeListModule-42bc1cfffcedb711043700340f0ba7ac"' : 'data-target="#xs-components-links-module-DejaTreeListModule-42bc1cfffcedb711043700340f0ba7ac"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaTreeListModule-42bc1cfffcedb711043700340f0ba7ac"' : 'id="xs-components-links-module-DejaTreeListModule-42bc1cfffcedb711043700340f0ba7ac"' }>
                                        <li class="link">
                                            <a href="components/DejaTreeListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaTreeListComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DejaViewPortModule.html" data-type="entity-link">DejaViewPortModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DejaViewPortModule-9c0f6a70bbe0dcee7ccb6c720a063ef9"' : 'data-target="#xs-components-links-module-DejaViewPortModule-9c0f6a70bbe0dcee7ccb6c720a063ef9"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DejaViewPortModule-9c0f6a70bbe0dcee7ccb6c720a063ef9"' : 'id="xs-components-links-module-DejaViewPortModule-9c0f6a70bbe0dcee7ccb6c720a063ef9"' }>
                                        <li class="link">
                                            <a href="components/DejaViewPortComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaViewPortComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/GroupingModule.html" data-type="entity-link">GroupingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/IconModule.html" data-type="entity-link">IconModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-IconModule-9e3c25f606590e2ab5934d35efa02a5d"' : 'data-target="#xs-injectables-links-module-IconModule-9e3c25f606590e2ab5934d35efa02a5d"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-IconModule-9e3c25f606590e2ab5934d35efa02a5d"' : 'id="xs-injectables-links-module-IconModule-9e3c25f606590e2ab5934d35efa02a5d"' }>
                                        <li class="link">
                                            <a href="injectables/IconService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>IconService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/MediaModule.html" data-type="entity-link">MediaModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-MediaModule-c47f57a4cc1e694a3309734ae1ed8ef5"' : 'data-target="#xs-injectables-links-module-MediaModule-c47f57a4cc1e694a3309734ae1ed8ef5"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-MediaModule-c47f57a4cc1e694a3309734ae1ed8ef5"' : 'id="xs-injectables-links-module-MediaModule-c47f57a4cc1e694a3309734ae1ed8ef5"' }>
                                        <li class="link">
                                            <a href="injectables/MediaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>MediaService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ResizeListenerModule.html" data-type="entity-link">ResizeListenerModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-ResizeListenerModule-ee0f25c75f202b06a59718587b960698"' : 'data-target="#xs-directives-links-module-ResizeListenerModule-ee0f25c75f202b06a59718587b960698"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-ResizeListenerModule-ee0f25c75f202b06a59718587b960698"' : 'id="xs-directives-links-module-ResizeListenerModule-ee0f25c75f202b06a59718587b960698"' }>
                                        <li class="link">
                                            <a href="directives/DejaResizeListenerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DejaResizeListenerDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/Circle.html" data-type="entity-link">Circle</a>
                    </li>
                    <li class="link">
                        <a href="classes/Color.html" data-type="entity-link">Color</a>
                    </li>
                    <li class="link">
                        <a href="classes/DateUtils.html" data-type="entity-link">DateUtils</a>
                    </li>
                    <li class="link">
                        <a href="classes/DejaColorFab.html" data-type="entity-link">DejaColorFab</a>
                    </li>
                    <li class="link">
                        <a href="classes/DejaComboListBase.html" data-type="entity-link">DejaComboListBase</a>
                    </li>
                    <li class="link">
                        <a href="classes/DejaComboListState.html" data-type="entity-link">DejaComboListState</a>
                    </li>
                    <li class="link">
                        <a href="classes/DejaConnectionPositionPair.html" data-type="entity-link">DejaConnectionPositionPair</a>
                    </li>
                    <li class="link">
                        <a href="classes/DejaGridColumnsLayoutInfos.html" data-type="entity-link">DejaGridColumnsLayoutInfos</a>
                    </li>
                    <li class="link">
                        <a href="classes/DejaGridRowEvent.html" data-type="entity-link">DejaGridRowEvent</a>
                    </li>
                    <li class="link">
                        <a href="classes/DejaGridRowsEvent.html" data-type="entity-link">DejaGridRowsEvent</a>
                    </li>
                    <li class="link">
                        <a href="classes/DejaItemEvent.html" data-type="entity-link">DejaItemEvent</a>
                    </li>
                    <li class="link">
                        <a href="classes/DejaItemsEvent.html" data-type="entity-link">DejaItemsEvent</a>
                    </li>
                    <li class="link">
                        <a href="classes/DejaPopupAction.html" data-type="entity-link">DejaPopupAction</a>
                    </li>
                    <li class="link">
                        <a href="classes/DejaPopupBase.html" data-type="entity-link">DejaPopupBase</a>
                    </li>
                    <li class="link">
                        <a href="classes/DejaPopupButton.html" data-type="entity-link">DejaPopupButton</a>
                    </li>
                    <li class="link">
                        <a href="classes/DejaPopupConfig.html" data-type="entity-link">DejaPopupConfig</a>
                    </li>
                    <li class="link">
                        <a href="classes/DejaPopupReponse.html" data-type="entity-link">DejaPopupReponse</a>
                    </li>
                    <li class="link">
                        <a href="classes/DejaTile.html" data-type="entity-link">DejaTile</a>
                    </li>
                    <li class="link">
                        <a href="classes/DejaTreeListScrollEvent.html" data-type="entity-link">DejaTreeListScrollEvent</a>
                    </li>
                    <li class="link">
                        <a href="classes/Diacritics.html" data-type="entity-link">Diacritics</a>
                    </li>
                    <li class="link">
                        <a href="classes/EditorOptions.html" data-type="entity-link">EditorOptions</a>
                    </li>
                    <li class="link">
                        <a href="classes/EditorScrollbarOptions.html" data-type="entity-link">EditorScrollbarOptions</a>
                    </li>
                    <li class="link">
                        <a href="classes/GlobalEventEmmitter.html" data-type="entity-link">GlobalEventEmmitter</a>
                    </li>
                    <li class="link">
                        <a href="classes/GroupingService.html" data-type="entity-link">GroupingService</a>
                    </li>
                    <li class="link">
                        <a href="classes/HtmlUtils.html" data-type="entity-link">HtmlUtils</a>
                    </li>
                    <li class="link">
                        <a href="classes/IDejaGridColumnLayout.html" data-type="entity-link">IDejaGridColumnLayout</a>
                    </li>
                    <li class="link">
                        <a href="classes/IDejaGridParentRow.html" data-type="entity-link">IDejaGridParentRow</a>
                    </li>
                    <li class="link">
                        <a href="classes/ItemListBase.html" data-type="entity-link">ItemListBase</a>
                    </li>
                    <li class="link">
                        <a href="classes/ItemListService.html" data-type="entity-link">ItemListService</a>
                    </li>
                    <li class="link">
                        <a href="classes/MaterialColor.html" data-type="entity-link">MaterialColor</a>
                    </li>
                    <li class="link">
                        <a href="classes/MockElementRef.html" data-type="entity-link">MockElementRef</a>
                    </li>
                    <li class="link">
                        <a href="classes/MockMediaService.html" data-type="entity-link">MockMediaService</a>
                    </li>
                    <li class="link">
                        <a href="classes/Position.html" data-type="entity-link">Position</a>
                    </li>
                    <li class="link">
                        <a href="classes/Range.html" data-type="entity-link">Range</a>
                    </li>
                    <li class="link">
                        <a href="classes/Rect.html" data-type="entity-link">Rect</a>
                    </li>
                    <li class="link">
                        <a href="classes/RegExpUtils.html" data-type="entity-link">RegExpUtils</a>
                    </li>
                    <li class="link">
                        <a href="classes/Size.html" data-type="entity-link">Size</a>
                    </li>
                    <li class="link">
                        <a href="classes/SortingService.html" data-type="entity-link">SortingService</a>
                    </li>
                    <li class="link">
                        <a href="classes/StringUtils.html" data-type="entity-link">StringUtils</a>
                    </li>
                    <li class="link">
                        <a href="classes/UUID.html" data-type="entity-link">UUID</a>
                    </li>
                    <li class="link">
                        <a href="classes/UnitValue.html" data-type="entity-link">UnitValue</a>
                    </li>
                    <li class="link">
                        <a href="classes/ValidationMessages.html" data-type="entity-link">ValidationMessages</a>
                    </li>
                    <li class="link">
                        <a href="classes/ValueAccessor.html" data-type="entity-link">ValueAccessor</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/DejaSidenavService.html" data-type="entity-link">DejaSidenavService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/DejaTilesLayoutProvider.html" data-type="entity-link">DejaTilesLayoutProvider</a>
                            </li>
                            <li class="link">
                                <a href="injectables/GlobalEventService.html" data-type="entity-link">GlobalEventService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ViewPortService.html" data-type="entity-link">ViewPortService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/DejaPopupContentTemplate.html" data-type="entity-link">DejaPopupContentTemplate</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/HSL.html" data-type="entity-link">HSL</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IAnimation.html" data-type="entity-link">IAnimation</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IAreaData.html" data-type="entity-link">IAreaData</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ICircularRange.html" data-type="entity-link">ICircularRange</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ICircularValue.html" data-type="entity-link">ICircularValue</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IColorEvent.html" data-type="entity-link">IColorEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IConfig.html" data-type="entity-link">IConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDateSelectorItem.html" data-type="entity-link">IDateSelectorItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaAction.html" data-type="entity-link">IDejaAction</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaCancelableEvent.html" data-type="entity-link">IDejaCancelableEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaChipsComponentCloseEvent.html" data-type="entity-link">IDejaChipsComponentCloseEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaComboListAction.html" data-type="entity-link">IDejaComboListAction</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaDragContext.html" data-type="entity-link">IDejaDragContext</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaDragEvent.html" data-type="entity-link">IDejaDragEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaDropContext.html" data-type="entity-link">IDejaDropContext</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaDropEvent.html" data-type="entity-link">IDejaDropEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaGridColumn.html" data-type="entity-link">IDejaGridColumn</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaGridColumnEvent.html" data-type="entity-link">IDejaGridColumnEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaGridColumnLayoutEvent.html" data-type="entity-link">IDejaGridColumnLayoutEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaGridColumnSizeEvent.html" data-type="entity-link">IDejaGridColumnSizeEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaGridGroupsEvent.html" data-type="entity-link">IDejaGridGroupsEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaGridParentRowColumnLayout.html" data-type="entity-link">IDejaGridParentRowColumnLayout</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaGridRow.html" data-type="entity-link">IDejaGridRow</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaMouseDraggableContext.html" data-type="entity-link">IDejaMouseDraggableContext</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaMouseDroppableContext.html" data-type="entity-link">IDejaMouseDroppableContext</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaTile.html" data-type="entity-link">IDejaTile</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaTileEffect.html" data-type="entity-link">IDejaTileEffect</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaTilesAddEvent.html" data-type="entity-link">IDejaTilesAddEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaTilesCancelableEvent.html" data-type="entity-link">IDejaTilesCancelableEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaTilesEvent.html" data-type="entity-link">IDejaTilesEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaTilesModelEvent.html" data-type="entity-link">IDejaTilesModelEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaTilesRefreshParams.html" data-type="entity-link">IDejaTilesRefreshParams</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaTilesRemoveEvent.html" data-type="entity-link">IDejaTilesRemoveEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDejaViewPortItem.html" data-type="entity-link">IDejaViewPortItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDragCursorInfos.html" data-type="entity-link">IDragCursorInfos</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDragDropContext.html" data-type="entity-link">IDragDropContext</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDragDropInfos.html" data-type="entity-link">IDragDropInfos</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDragSelection.html" data-type="entity-link">IDragSelection</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IDropCursorInfos.html" data-type="entity-link">IDropCursorInfos</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IEnsureParams.html" data-type="entity-link">IEnsureParams</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IFindItemResult.html" data-type="entity-link">IFindItemResult</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IFindItemsResult.html" data-type="entity-link">IFindItemsResult</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IGlobalEventEmmitter.html" data-type="entity-link">IGlobalEventEmmitter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IGroupInfo.html" data-type="entity-link">IGroupInfo</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IGroupParent.html" data-type="entity-link">IGroupParent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IItemBase.html" data-type="entity-link">IItemBase</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IItemTree.html" data-type="entity-link">IItemTree</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IItemTreeInfo.html" data-type="entity-link">IItemTreeInfo</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ILayoutInfo.html" data-type="entity-link">ILayoutInfo</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ILayoutInfos.html" data-type="entity-link">ILayoutInfos</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IParentListInfoResult.html" data-type="entity-link">IParentListInfoResult</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IRange.html" data-type="entity-link">IRange</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IRangeEvent.html" data-type="entity-link">IRangeEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IRectOverlapInfos.html" data-type="entity-link">IRectOverlapInfos</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ISortInfos.html" data-type="entity-link">ISortInfos</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IStepRangeEvent.html" data-type="entity-link">IStepRangeEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ITooltipParams.html" data-type="entity-link">ITooltipParams</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IValidationError.html" data-type="entity-link">IValidationError</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IViewListResult.html" data-type="entity-link">IViewListResult</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IViewPort.html" data-type="entity-link">IViewPort</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IViewPortItem.html" data-type="entity-link">IViewPortItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IViewPortRefreshParams.html" data-type="entity-link">IViewPortRefreshParams</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Point.html" data-type="entity-link">Point</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SlimScrollOptions.html" data-type="entity-link">SlimScrollOptions</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
