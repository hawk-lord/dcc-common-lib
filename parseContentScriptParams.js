/*
 * © 2014-2015 Per Johansson
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

/**
 *
 * @param aContentScriptParams
 * @param anInformationHolder
 * @constructor
 */
const ParseContentScriptParams = function(aContentScriptParams, anInformationHolder) {
    "use strict";
    anInformationHolder.convertToCurrency = aContentScriptParams.convertToCurrency;
    anInformationHolder.convertToCountry = aContentScriptParams.convertToCountry;
    anInformationHolder.customSymbols = aContentScriptParams.customSymbols;
    anInformationHolder.decimalSep = aContentScriptParams.subUnitSeparator;
    anInformationHolder.enableOnStart = aContentScriptParams.enableOnStart;
    anInformationHolder.excludedDomains = aContentScriptParams.excludedDomains;
    anInformationHolder.enabledCurrencies = aContentScriptParams.enabledCurrencies;
    anInformationHolder.quoteAdjustmentPercent = aContentScriptParams.quoteAdjustmentPercent;
    anInformationHolder.roundPrices = aContentScriptParams.roundAmounts;
    anInformationHolder.separatePrice = aContentScriptParams.separatePrice;
    anInformationHolder.showOriginalPrices = aContentScriptParams.showOriginalPrices;
    anInformationHolder.unitAfter = aContentScriptParams.unitAfter;
    anInformationHolder.tempConvertUnits = aContentScriptParams.tempConvertUnits;
    anInformationHolder.thousandSep = aContentScriptParams.thousandSep;
};

if (typeof exports === "object") {
    exports.ParseContentScriptParams = ParseContentScriptParams;
}
